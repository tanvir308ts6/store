<template>
<div class="container-fluid">
   <h1>Home</h1>
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
    data() {
        return {
            list: [{}]
        }
    },
    created() {
        // fetch("http://103.4.145.242:8006/api/auth/unit")
        //   .then((response) => response.json())
        //   .then((json) => {this.list= json?.data});
    },

    methods: {

    },

}
</script>

<style>

</style>
