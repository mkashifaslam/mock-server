'use strict';
const fs = require('fs');
const path = require('path');
const dataDir = path.resolve(__dirname, 'data');

module.exports = function (server) {
  fs.readdirSync(dataDir).forEach(file => {
    const filePath = path.resolve(dataDir, file);
    try {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      const endpoint = `/${path.parse(file).name}`;
      server.get(endpoint, (req, res) => {
        res.json(data);
      });
    } catch (e) {
      console.warn(`Failed setting up endpoint for file: ${file}: ${e.message}`);
    }
  });
}
