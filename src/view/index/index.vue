<template>
  <div v-title='"mo"' class="mo">
    <h1>{{address}}</h1>
    <p>{{text}}</p>

  </div>
</template>

<script>
export default {
  data () {
    return {
      address: '',
      text: ''
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.address = process.env.baseUrl
      this.text = process.env.rechargeList

      this.get()
    })
  },
  methods: {

    get () { // 开发环境跨域时调用本地代理 具体查看 config-->index.js
      this.$http.post(process.env.baseUrl + 'xxxxxx')
        .then(res => {
          console.log(res)
          this.data = res
        })
    }
  }
}
</script>
<style lang="less" scoped>
.mo{
  h1{font-size:.36rem;}
  p{font-size:.2rem;}
  span{font-size:.22rem;color:#232323}
}
</style>

