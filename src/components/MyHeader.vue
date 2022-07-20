<template>
  <div><input type="text" placeholder="搜索-书本名称" v-model="bookname" @keyup.enter="clicks"/></div>
</template>

<script>
export default {
    data() {
      return {
        bookname:""
      }
    },
    methods: {
      clicks(){
        if (!this.bookname.trim()) {
        alert("请输入书名");
        this.bookname = "";
      }
      this.$emit("clicks", this.bookname);
    },
    },
};
</script>
