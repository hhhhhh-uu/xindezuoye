<template>
    <table class="table table-bordered table-hover">
        <thead>
            <tr>
                <th>序号</th>
                <th>书名</th>
                <th>作者</th>
                <th>出版社</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody id="tb" v-for="item in list" :key="item.id">
            <tr>
                <td>{{item.id}}</td>
                <td>{{item.bookname}}</td>
                <td>{{item.author}}</td>
                <td>{{item.publisher}}</td>
                <td><a href="javascript:;" @click="del(item.id)">删除</a>
                <a href="javascript:;" @click="display(item.id)">详情</a>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import ewqew from "./ewqew/index"
export default {
    name:'MYMain',
    props:{
        list: {
        type: Array,
      default: () => {
        return []
      },
    },
    },
    data() {
    return {
      displayVal: [],
    };
  },
  methods: {
    del(val) {
      this.$axios({
        url: "/api/delbook",
        params: {
          id: val,
        },
      }).then((res) => {
        alert(res.data.msg);
        this.$emit("del");
      });
    },
    display(val) {
      this.displayVal = this.list.filter((ele) => ele.id == val);
      ewqew.$emit("displayData", this.displayVal);
      
    },
  },
}
</script>