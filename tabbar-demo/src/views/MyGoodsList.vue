<template>
  <div>
    <MyTable :list="list">
      <template v-slot:header>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template v-slot:content="scope">
        <td>{{ scope.row.id }}</td>
        <td>{{ scope.row.goods_name }}</td>
        <td>{{ scope.row.goods_price }}</td>
        <!-- <td>{{ scope.row.tags }}</td> -->
        <td>
            <input
          type="text"
          v-focus
          class="tag-input form-control"
          style="width: 100px"
          v-if="scope.row.inputVisible"
          @blur="scope.row.inputVisible = false"
          @keyup.enter="enterFn(scope.row)"
          @keyup.esc="scope.row.inputVisible = false"
          v-model="scope.row.inputValue"
        />
        <button 
        class="btn btn-primary btn-sm add-tag" 
        v-else
        @click="scope.row.inputVisible = true">
        +Tag</button>
          <span
            class="badge badge-warning"
            style="margin-left: 8px"
            v-for="(item, index) in scope.row.tags"
            :key="index"
            >{{ item }}</span
          >
        </td>
        <td>
          <button
            type="button"
            class="btn btn-danger"
            @click="del(scope.row.id)"
          >
            删除
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>
<script>
import MyTable from "../components/MyTable.vue";
export default {
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.$axios({
      url: "/api/goods",
    })
      .then((res) => {
        this.list = res.data.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  components: {
    MyTable,
  },
  methods: {
    del(id) {
      const index = this.list.findIndex((ele) => ele.id == id);
      this.list.splice(index, 1);
    },
    enterFn(val){
        if(val.inputValue.trim() == ""){
            val.inputValue = "";
            return alert("不能为空");
        }
        val.tags.push(val.inputValue);
        val.inputValue = "";
    }
  },
};
</script>
