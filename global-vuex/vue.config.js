const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  devServer: {
    // Enable Websocket connection
    client: {
      webSocketURL: "ws://localhost:8080/ws",
    },
  },
  transpileDependencies: true,
});
