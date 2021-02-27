

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '0b77a665494a73073e74b00f0dc8e78b')
    },
  },
  cron: { enabled: true},
  url: "https://jinzhu-game.herokuapp.com"
});
