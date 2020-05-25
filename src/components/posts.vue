<template>
  <div>
    <h2>All Posts</h2>
    <div v-for="(post,index) in getUserPosts" :key="post.index">
      <div>
        <post :post="post" />
        <span style="display:none">{{index}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./post";

export default {
  name: "Posts",
  components: {
    Post
  },

  props: ["getUserPosts"],

};
</script>

<style scoped>
</style>
