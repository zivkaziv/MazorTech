const config = {
  mongoURL: 'mongodb://heroku_8tlqs9j6:ic64tk953vbvp6l9j20ftjinio@ds157380.mlab.com:57380/heroku_8tlqs9j6' || 'mongodb://localhost:27017/mern-starter',
  //Test1234
  // mongoURL: process.env.NODE_ENV === 'production'? 'mongodb://heroku_8tlqs9j6:ic64tk953vbvp6l9j20ftjinio@ds157380.mlab.com:57380/heroku_8tlqs9j6' : 'mongodb://localhost:27017/mern-starter',
  port: process.env.PORT || 8000,
};

export default config;
