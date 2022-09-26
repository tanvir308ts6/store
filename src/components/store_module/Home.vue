<template>
  <div class="container-fluid">
    <div class="row">
      <Nav/>
    </div>
    <div class="row">
      <div class="col-md-12">
        <!-- {{list}} -->
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <ItemReceive/>
      </div>
    </div>
 </div>
</template>

<script>
import Nav from './Nav.vue'
import ItemReceive from './itemReceive.vue'
export default {
   components: {
     Nav,
     ItemReceive
   },
   data(){
    return{
       list:[]
    }
   },
   created() {
      fetch("http://103.4.145.242:8006/api/auth/store-item?page=1")
        .then((response) => response.json())
        .then((json) => (this.list = json));
  },

   methods: {
     
   },

}
</script>

<style>

</style>