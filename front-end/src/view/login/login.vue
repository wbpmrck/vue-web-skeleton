<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>

  import userService from  "@/service/user-service";

export default {
  name: 'login',
  data () {
    return {
      msg: '这是一个登录页面'
    }
  },
  created(){
    userService.login({accountName:"accountName"}).then(function (resp) {
      if(resp && resp.success){

      }else{

      }
    }).catch(function(err){
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
