<template>
    <div>
        <div><input type="text" placeholder="书名" style="margin-top:5px" v-model="bookObj.bookname"></div>
        <div><input type="text" placeholder="作者" style="margin-top:5px"  v-model="bookObj.author"></div>
        <div><input type="text" placeholder="出版社" style="margin-top:5px"  v-model="bookObj.publisher"></div>
        <button id="btnAdd" class="btn btn-primary" style="margin-top:10px" @click="addBook">新增</button>
    </div>
</template>

<script>
import ewqew from "./ewqew/index"
export default {
    name:'MyFooter',
    data() {
        return {
            bookObj:{
                bookname:"",
                author:"",
                publisher:""
            }
        }
    },
      methods: {
    addBook(){
       
       this.$axios({
           url: "/api/addbook",
           method: "POST",
           data: {
               appkey: "7250d3eb-18e1-41bc-8bb2-11483665535a",
               ...this.bookObj
            // 等同于下面
            // bookname: this.bookObj.bookname,
            // author: this.bookObj.author,
            // publisher: this.bookObj.publisher
           },
           }).then((res) => {
          alert(res.data.msg);
          });
       }
    
  },
  mounted() {
    ewqew.$on("displayData", (val) => {
      this.bookObj.bookname = val[0].bookname;
      this.bookObj.author = val[0].author;
      this.bookObj.publisher = val[0].publisher;
    });
  }
}
</script>