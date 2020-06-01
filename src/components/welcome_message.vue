<template>
  <div>
    <h4>WELCOME, <span class="font-weight-bold text-info"> {{user.name}}</span></h4>
  </div>
</template>

<script>
export default {
  name: "WelcomeUser",
  components: {},
  data() {
    return {
      user: JSON.parse(localStorage.getItem(this.$route.params.id))
    };
  },
  created() {}
};
</script>

<style scoped>
</style>
