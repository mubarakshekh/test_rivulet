<template>
  <div> 
    <div class = 'align-right'>
    <button @click="logout" class = 'btn btn-danger'>Logout</button>
    </div> 
    <WelcomeUser/>
    <CreatePost @addUserPosts="addUserPosts" />
    <Posts :getUserPosts="getUserPosts" />
    <Loading :loading="loading" />
    <p class = 'text-danger'>{{error}}</p>
  </div>
</template>

<script>
import WelcomeUser from '../../components/welcome_message'
import CreatePost from "../../components/create_post";
import Posts from "../../components/posts";
import { dataService } from "../../service/dataService";
import Loading from "../../components/loading";
export default {
  name: "AllPosts",
  components: {
    WelcomeUser,
    CreatePost,
    Posts,
    Loading
  },


  data() {
    return {
      getUserPosts: [],
      error: '',
      loading: false
    };
  },

  mounted() {
     this.loading = true;
    dataService
      .getUserPosts(this.$route.params.id)
      .then(response => {
        if (response && response.status == "200") {
          this.loading = false;
          this.getUserPosts = response.data;
        } else {
          this.loading = false;
          this.$router.push("/");
        }
      })
      .catch(err => {
        if (err) {
           this.loading = false;
          this.error = err
        }
      });
  },

  methods: {
    addUserPosts(getUserPosts) {
      const getUserPosts1 = JSON.parse(getUserPosts);
      this.getUserPosts = [getUserPosts1, ...this.getUserPosts];
      return getUserPosts;
    },

    
    logout(){
      this.$router.push('/');
    }
  
  }
};
</script>

<style scoped>
</style>