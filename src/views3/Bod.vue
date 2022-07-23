<template>
  <div>
    <ul>
      <h1>Bob</h1>
      <li><router-link to="/blog">blog</router-link></li>
      <li><router-link to="/fax">fax</router-link></li>
    </ul>
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
