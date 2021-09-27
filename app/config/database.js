module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'postgres'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'gbconnectalertas'),
        username: env('DATABASE_USERNAME', 'gbconnectalertas'),
        password: env('DATABASE_PASSWORD', 'gbconnectalertas'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
