<template>
  <div id="login">

    <input type="text" class="form-input" id="phone" placeholder="请输入手机号或邮箱"/>
    <input type="text" class="form-input" id="password" placeholder="请输入密码"/>

    <div id="operation">
      <div id="regist">注册</div>
      <div id="forget-password">忘记密码</div>
    </div>

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
<!--<style scoped>-->
<style>
  #login{
    margin-top: 24px;

  #phone,#password{
    width: 200px;
    margin: 0 20px;

    color:#6B6B6B;
    background-color:#000;

    font-size: 20px;
    height:52px;
    line-height: 20px;
    font-weight: 500;

    border: none;
    border-bottom: solid 1px #6B6B6B;
  }

  #operation {
    height: 16px;
    margin-top: 17px;
    padding: 0 20px;
    font-size: 16px;
  }

  #regist {
    display: inline-block;
    float: left;
  }
  #forget-password {
    display: inline-block;
    float: right;
  }
  }

</style>
