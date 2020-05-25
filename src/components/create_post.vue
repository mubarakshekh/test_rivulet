<template>
  <div>
    <h2>Create Post</h2>
    <form @submit.prevent="addUserPost">
      <div class="pad-5">
        <input type="text" v-model="title"  class="form-control" placeholder="Title" />
      </div>
      <div class="pad-5">
        <textarea v-model="body" rows="2" class="form-control"  placeholder="Body" />
      </div>
      <input :disabled ="!title && !body"  type="submit" class="submit-button"  value="Submit" />
    </form>
    <span class = 'custom-error'>{{error}}</span>
    <Loading :loading="loading" />
  </div>
</template>

<script>
import { dataService } from "../service/dataService";
import Loading from "./loading";

export default {
  name: "CreatePost",

  data() {
    return {
      title: "",
      body: "",
      error: "",
      loading: false
    };
  },
    components: {
    Loading
  },

  methods: {
    addUserPost: function() {
        this.loading = true;
      dataService
        .addUserPosts(this.$route.params.id, this.title, this.body)
        .then(response => {
          if (response) {
            const data = JSON.stringify(response.data);
            this.$emit("addUserPosts", data);
              this.loading = false;
              this.title='';
              this.body='';
          }
        })
        .catch(err => {
          if (err) {
              this.loading = false;
            this.error = "Something Went Wrong";
          }
        });
    }
  }
};
</script>

<style scoped>
</style>
