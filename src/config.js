let baseUrl = 'http://localhost:9190/api/v1';
let url = 'http://localhost:9190';
let mediaUrl = 'http://localhost:9190/views/uploads';

if (window.location.host === 'wina-dev.falconweb.app') {
  baseUrl = 'https://wina-api-dev.falconweb.app/api/v1';
  url = 'https://wina-api-dev.falconweb.app';
  mediaUrl = 'https://wina-api-dev.falconweb.app/views/uploads';
} else if (window.location.host === 'wina-qa.falconweb.app') {
  baseUrl = 'https://wina-api-qa.falconweb.app/api/v1';
  url = 'https://wina-api-qa.falconweb.app';
  mediaUrl = 'https://wina-api-qa.falconweb.app/views/uploads';
} else if (window.location.host === 'wina-staging.falconweb.app') {
  baseUrl = 'https://wina-api-staging.falconweb.app/api/v1';
  url = 'https://wina-api-staging.falconweb.app';
  mediaUrl = 'https://wina-api-staging.falconweb.app/views/uploads';
} else if (window.location.host === 'winaa.fr' || window.location.host === 'www.winaa.fr') {
  baseUrl = 'https://api.winaa.fr/api/v1';
  url = 'https://api.winaa.fr';
  mediaUrl = 'https://api.winaa.fr/views/uploads';
}

module.exports = { baseUrl, url, mediaUrl };
