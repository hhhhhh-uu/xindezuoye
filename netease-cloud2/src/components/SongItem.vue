<template>
<van-cell 
      :title="name"
      center
      :label="`${name}-${author}`"
      >
        <template #right-icon>
        <van-icon name="play-circle-o" size="0.6rem" />
      </template>
    </van-cell>
</template>

<script>
export default {
    props:{
        name: String,
        author: String,
        id:Number,
    }
}
</script>