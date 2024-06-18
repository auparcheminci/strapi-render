const crypto = require('crypto');

const appKey = crypto.randomBytes(32).toString('hex');
const jwtSecret = crypto.randomBytes(32).toString('hex');
const adminJwtSecret = crypto.randomBytes(32).toString('hex');

console.log('APP_KEYS=', appKey);
console.log('JWT_SECRET=', jwtSecret);
console.log('ADMIN_JWT_SECRET=', adminJwtSecret);
