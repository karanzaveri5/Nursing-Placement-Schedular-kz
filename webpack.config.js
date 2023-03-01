// module.exports = {
//     module: {
//       rules: [
//         {
//           test: /\.html$/i,
//           loader: "html-loader",
//         },
//       ],
//     },
//   };

{
  test: /\.(html)$/,
  use: {
    loader: "html-loader",
    options: {
      attrs: [':data-src']
    }
  }
}

