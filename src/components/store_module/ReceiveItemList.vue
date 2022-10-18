<template>
<div class="row">
    <div class="col-md-12">
        <div class="card" id="item_receve_list_card">
            <!-- Add receive item form -->
            <div class="row">
                <div class="col-md-10">
                    <h1 id="item_form_header">Receive Item List</h1>
                </div>
                <!-- receive item Add modal -->
                <div class="col-md-2 d-md-flex justify-content-md-end">
                    <!-- Button trigger modal -->
                    <button id="add_item_button" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalReceive">
                        Receive Item
                    </button>

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModalReceive" data-bs-backdrop="static" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-fullscreen">
                            <div class="modal-content">
                                <div class="modal-header" id="edit_modal_head">
                                    <h1 id="item_form_header">Item Receive Form</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" @click="clearData(); clearError()" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="card" id="main_card">
                                        <form class="row g-3" id="item_receive_form">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <label id="input_box_level" for="inputEmail4" class="form-label">Received No</label>
                                                    <input type="number" class="form-control" id="input_area" v-model="dataForm.received_no">
                                                    <span id="valide" v-if="dataForm.received_no"></span>
                                                    <span class="input-group-text" v-else-if="receiveFromError == 'error'">
                                                        <p>This fild is required</p>
                                                    </span>
                                                    <span v-else class="input-group-text"></span>
                                                </div>
                                                <div class="col-md-4">
                                                    <label id="input_box_level" for="inputEmail4" class="form-label">Received Date</label>
                                                    <input type="date" class="form-control" id="input_area" v-model="dataForm.received_date">
                                                    <span id="valide" v-if="dataForm.received_date"></span>
                                                    <span class="input-group-text" v-else-if="receiveFromError == 'error'">
                                                        <p>This fild is required</p>
                                                    </span>
                                                    <span v-else class="input-group-text"></span>
                                                </div>
                                                <div class="col-md-4">
                                                    <label id="input_box_level" for="inputEmail4" class="form-label">MRR No</label>
                                                    <input v-model="dataForm.mrr_no" type="number" class="form-control" id="input_area">
                                                    <span id="valide" v-if="dataForm.mrr_no"></span>
                                                    <span class="input-group-text" v-else-if="receiveFromError == 'error'">
                                                        <p>This fild is required</p>
                                                    </span>
                                                    <span v-else class="input-group-text"></span>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label id="input_box_level" for="inputEmail4" class="form-label">Received By</label>
                                                    <input v-model="dataForm.received_by" type="text" class="form-control" id="input_area">
                                                    <span id="valide" v-if="dataForm.received_by"></span>
                                                    <span class="input-group-text" v-else-if="receiveFromError == 'error'">
                                                        <p>This fild is required</p>
                                                    </span>
                                                    <span v-else class="input-group-text"></span>
                                                </div>
                                                <div class="col-md-6">
                                                    <label id="input_box_level" for="inputEmail4" class="form-label">Item Remarks</label>
                                                    <input v-model="dataForm.remarks" type="text" class="form-control" id="input_area">
                                                    <span id="valide" v-if="dataForm.remarks"></span>
                                                    <span class="input-group-text" v-else-if="receiveFromError == 'error'">
                                                        <p>This fild is required</p>
                                                    </span>
                                                    <span v-else class="input-group-text"></span>
                                                </div>
                                            </div>
                                            <div class="card" id="receive_item_filds">
                                                <div class="row">
                                                    <div class="item_header_receive">
                                                        <i class="bi bi-list-check" id="item_header_icon"></i>
                                                        <h1 id="item_header">Item Details</h1>
                                                    </div>
                                                </div>
                                                <!-- table for daynamic row -->
                                                <table class="table">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">SL</th>
                                                            <th scope="col">Item Name</th>
                                                            <th scope="col">Unit Type</th>
                                                            <th scope="col">Received Quantity</th>
                                                            <th scope="col">Remarks</th>
                                                            <th scope="col">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr id="item_input_row" v-for="items, index  in dataForm.item_details" :key="index">
                                                            <th scope="row">{{index+1}}</th>
                                                            <td id="item_input_data">
                                                                <select id="item_input_box" v-model="items.item_id" class="form-select" aria-label="Default select example">
                                                                    <option disabled>Tap this to select Item</option>
                                                                    <option v-for="lists,index in itemlList" :key="index" :value="lists?.id">{{lists?.item_name}}</option>
                                                                </select>
                                                                <span id="valide" v-if="items.item_id"></span>
                                                                <span class="input-group-text" v-else-if="receiveFromError == 'error'">
                                                                    <p>This fild is required</p>
                                                                </span>
                                                                <span v-else class="input-group-text"></span>
                                                            </td>
                                                            <td id="item_input_data">
                                                                <select id="item_input_box" v-model="items.unit_id" class="form-select" aria-label="Default select example">
                                                                    <option disabled>Select Item Unit Type</option>
                                                                    <option v-for="lists, index in unitList" :key="index" :value="lists?.id">{{lists?.unit_name}}</option>
                                                                </select>
                                                                <span id="valide" v-if="items.unit_id"></span>
                                                                <span class="input-group-text" v-else-if="receiveFromError == 'error'">
                                                                    <p>This fild is required</p>
                                                                </span>
                                                                <span v-else class="input-group-text"></span>
                                                            </td>
                                                            <td id="item_input_data"><input type="number" id="item_input_box" class="form-control" v-model="items.received_quantity">
                                                                <span id="valide" v-if="items.received_quantity"></span>
                                                                <span class="input-group-text" v-else-if="receiveFromError == 'error'">
                                                                    <p>This fild is required</p>
                                                                </span>
                                                                <span v-else class="input-group-text"></span>
                                                            </td>
                                                            <td id="item_input_data"><input type="text" id="item_input_box" class="form-control" v-model="items.remarks">
                                                                <span id="valide" v-if="items.remarks"></span>
                                                                <span class="input-group-text" v-else-if="receiveFromError == 'error'">
                                                                    <p>This fild is required</p>
                                                                </span>
                                                                <span v-else class="input-group-text"></span>
                                                            </td>
                                                            <td id="action_group">
                                                                <button v-if="index!==0" class="btn" type="button" @click="removeRow(index)" id="delete_receive_item"><i class="bi bi-trash3"></i></button>
                                                            </td>
                                                        </tr>
                                                    </tbody>

                                                </table>
                                                <div class="row">
                                                    <div class="col-md-2">
                                                        <button id="receive_item_filds_action_group" class="btn btn-success me-md-2" type="button" @click="addRow()"><i class="bi bi-plus-circle"> Add More</i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        <div class="row">
                                            <div class="col-md-12" id="submit_items_row">
                                                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                                    <button id="submit_items" class="btn btn-primary me-md-2" @click="ReceveList(dataForm)" type="submit">Receive</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Receive Item Edit / Update Form -->
            <div class="row">
                <div class="col-md-12">
                    <!-- If get instruction from Mohsin vai will dev it -->
                </div>
            </div>
            <!-- Receive item list -->
            <div class="row">
                <div class="col-md-12">
                    <!-- <div class="row">
                    <div class="col-md-2">
                            <button class="btn btn-sm" type="button" id="receive_item_length">{{tlength}}</button>
                    </div>
                </div> -->
                    <div class="card" id="receive_item_card">

                        <table class="table table-hover" id="item_receve_table">

                            <thead>
                                <tr>
                                    <th scope="col" id="action_col_head">SL</th>
                                    <th scope="col" id="action_col_head">Received No</th>
                                    <th scope="col">MRR_No</th>
                                    <th scope="col">Received by</th>
                                    <th scope="col">Received Date</th>
                                    <th scope="col">Remarks</th>
                                    <th scope="col" id="action_col_head">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(itemReceive, index) in itemReceived" :key="index">
                                    <th id="action_col" scope="row">{{index+1}}</th>
                                    <td id="action_col">{{itemReceive?.received_no}}</td>
                                    <td id="action_col">{{itemReceive?.mrr_no}}</td>
                                    <td id="action_col">{{itemReceive?.received_by}}</td>
                                    <td id="action_col">{{itemReceive?.received_date}}</td>
                                    <td id="action_col">{{itemReceive?.remarks}}</td>
                                    <td id="action_col_button">
                                        <!-- Button trigger viewModal -->
                                        <button type="button" class="btn" id="item_vue_btn" @click="getItemDetail(itemReceive?.item_details)" data-bs-toggle="modal" data-bs-target="#examplemodalitemList">
                                            View items
                                        </button>

                                        <!-- viewModal -->

                                        <div class="modal fade" id="examplemodalitemList" data-bs-backdrop="static" tabindex="-1" aria-labelledby="examplemodalLabel" aria-hidden="true">
                                            <div class="modal-dialog modal-dialog-centered">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="examplemodalLabel">Received Items List</h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <div class="row">
                                                            <div class="col-md-12">
                                                                <table class="table">
                                                                    <thead>
                                                                        <tr>
                                                                            <th scope="col">SL</th>
                                                                            <th scope="col">Item Name</th>
                                                                            <th scope="col">Item Code</th>
                                                                            <th scope="col">Status</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr v-for="itemdetaillists, index in itemDetails" :key="index">
                                                                            <th id="action_col">{{index+1}}</th>
                                                                            <td id="action_col">{{itemdetaillists?.item?.item_name ??"Not Found"}}</td>
                                                                            <td id="action_col">{{itemdetaillists?.item?.item_code??"Not Found"}}</td>
                                                                            <td id="action_col" v-if="itemdetaillists?.item?.item_status == 1">Active</td>
                                                                            <td id="action_col" v-else>Inactive</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
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
import {
    ref
} from "@vue/reactivity";

export default {
    data() {
        return {
            itemReceived: [],
            itemlList: [],
            unitList: [],
            itemDetails: [],
            tlength: {},
            receveFormVal: {},
            receiveFromError: {},
            cleartada: {}
        }
    },
    created() {
        this.getItemList()
        this.getUnitList()
        this.itemReceiveList()
    },
    watch: {
        itemlList(newVal, preVal) {
            console.log(newVal)
        }
    },
    methods: {
        //Get item receive list
        itemReceiveList() {
            fetch(`http://103.4.145.242:8006/api/auth/store-item-receive`)
                .then((response) => response.json())
                .then((json) => {
                    this.tlength = json ?.data ?.total;
                    this.itemReceived = json ?.data ?.data
                });
        },
        // Get item list
        getItemList() {
            fetch(`http://103.4.145.242:8006/api/auth/store-item`)
                .then((response) => response.json())
                .then((json) => {
                    this.itemlList = json ?.data ?.data
                }).catch;
        },
        //get item details
        getItemDetail(idl) {
            this.itemDetails = idl
            console.log(idl)
        },
        //Save Receve Item Data
        ReceveList(dataForm) {
            fetch(`http://103.4.145.242:8006/api/auth/store-item-receive`, {
                    method: 'POST',
                    body: JSON.stringify(
                        dataForm
                    ),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                .then((response) => response.json())
                .then((json) => {
                    this.itemReceiveList();
                    this.receiveFromError = json ?.message;
                    this.receiveFromError = json ?.status;
                    console.log(json)
                }).catch;
        },
        //Get unit list
        getUnitList() {
            fetch(`http://103.4.145.242:8006/api/auth/unit`)
                .then((response) => response.json())
                .then((json) => {
                    this.unitList = json ?.data
                }).catch;
        },
        //clear error worning
        clearError() {
            this.receiveFromError = {}
            console.log("Thank you kisluda")
        }

    },
    setup() {
        const dataForm = ref({
            received_no: '',
            received_date: '',
            mrr_no: '',
            received_by: '',
            remarks: '',
            item_details: [{}]
        })

        const addRow = () => {
            dataForm.value.item_details.push({
                item_name: "",
                unit_name: "",
                received_quantity: "",
                remarks: ""
            });
        };
        const removeRow = (index) => {
            if (dataForm.value.item_details.length > 1) {
                dataForm.value.item_details.splice(index, 1)
            }
        }

        const clearData = () => {
            Object.assign(dataForm.value, {
                    received_no: '',
                    received_date: '',
                    mrr_no: '',
                    received_by: '',
                    remarks: '',
                    item_details: [{}]
                }),
                console.log(dataForm)
        }

        return {
            dataForm,
            addRow,
            removeRow,
            clearData

        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap');

#receive_item_length {
    background-color: #3F51B5;
    color: rgb(255, 255, 255);
    border-radius: 60%;
    width: 100%;
    margin-left: -24px;
    margin-top: -160px;

}

#action_col_button {
    text-align: center;
    border: 1px solid #000;
    padding: 10px;
}

#item_vue_btn {
    border: 1px solid rgb(121, 121, 121);
    background-color: rgb(161, 161, 161);
    border-radius: 0%;
}

#item_vue_btn:hover {
    background-color: #3F51B5;
    color: rgb(255, 255, 255);
    border: none;
}

/* Receive item model */
#main_card {
    border: none;
    /* padding: 40px; */
}

#valide {
    color: #22db31;
}

#item_receve_list_card {
    margin-top: 20px;
    border-radius: 0%;
    border: none;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

#item_form_header {
    font-size: 28px;
    font-family: 'Lato', sans-serif;
}

#input_box_level {
    font-size: 14px;
    font-family: 'Lato', sans-serif;
    padding: 5px;
    margin-bottom: -22px;
    margin-left: 8px;
    background-color: rgb(255, 255, 255);
    overflow: auto;
    color: rgb(153, 153, 153);
}

#input_area {
    border: none;
    border-bottom: 1px solid rgb(185, 185, 185);
    border-radius: 0 !important;
}

#receive_item_filds {
    border-radius: 0 !important;
    /* border: 1px solid rgb(218, 218, 218); */
    border: none;
    padding: 5px;
    padding-top: -20px;
    margin-top: 30px;
    width: 100%;
    height: 340px;
    overflow-x: scroll;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.table {
    border-color: rgb(255, 255, 255);
}

/* Scrollbar styles */
::-webkit-scrollbar {
    width: 8px;
    height: 0;
}

::-webkit-scrollbar-track {
    border: 1px solid rgb(105, 105, 105);
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    background: rgb(50, 148, 205);
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: rgb(50, 148, 205);
}

.item_header_receive {
    display: flex;
}

#item_header_icon {
    font-size: 28px;
}

#item_header {
    font-size: 28px;
    font-family: 'Lato', sans-serif;
    padding: 5px;
}

#receive_item_filds_row {
    margin: 8px;

}

#item_input_row {
    border: 1px solid#000;
}

#item_input_data {
    border: 1px solid#000;
}

#action_group {
    text-align: center;
}

#item_input_box {
    /* border-color: black; */
    border: none;
    border-radius: 0%;
}

#receive_item_filds_action_group_col {
    text-align: center;
}

/* #receive_item_filds_action_group_add {
    margin-top: 44px;

} */

#receive_item_filds_action_group {
    width: 100%;
    margin-left: 5%;
    background-color: rgb(68, 115, 204);
    border: none;

}

#receive_item_filds_action_group i {
    font-size: 16px;
}

#delete_receive_item {
    background-color: rgb(231, 44, 38);
    color: rgb(255, 255, 255);
}

#submit_items_row {
    margin-top: 30px;
}
</style>
