<template>
  <div class="login-box">
    <div class="icon">
        <img src="~assets/img/profile/user.svg" alt="">
    </div>
    <div class="center-text">
        <p>登录/注册</p>
        <p class="bottom-text"><span class="icon-phone"></span> 暂无绑定手机号</p>
    </div>
    <div class="readmore">
        <img src="~assets/img/profile/showmore.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name:'ProfilLogin'
}
</script>

<style scoped>
  .login-box{
      height: 100px;
      display: flex;
      background: #1296db;
      align-items: center;
      padding: 0 10px;
  }

  .icon{
      margin-right: 10px;
  }

  .icon img{
      width: 80px;
      height: 80px;
      border-radius: 50%;
  }

  .center-text{
      flex: 1;
      color: #fff;
  }

  .readmore img{
      width: 20px;
      height: 40px;
  }

  .bottom-text{
      display: flex;
      align-items: center;
  }

  .icon-phone{
      display: block;
      width: 10px;
      height: 15px;
      background: url(~assets/img/profile/phone.svg) center/cover;
  }
</style>