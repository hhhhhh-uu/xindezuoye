<template>
  <div>
    <van-search
      shape="round"
      placeholder="请输入搜索关键词"
      v-model="value"
      @input="inputFn"
    />
    <div class="search_wrap" v-if="list.length == 0">
      <p class="hot_title">热门搜索</p>
      <div class="hot_name_wrap">
        <span class="hot_item" v-for="(item, index) in hotList" :key="index"
        @click="clickFn(item.first)">
          {{item.first}}
        </span>
      </div>
    </div>
    <div class="search_wrap" v-else>
      <p class="hot_title">最佳匹配</p>
      <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
    <SongItem v-for="item in list" :key="item.id"
    :name="item.name"
    :author="item.ar[0].name"
    :id="item.id">
    </SongItem>
    </van-list>
    </div>
  </div>
</template>

<script>
import { searchHotListApi, cloudSearchListApi } from "@/api";
import SongItem from "@/components/SongItem";
export default {
  components: {
    SongItem,
  },
  data() {
    return {
      hotList: [],
      list: [],
      value:'',
      loading: false,
      finished: false,
      limit:20,
      page:1,
    };
  },
  mounted() {
    this.searchHotList();
  },
  methods: {
    async onLoad(){
      this.page++;
      const res = await this.cloudSearchList();
      if(!res.songs || res.songCount <= (this.page -1)*this.limit) {
        this.finished = true;
        this.loading = false;
        return;
      }
      this.list = [...this.list, ...(res.songs|| [])];
      this.loading = false;
    },
    async searchHotList() {
      try {
        const res = await searchHotListApi();
        // console.log(res);
        this.hotList = res.data.result.hots;
      } catch (e) {
        console.log(e);
      }
    },
    async cloudSearchList() {
      try {
        const res = await cloudSearchListApi({
          keywords: this.value,
          limit: this.limit,
          offset: (this.page - 1) * this.limit,
        });
        // console.log(res);
        return res.data.result;
      } catch (e) {
        console.log(e);
      }
    },
    // async inputFn() {
    //   try {
    //     this.list = await this.cloudSearchList();
    //   } catch (e) {
    //     console.log(e);
    //   }
    // },
    async inputFn (){
        clearTimeout(this.timer)

        this.timer = setTimeout(async () => {
        this.page = 1;
        this.finished = false;
        if(this.value.trim() == ""){
          return (this.list =[])
        }
        const res = await this.cloudSearchList();
        this.list = (res && res.songs) || [];
      },300)
      },
    async clickFn(val) {
      this.page = 1;
      this.finished = false;
      this.value = val;
      const res = await this.cloudSearchList();
      this.list = (res && res.songs) || [];
    }
  },
};
</script>

<style scoped>
/* 搜索容器的样式 */
.search_wrap {
  padding: 0.266667rem;
}

/*热门搜索文字标题样式 */
.hot_title {
  font-size: 0.32rem;
  color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
  margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}

/* 给单元格设置底部边框 */
.van-cell {
  border-bottom: 1px solid lightgray;
}
</style>
