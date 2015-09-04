module.exports = {
  port: 3000,
  viewCache: false,
  viewStaticFiles: true,
  viewDocumentation: true,
  environment: 'development',
  db: require('./db.js'),
  TOKEN_SECRET: process.env.TOKEN_SECRET || "tokenultrasecreto"
};
