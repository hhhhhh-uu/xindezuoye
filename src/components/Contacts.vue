<template>
  <div>
    <ul>
      <li><router-link to="/contacts2">All contacts</router-link></li>
      <li><router-link to="/alice">Alice</router-link></li>
      <li><router-link to="/bod">Bod</router-link></li>
    </ul>
    <div>
      <router-view></router-view>
    </div>
    <button @click="btn">随机显示</button>
  </div>
</template>

<script>
export default {
  name: "AA",
  data() {
    return {
      arr:["/contacts2","/alice","/bod"]
    }
  },
  methods:{
    btn(){
       this.$router.push({
        path:this.arr[Math.floor(Math.random()*3)]
       })
    }
  }
};
</script>

<style></style>
