module.exports = {
  apps: [
    {
      name: "next-app", // Name of your app
      script: "node_modules/next/dist/bin/next",
      args: "start",
      instances: "max", // Runs on all CPU cores
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
