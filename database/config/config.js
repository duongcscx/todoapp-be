module.exports = {
  development: {
    url: `postgres://${process.env.DB_USERNAME}:${encodeURIComponent(process.env.DB_PASSWORD)}@${process.env.DB_HOST}:${
      process.env.DB_PORT
    }/${process.env.DB_NAME}`,
    dialect: 'postgres',
    // ssl: true,
    // dialectOptions: {
    //   ssl: {
    //     require: true,
    //   },
    // },
  },

  test: {
    url: `postgres://${process.env.DB_USERNAME}:${encodeURIComponent(process.env.DB_PASSWORD)}@${process.env.DB_HOST}:${
      process.env.DB_PORT
    }/${process.env.DB_NAME}`,
    dialect: 'postgres',
    // ssl: true,
    // dialectOptions: {
    //   ssl: {
    //     require: true,
    //   },
    // },
  },
  production: {
    url: `postgres://${process.env.DB_USERNAME}:${encodeURIComponent(process.env.DB_PASSWORD)}@${process.env.DB_HOST}:${
      process.env.DB_PORT
    }/${process.env.DB_NAME}`,
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
      },
    },
  },
};
