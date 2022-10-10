<template>
<div class="container">
    <div class="row">
       <div class="col-md-10">
            <h1>Item List</h1>
       </div>
       <div class="col-md-2">
           <button type="button" class="btn btn-primary">Add</button>
       </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Item Name</th>
                        <th scope="col">Balance</th>
                        <th scope="col">Item Code</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="itemlLists,index in itemlList" :key="index">
                        <th scope="row">{{itemlLists.id}}</th>
                        <td>{{itemlLists.item_name}}</td>
                        <td>{{itemlLists.balance.balance_quantity}}</td>
                        <td>{{itemlLists.item_code}}</td>
                    </tr>
                </tbody>
            </table>
            </div>
            
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            itemlList:[]
        }
    },
    created() {
        fetch("http://103.4.145.242:8006/api/auth/store-item")
            .then((response) => response.json())
            .then((json) => {this.itemlList = json?.data?.data}).catch;
    },
    watch:{

    },
    methods: {

    }

}
</script>

<style>

</style>
