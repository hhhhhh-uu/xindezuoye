<template>
  <div>
    <MyHeader :title="'tab'"></MyHeader>
    <div class="my-tab-bar">
      <router-link to="/mylist"><span class="`iconfont ${icon-shangpinliebiao}`">商品搜索</span></router-link>
      <router-link to="/mysearch">商品搜索</router-link>
      <router-link to="/mylnfo">我的信息</router-link>
      </div>
    <!-- <MyTabBar :list="tabList" @change="changeFn"></MyTabBar> -->
      <div style="padding-top:45px">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue"
// import MyTabBar from "./components/MyTabBar.vue"
export default {
  name:'App',
  data() {
    return {
      comName:'MyGoodsList',
      tabList: [
    {
        iconText: "icon-shangpinliebiao",
        text: "商品列表",
        componentName: "MyGoodsList"
    },
    {
        iconText: "icon-sousuo",
        text: "商品搜索",
        componentName: "MyGoodsSearch"
    },
    {
        iconText: "icon-user",
        text: "我的信息",
        componentName: "MyUserInfo"
    }
]
    }
  },
  components:{
    MyHeader,
    // MyTabBar,
  },
  methods:{
    changeFn(val){
      this.comName = val
    }
  },
}
</script>
<style lang="less" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.current {
  color: #1d7bff;
}
</style>