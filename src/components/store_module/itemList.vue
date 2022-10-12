<template>
<div class="container">
    <div class="row">
        <div class="col-md-10">
            <h1>Item List</h1>
        </div>

        <!-- Add Item Model -->
        <div class="col-md-2">
            <!-- <button type="button" class="btn btn-primary">
               <router-link class="list-group-item list-group-item-action" to="/AddItem">Add Item</router-link>
           </button> -->

            <!-- Button trigger modal -->
            <button type="button" class="btn" id="add_item_button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add Item
            </button>

            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header" id="exampleModalLabel">
                            <h5 class="modal-title">Add Item Form</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <!-- Item modal body  -->
                        <div class="modal-body">
                            <div class="card" id="item_add_card">
                                <form class="row g-3">
                                    <div class="col-md-4">
                                        <label for="inputEmail4" id="input_box_level" class="form-label">Item Code</label>
                                        <input type="number" class="form-control" v-model="item_code">
                                    </div>
                                    <div class="col-md-4">
                                        <label for="inputPassword4" id="input_box_level" class="form-label">Item Name</label>
                                        <input type="text" class="form-control"  v-model="item_name">
                                    </div>
                                    <div class="col-md-4">
                                        <label for="inputState" id="input_box_level" class="form-label">Unit in</label>
                                        <select v-model="unit_id" id="inputState" class="form-select">
                                            <option v-for="lists, index in unitList" :key="index" :value="lists?.id">{{lists?.unit_name}}</option>
                                        </select>
                                    </div>
                                    <!-- .......................... -->
                                    <!-- <select  class="form-select" aria-label="Default select example">
                                        <option disabled>Select Item Unit Type</option>
                                        
                                    </select> -->
                                    <!-- .......................... -->
                                    <div class="col-md-4">
                                        <label for="inputAddress2" id="input_box_level" class="form-label">Item Status</label>
                                        <input type="number" class="form-control"  v-model="item_status">
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                            </button> -->
                            <button @click="fainalSubmit(item_code,item_name,unit_id,item_status)" type="submit" class="btn btn-primary" data-bs-dismiss="modal">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- item list -->
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
                            <th scope="col" id="action_col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(itemlLists, index) in itemlList" :key="index">
                            <th scope="row">{{ itemlLists.id }}</th>
                            <td>{{ itemlLists.item_name }}</td>
                            <td>{{ itemlLists?.balance?.balance_quantity ?? "Not Found" }}</td>
                            <td>{{ itemlLists.item_code }}</td>
                            <td id="action_col">
                                <button class="btn btn-primary me-md-2" type="button" @click="removeRow(index)"><i class="bi bi-pencil"></i></button>
                                <button class="btn btn-danger me-md-2" type="button" @click="removeRow(index)"><i class="bi bi-trash3"></i></button>  
                            </td>
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
            itemlList: [],
            unitList: []
        };
    },
    created() {
        this.getItemData()
        this.getUnitList()
    },

    watch: {},
    methods: {

        getItemData(){
             fetch(`http://103.4.145.242:8006/api/auth/store-item`)
            .then((response) => response.json())
            .then((json) => {
                this.itemlList = json ?.data ?.data}).catch
        },
        fainalSubmit(item_code,item_name,unit_id,item_status) {
            fetch(`http://103.4.145.242:8006/api/auth/store-item`, {
                    method: 'POST',
                    body: JSON.stringify({
                        item_code: item_code,
                        item_name: item_name,
                        unit_id: unit_id,
                        item_status:item_status
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                .then((response) => response.json())
                .then((json) => this.getItemData());
        },
        getUnitList(){
             fetch(`http://103.4.145.242:8006/api/auth/unit`)
            .then((response)=>response.json())
            .then((json)=> {this.unitList=json?.data}).catch;
        }
    },
};
</script>

<style>
#add_item_button{
    margin-top: 10px;
    background-color: rgb(53, 140, 211);
    color: rgb(255, 255, 255);
}
#item_add_card {
    border: none;
    padding: 30px 20px 20px 20px;
}

#exampleModalLabel {
    background-color: rgb(53, 140, 211);
    color: rgb(255, 255, 255);
}
#action_col{
    text-align: center;
}
#input_box_level {
    font-size: 14px;
    font-family: 'Lato', sans-serif;
    padding: 5px;
    margin-bottom: -22px;
    margin-left: 8px;
    background-color: rgb(255, 255, 255);
    overflow: auto;
    color: rgb(99, 99, 99);
}
</style>
