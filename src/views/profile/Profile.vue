<template>
  <div class="profile">
    <!-- 顶部栏 -->
    <NavBar class="nav-bar"><div slot="center">我的档案</div></NavBar>
    <!-- 登录/注册 -->
    <ProfilLogin />
    <!-- 余额、优惠、积分 -->
    <ProfileInfo />
    <!-- 消息、商城、会员卡 -->
    <ProfileCard1 />
    <!-- 购物车、下载APP -->
    <ProfileCard2 />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import ProfilLogin from './childComps/ProfileLogin.vue'
import ProfileInfo from './childComps/ProfileInfo.vue'
import ProfileCard1 from './childComps/ProfileCard1.vue'
import ProfileCard2 from './childComps/ProfileCard2.vue'
export default {
  name:'Profile',
  components:{NavBar,ProfilLogin,ProfileInfo,ProfileCard1,ProfileCard2}
}
</script>

<style scoped>
  .profile{
    position: absolute;
    top: 0;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .nav-bar{
    background: #1296db;
    color: #fff;
  }
</style>