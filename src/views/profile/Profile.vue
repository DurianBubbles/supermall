<template>
  <div class="profile">
    <NavBar class="nav-bar"><div slot="center">我的档案</div></NavBar>
    <ProfilLogin />
    <ProfileInfo />
    <ProfileCard1 />
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