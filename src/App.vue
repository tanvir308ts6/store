<template>
  <div class="container-fluid">
    <div class="row">
        <Nav />
    </div>
    <div class="row">
       <!-- Side Nav Bar  -->
        <div class="col-md-2">
          <SideBar/>
        </div>
        <!-- content area  -->
        <div class="col-md-10">
            <div class="row">
                <div class="col-md-12">
                   <router-view> </router-view>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Nav from './components/store_module/Nav.vue';
import SideBar from './components/store_module/SideBar.vue';

export default {
  name: 'App',
  components: {
    Nav,
    SideBar
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
