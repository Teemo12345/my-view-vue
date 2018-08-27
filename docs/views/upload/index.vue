<template lang="pug">
  .demo-upload
    upload(
      accept="image/*"
      multiple
      @get-preview="showImg"
      @get-raw-file="getFile"
      :quality="1"
      @quality-blob="getBlob"
    )
      .btn.btn-primary upload
    .demo-upload-preview(v-if="img")
      img(:src="img")
</template>
<script>
export default {
  name: 'demo-upload',
  data () {
    return {
      img: '',
      file: {}
    }
  },
  methods: {
    showImg (img) {
      // 预览原图像，此处不上传不压缩，原始图像
      this.img = img
    },
    getFile (file) {
      // 获取源图像所有信息
      console.log(file)
      this.file = file
    },
    getBlob (blob) {
      // 开启压缩后获取的二进制文件
      console.log(blob)
      let form = new FormData()
      form.append('img', blob, this.file.name)
      console.log(form.get('img'))
      // ajax upload
    }
  }
}
</script>
<style lang="postcss">
.demo-upload-preview{
  width:300px;
  height:300px;
  & img{width:100%}
}
</style>
