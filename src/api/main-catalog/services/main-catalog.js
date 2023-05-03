'use strict';

/**
 * main-catalog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::main-catalog.main-catalog');
