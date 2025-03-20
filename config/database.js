module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite', // Use sqlite dialect
    connection: {
      filename: env('DATABASE_FILENAME', '.tmp/data.db'), // Path to your SQLite database
    },
    useNullAsDefault: true,
    pool: {
      min: 0,
      max: 1,
    },
    debug: false,
  },
});

