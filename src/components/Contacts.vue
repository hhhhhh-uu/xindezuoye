<template>
  <div>
    <ul>
      <li btn:><router-link to="/contacts2">All contacts</router-link></li>
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
      
    }
  },
};
</script>

<style></style>
