import Notice from './notice'
import Vue from 'vue'
let NoticeConstructor = Vue.extend(Notice)
let noticeInstance
const notice = (option) => {
  if (typeof option === 'string') {
    option = {
      title: option
    }
  }
  noticeInstance = new NoticeConstructor({
    propsData: option
  })
  noticeInstance.$mount()
  document.body.appendChild(noticeInstance.$el)
  noticeInstance.visible = true
  return noticeInstance
}
export default notice
