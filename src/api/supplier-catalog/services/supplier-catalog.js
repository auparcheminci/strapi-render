'use strict';

/**
 * supplier-catalog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::supplier-catalog.supplier-catalog');
