<template lang="pug">
  .upload-wrap(@click="handClick()")
    input.upload-file(
      type="file"
      ref="file"
      @change="changeUpload"
      :accept="accept"
      :multiple="multiple")
    slot
</template>
<script>
export default {
  name: 'upload',
  props: {
    accept: String,
    multiple: {
      type: Boolean,
      default: false
    },
    quality: Number
  },
  data () {
    return {
      preview: ''
    }
  },
  methods: {
    handClick () {
      this.$refs.file.click()
    },
    changeUpload (e) {
      let file = e.target.files[0]
      let reader = new FileReader()
      let self = this
      reader.onload = (event) => {
        self.$emit('get-preview', event.target.result)
        self.$emit('get-raw-file', this.$refs.file.files[0])
        if (this.quality) {
          self.qualityImg(event.target.result, 0.5, function (blob) {
            self.$emit('quality-blob', blob)
          })
        }
      }
      reader.readAsDataURL(file)
    },
    qualityImg (base64, quality, cb) {
      let img = new Image()
      img.src = base64
      img.onload = () => {
        let canvas = document.createElement('canvas')
        let ctx2d = canvas.getContext('2d')
        canvas.setAttribute('width', img.width)
        canvas.setAttribute('height', img.height)
        ctx2d.drawImage(img, 0, 0, img.width, img.height)
        let imgBase64 = canvas.toDataURL('image/jpeg', quality || 1)
        let blob = this.convertBase64UrlToBlob(imgBase64)
        cb(blob)
      }
    },
    convertBase64UrlToBlob (urlData) {
      let arr = urlData.split(',')
      let mime = arr[0].match(/:(.*?);/)[1]
      let bstr = atob(arr[1])
      let n = bstr.length
      let u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      return new Blob([u8arr], {type: mime})
    }
  },
  mounted () {
    // console.log(this.quality)
  }
}
</script>
