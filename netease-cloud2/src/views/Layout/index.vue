<template>
    <div>
        <van-nav-bar :title="$route.meta.title"/>
        <div style="padding-bottom: 48px">
            <router-view></router-view>
        </div>
        <div>
            <van-tabbar route>
            <van-tabbar-item replace icon="home-o" to="/layout/home">首页</van-tabbar-item>
            <van-tabbar-item replace icon="search" to="/layout/search">搜索</van-tabbar-item>
            </van-tabbar>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
/* 中间内容区域 - 容器样式(留好上下导航所占位置) */
.main {
  padding-top: 46px;
  padding-bottom: 50px;
}
</style>