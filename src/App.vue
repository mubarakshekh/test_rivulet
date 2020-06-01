<template>
  <div class="container" id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin-top: 10px;
}








.pad-5 {
  padding: 5px;
}

.green-border-top {
  border-top: 1px solid #4caf50;
}

.pt-10 {
  padding: 10px;
}

.align-right {
  text-align: right;
}

.comment-span {
  color: #4caf50;
  font-weight: bold;
}
</style>
