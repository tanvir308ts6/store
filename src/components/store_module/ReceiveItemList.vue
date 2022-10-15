<template>
<div class="row">
    <div class="col-md-12">
        <div class="row">
            <!-- receive item list -->
            <div class="col-md-10">

            </div>
            <!-- receive item modal -->
            <div class="col-md-2">
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
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="card" id="main_card">
                                    <form class="row g-3" id="item_receive_form">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <label id="input_box_level" for="inputEmail4" class="form-label">Received No</label>
                                                <input type="number" class="form-control" id="input_area" v-model="dataForm.received_no">
                                            </div>
                                            <div class="col-md-4">
                                                <label id="input_box_level" for="inputEmail4" class="form-label">Received Date</label>
                                                <input type="date" class="form-control" id="input_area" v-model="dataForm.received_date">
                                            </div>
                                            <div class="col-md-4">
                                                <label id="input_box_level" for="inputEmail4" class="form-label">MRR No</label>
                                                <input v-model="dataForm.mrr_no" type="number" class="form-control" id="input_area">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label id="input_box_level" for="inputEmail4" class="form-label">Received By</label>
                                                <input v-model="dataForm.received_by" type="text" class="form-control" id="input_area">
                                            </div>
                                            <div class="col-md-6">
                                                <label id="input_box_level" for="inputEmail4" class="form-label">Item Remarks</label>
                                                <input v-model="dataForm.remarks" type="text" class="form-control" id="input_area">
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
                                                        </td>
                                                        <td id="item_input_data">
                                                            <select id="item_input_box" v-model="items.unit_id" class="form-select" aria-label="Default select example">
                                                                <option disabled>Select Item Unit Type</option>
                                                                <option v-for="lists, index in unitList" :key="index" :value="lists?.id">{{lists?.unit_name}}</option>
                                                            </select>
                                                        </td>
                                                        <td id="item_input_data"><input type="number" id="item_input_box" class="form-control" v-model="items.received_quantity"></td>
                                                        <td id="item_input_data"><input type="text" id="item_input_box" class="form-control" v-model="items.remarks"></td>
                                                        <td id="action_group">
                                                            <button v-if="index!==0" class="btn" type="button" @click="removeRow(index)" id="delete_receive_item"><i class="bi bi-trash3"></i></button>
                                                        </td>
                                                    </tr>
                                                </tbody>

                                            </table>
                                            <div class="row">
                                                <div class="col-md-2">
                                                    <button id="receive_item_filds_action_group" class="btn btn-success me-md-2" type="button" @click="addRow"><i class="bi bi-plus-circle"> Add More</i></button>
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

        <!-- Receive item list -->
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <table class="table table-hover">
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
                                <!-- <td id="action_col">{{ itemlLists?.item_status}}</td> -->
                                <td id="action_col_button">
                                    <!-- <button class="btn btn-primary me-md-2" data-bs-toggle="modal" data-bs-target="#exampleeditModal" type="submit" @click="editItem(itemlLists.id)"><i class="bi bi-pencil"></i></button>
                                    <button class="btn btn-danger me-md-2" type="button" @click="removeitem(itemlLists.id)"><i class="bi bi-trash3"></i></button> -->
                                    <!-- Button trigger viewModal -->
                                    <button type="button" class="btn btn-primary" @click="getItemDetail(itemReceive?.item_details)" data-bs-toggle="modal" data-bs-target="#examplemodalitemList">
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
                                                            <!-- <ul class="list-group" v-for="(itemReceive, index) in itemReceived" :key="index">
                                                              <li v-for="(letestItem,index) in itemReceive.item_details" :key="index" class="list-group-item">{{letestItem?.item?.item_name}}</li>
                                                            </ul> -->
                                                            <table class="table">
                                                                <thead>
                                                                    <tr>
                                                                        <th scope="col">SL</th>
                                                                        <th scope="col">Item Name</th>
                                                                        <th scope="col">Item Code</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr v-for="itemdetaillists, index in itemDetails" :key="index">
                                                                        <th>{{index+1}}</th>
                                                                        <td>{{itemdetaillists?.item?.item_name ?? "Not Found"}}</td>
                                                                        <td>{{itemdetaillists?.item?.item_code?? "Not Found"}}</td>
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
            itemDetails: []
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
                .then((json) => {this.itemReceiveList(),console.log(dataForm);console.log(json.massage)}).catch;
        },
       

        //Get unit list
        getUnitList() {
            fetch(`http://103.4.145.242:8006/api/auth/unit`)
                .then((response) => response.json())
                .then((json) => {
                    this.unitList = json ?.data
                }).catch;
        },

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
        // const item = ref([{}]);
        const addRow = () => {
            dataForm.value.item_details.push({
                item_name: "",
                unit_name: "",
                received_quantity: "",
                remarks: ""
            });
            // console.log(item.value)
        };
        const removeRow = (index) => {
            if (dataForm.value.item_details.length > 1) {
                dataForm.value.item_details.splice(index, 1)
            }
        }
        return {
            dataForm,
            addRow,
            removeRow
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap');

#action_col_button {
    text-align: center;
    border: 1px solid #000;
    /* padding: 0; */
    padding: 10px;
}

/* Receive item model */
#main_card {
    border: none;
    /* padding: 40px; */
}

#item_form_header {
    font-size: 28px;
    font-family: 'Lato', sans-serif;
}

/* #item_receive_form {
    padding: 20px;
} */

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
    margin-top: 40px;
}
</style>
