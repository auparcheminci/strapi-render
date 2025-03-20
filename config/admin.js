module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'your-jwt-secret-here'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', '91f0a8d7e4c6b5a392f718056e2d9c03b4f7a1e8'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'a0e2b9c7d6f5e4a3b2c1d0e9f8a7b6c5'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
  watchIgnoreFiles: [
    '**/config/sync/**',
  ],
});
