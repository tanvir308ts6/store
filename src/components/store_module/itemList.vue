<template>
<div class="container">
    <div class="row" id="item_form_row">
        <!-- Add Item Model -->
        <div class="col-md-12">
            <div class="modal fade" id="exampleModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header" id="exampleModalLabel">
                            <h5 class="modal-title">Add Item Form</h5>
                            <button type="button" class="btn btn-light btn-close" data-bs-dismiss="modal" aria-label="Close" @click="clearerr()"></button>
                        </div>
                        <!-- Add Item modal body  -->
                        <div class="modal-body">
                            <div class="card" id="item_add_card">
                                <form class="row g-3">
                                    <div class="col-md-4">
                                        <label for="inputEmail4" id="input_box_level" class="form-label">Item Code</label>
                                        <input type="number" class="form-control" v-model="item.item_code">
                                        <span v-if="item.item_code" class="input-group-text">
                                            <p id="valide"> </p>
                                        </span>
                                        <span v-else-if="errorStatuse == 'error'" class="input-group-text">
                                            <p>Item Code field is required.</p>
                                        </span>
                                        <span v-else class="input-group-text"></span>
                                    </div>
                                    <div class="col-md-4">
                                        <label for="inputPassword4" id="input_box_level" class="form-label">Item Name</label>
                                        <input type="text" class="form-control" v-model="item.item_name">
                                       <span v-if="item.item_name" class="input-group-text">
                                            <p id="valide"> </p>
                                        </span>
                                        <span v-else-if="errorStatuse == 'error'" class="input-group-text">
                                            <p>Item Name field is required.</p>
                                        </span>
                                    </div>
                                    <div class="col-md-4">
                                        <label for="inputState" id="input_box_level" class="form-label">Unit in</label>
                                        <select v-model="item.unit_id" id="inputState" class="form-select">
                                            <option v-for="lists, index in unitList" :key="index" :value="lists?.id">{{lists?.unit_name}}</option>
                                        </select>
                                         <span v-if="item.unit_id" class="input-group-text">
                                            <p id="valide"> </p>
                                        </span>
                                        <span v-else-if="errorStatuse == 'error'" class="input-group-text">
                                            <p>Unit in field is required.</p>
                                        </span>
                                    </div>
                                    <!-- .......................... -->
                                    <div class="col-md-4">
                                        <label for="inputState" id="input_box_level" class="form-label">Item Status</label>
                                        <select v-model="item.item_status" class="form-select" aria-label="Default select example">
                                            <option disabled>Select Item Unit Type</option>
                                            <option value="1">Active</option>
                                            <option value="0">Inactive</option>

                                        </select>
                                         <span v-if="item.item_status" class="input-group-text">
                                            <p id="valide"> </p>
                                        </span>
                                        <span v-else-if="errorStatuse == 'error'" class="input-group-text">
                                            <p>Item Status field is required.</p>
                                        </span>
                                    </div>

                                </form>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button @click="fainalSubmit(item.item_code,item.item_name,item.unit_id,item.item_status)" type="submit" class="btn btn-primary">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- edit Modal or item edit -->
            <!-- editModal -->
            <div class="modal fade" id="exampleeditModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="exampleeditModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header" id="edit_modal_head">
                            <h5 class="modal-title">Edit Item here</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="card" id="item_add_card">
                                <form class="row g-3">
                                    <div class="col-md-4">
                                        <label for="inputEmail4" id="input_box_level" class="form-label">Item Code</label>
                                        <input type="number" class="form-control" v-model="itemlListsr.item_code">
                                    </div>
                                    <div class="col-md-4">
                                        <label for="inputPassword4" id="input_box_level" class="form-label">Item Name</label>
                                        <input type="text" class="form-control" v-model="itemlListsr.item_name">
                                    </div>
                                    <div class="col-md-4">
                                        <label for="inputState" id="input_box_level" class="form-label">Unit in</label>
                                        <select v-model="itemlListsr.unit_id" id="inputState" class="form-select">
                                            <option v-for="lists, index in unitList" :key="index" :value="lists?.id">{{lists?.unit_name}}</option>
                                        </select>
                                    </div>
                                    <div class="col-md-4">
                                        <label for="inputState" id="input_box_level" class="form-label">Item Status</label>
                                        <select v-model="itemlListsr.item_status" class="form-select" aria-label="Default select example">
                                            <option disabled>Select Item Unit Type</option>
                                            <option value="1">Active</option>
                                            <option value="0">Inactive</option>

                                        </select>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <!-- <button type="button" class="btn btn-secondary" >Close</button> -->
                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" @click="updateItem(itemlListsr.id,itemlListsr.item_code, itemlListsr.item_name, itemlListsr.unit_id, itemlListsr.item_status)">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- item list -->
    <div class="row">
        <div class="col-md-12">
            <div class="card" id="item_list_tBody">
                <div class="row">
                    <div class="col-md-10">
                        <h1 id="item_form_header">Item List</h1>
                    </div>
                    <div class="col-md-2">
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button type="button" class="btn" id="add_item_button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Add Item
                            </button>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col" id="action_col_head">SL</th>
                                    <th scope="col" id="action_col_head">Item Code</th>
                                    <th scope="col">Item Name</th>
                                    <th scope="col">Unit In</th>
                                    <th scope="col">Balance</th>
                                    <!-- <th scope="col">Item Status</th> -->
                                    <th scope="col" id="action_col_head">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(itemlLists, index) in itemlList" :key="index">
                                    <th id="action_col" scope="row">{{ index+1 }}</th>
                                    <td id="action_col">{{ itemlLists.item_code }}</td>
                                    <td id="action_col">{{ itemlLists.item_name }}</td>
                                    <td id="action_col">{{ itemlLists?.unit?.unit_name }}</td>
                                    <td id="action_col">{{ itemlLists?.balance?.balance_quantity ?? "0" }}</td>
                                    <!-- <td id="action_col">{{ itemlLists?.item_status}}</td> -->
                                    <td id="action_col_btn">
                                        <button class="btn btn-primary me-md-2" data-bs-toggle="modal" data-bs-target="#exampleeditModal" type="submit" @click="editItem(itemlLists.id)"><i class="bi bi-pencil"></i></button>

                                        <button type="button" class="btn btn-danger me-md-2" data-bs-toggle="modal" data-bs-target="#exampleModalDel">
                                            <i class="bi bi-trash3"></i>
                                        </button>
                                    </td>
                                    <!-- Modal -->
                                    <div class="modal fade" id="exampleModalDel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered">
                                            <div class="modal-content">
                                                <div class="modal-header" id="edit_modal_head_delete">
                                                    <h5 class="modal-title">Delete Item</h5>
                                                    <button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x-lg" id="close_icon"></i></button>
                                                </div>
                                                <div class="modal-body" id="worning_modal_bod">
                                                    <i class="bi bi-exclamation-circle-fill" id="worning"></i>
                                                    <p id="deleteHeder">Do you want to delete this Item?</p>
                                                </div>
                                                <div class="modal-footer">
                                                    <button class="btn btn-danger me-md-2" type="button" data-bs-dismiss="modal" @click="removeitem(itemlLists.id)">Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
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
            unitList: [],
            itemlListsr: [],
            valmessege: {},
            errorStatuse: {},
            item: {}
        };
    },
    created() {
        this.getItemData()
        this.getUnitList()
    },

    watch: {
        item:{
            handler(c,v){
              
            },
            deep: true
        }
    },
    methods: {

        //Get Unit List Data
        getUnitList() {
            fetch(`http://103.4.145.242:8006/api/auth/unit`)
                .then((response) => response.json())
                .then((json) => {
                    this.unitList = json ?.data
                }).catch;
        },

        //Get Item Data 

        getItemData() {
            fetch(`http://103.4.145.242:8006/api/auth/store-item`)
                .then((response) => response.json())
                .then((json) => {
                    this.itemlList = json ?.data ?.data
                }).catch
        },

        // Save Item data

        fainalSubmit(item_code, item_name, unit_id, item_status) {
            console.log(item_code, item_name, unit_id, item_status)
            fetch(`http://103.4.145.242:8006/api/auth/store-item`, {
                    method: 'POST',
                    body: JSON.stringify({
                        item_code: item_code,
                        item_name: item_name,
                        unit_id: unit_id,
                        item_status: item_status
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                .then((response) => response.json())
                .then((json) => {
                    this.getItemData();
                    this.valmessege = json ?.message;
                    this.errorStatuse = json ?.status;
                    console.log(json)
                   
                });
        },
        //clear val
        clearerr(){
             this.item = {};
             this.errorStatuse={}
        },
        // Update Item data
        editItem(a) {
            fetch(`http://103.4.145.242:8006/api/auth/store-item/${a}`)
                .then((response) => response.json())
                .then((json) => {
                    this.itemlListsr = json ?.data
                }).catch
        },

        updateItem(item_id, item_code, item_name, unit_id, item_status) {
            fetch(`http://103.4.145.242:8006/api/auth/store-item/${item_id}`, {
                    method: 'PUT',
                    body: JSON.stringify({
                        item_code: item_code,
                        item_name: item_name,
                        unit_id: unit_id,
                        item_status: item_status
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                .then((response) => response.json())
                .then((json) => this.getItemData());
        },

        // Delete Item Data
        removeitem(itemId) {
            fetch(`http://103.4.145.242:8006/api/auth/store-item/${itemId}`, {
                    method: 'DELETE',
                })
                .then((json) => this.getItemData())
        }
    },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap');

/* list item style here */

#item_form_row {
    margin-top: 30px;
}

#item_form_header {
    font-size: 28px;
    font-family: 'Lato', sans-serif;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
}

#item_list_tBody {
    border-radius: 0%;
    border: none;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

table {
    border-collapse: collapse;
    width: 100%;
}

.table thead th {
    background-color: #0097a7;
    color: #fff;
    font-size: 18px;
    border: 1px solid #000;
    padding: 10px;
    text-align: center;
}

.table>thead tr {
    padding: 0.5rem 0.5rem;
    background-color: #060a0a;
    border-bottom-width: 1px;
    box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
}

#add_item_button {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
    background-color: #3F51B5;
    color: rgb(255, 255, 255);
    border-radius: 0%;
}

tbody tr {
    background: #B2EBF2;
}

tbody tr:nth-child(odd) {
    background: #E0F7FA;
}

/* Add item Modal styyle here */

#item_add_card {
    border: none;
    padding: 30px 20px 20px 20px;
}

.input-group-text {
    border: none !important;
    background-color: transparent !important;
}

.input-group-text p {
    color: #e40a39 !important;
    background-color: rgb(255, 255, 255) !important;
}

#exampleModalLabel {
    background-color: rgb(53, 140, 211);
    color: rgb(255, 255, 255);
}

#action_col {
    text-align: center;
    border: 1px solid #000;
    padding: 0;
    padding-top: 10px;
}

#action_col_btn {
    text-align: center;
    border: 1px solid #000;
    padding: 5px;
}

#action_col_btn button {
    border: none;
    border-radius: 100%;
    height: 40px;
}

#action_col_btn button i {
    font-size: 16px;
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

/* edit item modal style here */
#edit_modal_head {
    background-color: rgb(53, 140, 211);
    color: rgb(255, 255, 255);
}

#worning_modal_bod {
    display: flex;
}

#worning {
    margin-right: 10px;
    font-size: 40px;
    color: rgb(196, 37, 37);
}

#deleteHeder {
    margin-top: 20px;
    font-size: 18px;
}

#edit_modal_head_delete {
    background-color: rgb(196, 37, 37);
    color: rgb(255, 255, 255);
}
#close_icon{
    color: rgb(255, 255, 255);
    font-size: 26px;
}
</style>
