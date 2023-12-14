// ./config/plugins.js`
'use strict';

module.exports = {
  documentation: {
    config: {
      'x-strapi-config': {
        plugins: ['menus', 'upload', 'users-permissions'],
      },
    },
  },
};