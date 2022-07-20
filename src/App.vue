<template>
  <div>
    <MyHeader @clicks=" header"></MyHeader>
    <MyMain :list="list" @del="shuns"></MyMain>
    <MyFooter @shuns="shuns"></MyFooter>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue"
import MyMain from "./components/MyMain.vue"
import MyFooter from "./components/MyFooter.vue"
export default {
  name: 'App',
  data() {
    return {
      list: [],
    }
  },
  created() {
    this.shuns()
  },
  methods: {
    header(val){
      this.list = this.list.filter((ele) => {
        return ele.bookname == val;
      });
    },
    shuns(){
      this.$axios({
      url:"/api/getbooks"
    }).then(res => {
      console.log(res);
      this.list = res.data.data
    })
    }
     
  },
  components: {
    MyHeader,
    MyMain,
    MyFooter,
  }
}
</script>

<style>

</style>
