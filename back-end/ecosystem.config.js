module.exports = {
  apps: [
    {
      script: "app.js",
      env: {
        PORT: 3000,
        DB_CONNECTION_STRING: "mongodb://localhost:27017/payoda-demo-dev",
      },
      env_production: {
        PORT: 5000,
        DB_CONNECTION_STRING: "mongodb://localhost:27017/payoda-demo-prod",
      },
    },
  ],
};
