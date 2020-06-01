<template>
  <div class="pad-5">
    <div>
      <h3>{{post.title}}</h3>
    </div>
    <div class="green-border-top">
      <p>{{post.body}}</p>
    </div>

    <p v-if="commentDisplay" class="pt-10 green-border-top">
      <span class="comment-span">Comment:</span>
      {{commentDisplay}}
      <span class="font-weight-bold text-info">by {{user.name}}</span>
    </p>
    <span class="text-danger">{{message}}</span>
    <form @submit.prevent="addPostComment">
      <textarea v-model="comment" rows="2" class="form-control" placeholder="Comments" />
      <input type="submit" class="btn btn-success" :disabled="!comment" value="Submit" />
    </form>
    <Loading :loading="loading" />
  </div>
</template>

<script>
import { dataService } from "../service/dataService";
import Loading from "./loading";
export default {
  name: "Post",
  props: ["post"],
  components: {
    Loading
  },
  data() {
    return {
      comment: "",
      commentDisplay: "",
      message: "",
      loading: false,
      user: JSON.parse(localStorage.getItem(this.$route.params.id))
    };
  },

  methods: {
    addPostComment: function() {
      this.loading = true;
      dataService
        .addPostComment(this.post.id, this.comment)
        .then(response => {
          if (response) {
            this.commentDisplay = response.data.comment;
            this.comment = "";
            this.loading = false;
          }
        })
        .catch(err => {
          if (err) {
            this.loading = false;
            this.message = "Something Went Wrong";
          }
        });
    }
  }
};
</script>

<style scoped>
</style>
