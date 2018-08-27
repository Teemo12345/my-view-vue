import Alert from './components/alert'
import Message from './components/message'
import Notice from './components/notice'
import Upload from './components/upload'
const components = {
  Alert,
  Upload
}
const install = (Vue, opts = {}) => {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })
  Vue.prototype.$message = Message
  Vue.prototype.$notice = Notice
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
const API = {
  version: process.env.VERSION,
  install,
  ...components
}
module.exports.default = module.exports = API
