<template>
  <div>
    <span class="text-danger">{{error}}</span>
    <form @submit.prevent="onLogin">
      <input type="text" class="form-control" v-model="input" placeholder="Email or ID" />
      <input type="submit" class="form-control btn btn-success" value="Login" />
    </form>
    <Loading :loading="loading" />
  </div>
</template>

<script>
import { userService } from "./../../service/auth";
import Loading from "../../components/loading";

export default {
  name: "Login",
  components: {
    Loading
  },

  data() {
    return {
      input: "",
      error: "",
      loading: false
    };
  },

  mounted() {
    localStorage.clear();
  },

  methods: {
    onLogin: function() {
      this.loading = true;
      userService
        .login(this.input)
        .then(response => {
          if (response && response.length) {
            const data = JSON.stringify(response[0]);
            localStorage.setItem(response[0].id, data);
            this.loading = false;
            this.$router.push(`/allposts/${response[0].id}`);
            return data;
          } else {
            this.loading = false;
            this.error = "Invalid User";
          }
        })
        .catch(err => {
          if (err) {
            this.loading = false;
            this.error = "Invalid User";
          }
        });
    }
  }
};
</script>

<style>

</style>
