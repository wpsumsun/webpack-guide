const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const glob = require("glob");

const setMultiplePage = () => {
  const entry = {};
  const htmlWebpackPlugins = [];
  const entryFiles = glob.sync(path.join(__dirname, "./src/*/index.js"));
  entryFiles.map(entryFile => {
    const match = entryFile.match(/src\/(.*)\/index\.js/);
    const pageName = match && match[1];
    entry[pageName] = entryFile;
    htmlWebpackPlugins.push(
      new HtmlWebpackPlugin({
        template: path.join(__dirname, `src/${pageName}/index.html`),
        filename: `${pageName}.html`,
        chunks: [pageName], // Allows you to add only some chunks
        inject: true, // true || 'head' || 'body' || false Inject all assets into the given template or templateContent. When passing true or 'body' all javascript resources will be placed at the bottom of the body element. 'head' will place the scripts in the head element
        minify: {
          html5: true, // Parse input according to HTML5 specifications
          collapseWhitespace: true, // Collapse white space that contributes to text nodes in a document tree
          preserveLineBreaks: false, // Always collapse to 1 line break (never remove it entirely) when whitespace between tags include a line break. Must be used in conjunction with collapseWhitespace=true
          minifyCSS: true,
          minifyJS: true,
          removeComments: false
        }
      })
    );
  });
  return { entry, htmlWebpackPlugins };
};

const { entry, htmlWebpackPlugins } = setMultiplePage();

module.exports = {
  mode: "development",
  entry,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      },
      {
        test: /\.(png|jpg|jpeg|git)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10240
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: "file-loader"
      }
    ]
  },
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 1000
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin()
  ].concat(htmlWebpackPlugins),
  devtool: "source-map"
};