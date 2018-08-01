import Alert from './components/alert'
import Message from './components/message'
const components = {
  Alert
}
const install = (Vue, opts = {}) => {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })
  Vue.prototype.$message = Message
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
