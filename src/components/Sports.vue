<template>
  <div>
    <h2>体育-改变人生</h2>
    <router-link to="/sports1"> 体育的主页</router-link>
    <router-link to="/sports2"> 国内体育</router-link>
    <router-link to="/sports3"> 国外体育</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "AA",
};
</script>

<style></style>
