const crypto = require('crypto');

const hashPassword = (password) => {
  return crypto
    .createHash('sha256')
    .update('HASH_PASSWORD')
    .update(password)
    .update(process.env.HASH_KEY_PASSWORD)
    .digest('base64');
};

module.exports = {
  hashPassword,
};
