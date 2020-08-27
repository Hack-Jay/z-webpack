module.exports = {
  plugins: [
    new webpack.DllReferencePlugin({
      manifest: require("./build/library/library.json"),
    }),
  ],
  resolve: {
    alias: {
      react: path.resolve(
        __dirname,
        "./node_modules/react/umd/react.production.min.js"
      ),
      "react-dom": path.resolve(
        __dirname,
        "./node_modules/react-dom/umd/react-dom.production.min.js"
      ),
    },
    extensions: [".js"],
    mainFields: ["main"],
  },
};
