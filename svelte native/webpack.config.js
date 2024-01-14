const webpack = require("@nativescript/webpack");
module.exports = (env) => {
  webpack.init(env);
  module.exports = {
    resolve: {
      conditionNames: ["svelte", "node", "require"],
    },
  };
  return webpack.resolveConfig();
};
