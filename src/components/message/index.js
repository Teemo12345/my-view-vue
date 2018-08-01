import Msg from './msg'
import Vue from 'vue'
let MsgConstructor = Vue.extend(Msg)
let msgInstance
// let zIndex = 1000
const message = function (opt) {
  if (typeof opt === 'string') {
    opt = {
      message: opt
    }
  }
  msgInstance = new MsgConstructor({
    data: opt
  })
  msgInstance.vm = msgInstance.$mount()
  document.body.appendChild(msgInstance.vm.$el)
  msgInstance.vm.show = true
  // msgInstance.dom = msgInstance.vm.$el
  // msgInstance.vm.$el.style.zIndex = zIndex++
  // console.log(msgInstance.dom)
  return msgInstance.vm
}
export default message
