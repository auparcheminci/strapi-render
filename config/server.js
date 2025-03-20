module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', [
      'randomKey1hg7d5sLp8qZ2kX3jY4w',
      'randomKey2pR9tQ1wS3eD4fG5hJ6k',
      'randomKey3nB7vC8xZ9aL1mN2oP3q',
      'randomKey4rY5tU6iO7pA8sD9fG0h'
    ]),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  url: env('PUBLIC_URL', ''),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '7a5afbc08e36bb4c8a8e85da4b04196b'),
    },
  },
});
