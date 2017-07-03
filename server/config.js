const serverConfig = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/example',
  port: process.env.PORT || 3000,
};

module.exports = serverConfig
