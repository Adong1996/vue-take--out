let path = require('path');

const px2rem = require('postcss-px2rem')
// 配置postcs-px2rem
const postcss = px2rem({
  remUnit: 37.5   //设计稿等分之后的值，等分的比例同页面rem的比例是一致的
})

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
 // runtimeComiler: true//是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
  configureWebpack: {//当前配置需要写入该选项中
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$':'vue/dist/vue.esm.js',
        '@': resolve('src'), //设置文件查找路径，可简写文件查找路径
        'components': resolve('src/components'),
      }
    }
  },
  lintOnSave: false,
  css: { // 添加postcss配置
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
}

