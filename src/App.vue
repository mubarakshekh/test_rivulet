<template>
  <div id="app">
 

    <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

}
.submit-button{
  background-color: #4caf50;
  color: #fff
}

.form-control{
  width:100%;
}

.logout-button{
    background-color: #f44336;
  color: #fff

}

.custom-error{
  color: #f44336
}

.pad-5{
  padding:5px
}

.green-border-top{
border-top:1px solid #4caf50;
}

.pt-10{
  padding:10px;
}

.align-right{
  text-align: right;
}

.comment-span{
  color:#4caf50;
  font-weight:bold;
}

</style>
