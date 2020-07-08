// 生产环境设在子路径，开发环境设在根路径
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/'
}
