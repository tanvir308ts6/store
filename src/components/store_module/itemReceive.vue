<template>
<div class="row">
    <div class="col-md-12">
        <div class="card" id="main_card">
            <h1 id="item_form_header">Item Receive Form</h1>
            <form class="row g-3" id="item_receive_form">
                <div class="row">
                    <div class="col-md-4">
                        <label id="input_box_level" for="inputEmail4" class="form-label">Received No</label>
                        <input type="number" class="form-control" id="input_area" v-model="Received_No">
                    </div>
                    <div class="col-md-4">
                        <label id="input_box_level" for="inputEmail4" class="form-label">Received Date</label>
                        <input type="date" class="form-control" id="input_area">
                    </div>
                    <div class="col-md-4">
                        <label id="input_box_level" for="inputEmail4" class="form-label">MRR No</label>
                        <input type="number" class="form-control" id="input_area">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <label id="input_box_level" for="inputEmail4" class="form-label">Received By</label>
                        <input type="text" class="form-control" id="input_area">
                    </div>
                    <div class="col-md-6">
                        <label id="input_box_level" for="inputEmail4" class="form-label">Item Remarks</label>
                        <input type="text" class="form-control" id="input_area">
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
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="items, index  in item" :key="items">
                                <th scope="row">{{index+1}}</th>
                                <td>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected >Tap this to select Item</option>
                                        <option value="">5465</option>
                                    </select>
                                </td>
                                <td>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Select Item Unit Type</option>
                                        <option value="1">dfcxv</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </td>
                                <td><input type="number" class="form-control" v-model="items.received_quantity"></td>
                                <td><input type="text" class="form-control" v-model="items.remarks"></td>
                                <td>
                                    <button v-if="index!==0" class="btn btn-danger me-md-2" type="button" @click="removeRow(index)"><i class="bi bi-trash3"></i></button>
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
                        <button id="submit_items" class="btn btn-primary me-md-2" @click="fainalSubmit(Received_No, item )" type="button">Button</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">

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
            itemlList: []
        }
    },
    created() {
        fetch("http://103.4.145.242:8006/api/auth/store-item")
            .then((response) => response.json())
            .then((json) => (this.itemlList = json));
    },
    methods: {
        // saveData(StudentName, student_id, email, presentaddress) {
        //     fetch("http://127.0.0.1:8000/api/addstudent", {
        //             method: "post",
        //             body: JSON.stringify({
        //                 StudentName: StudentName,
        //                 student_id: student_id,
        //                 email: email,
        //                 presentaddress: presentaddress,
        //             }),
        //             headers: {
        //                 "Content-type": "application/json; charset=UTF-8",
        //             },
        //         })
        //         .then((response) => response.json())
        //         .then((json) => {
        //             console.log(json);
        //             this.fetchData();
        //         });
        // },
        fainalSubmit(Received_No,a, b) {
            console.log(Received_No,a, b)
        }

    },
    setup() {
        const item = ref([{}]);
        const addRow = () => {
            item.value.push([{
                received_quantity: "",
                remarks: ""
            }]);
            // console.log(item.value)
        };
        const removeRow = (index) => {
            if (item.value.length > 1) {
                item.value.splice(index, 1)
            }
        }
        return {
            item,
            addRow,
            removeRow
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap');

#main_card {
    border: none;
    padding: 40px;
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
    border-bottom: 1px solid rgb(46, 46, 46);
    border-radius: 0 !important;
}

#receive_item_filds {
    border-radius: 0 !important;
    border: 1px solid rgb(218, 218, 218);
    padding: 10px;
    padding-top: -20px;
    margin-top: 30px;
    width: 100%;
    height: 300px;
    overflow-x: scroll;
}
.table{
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

#receive_item_filds_action_group_col {
    text-align: center;
}

/* #receive_item_filds_action_group_add {
    margin-top: 44px;

} */

#receive_item_filds_action_group {
   width: 100%;
   margin-left: 5%;
   background-color:rgb(68, 115, 204);
   border: none;

}

#receive_item_filds_action_group i {
    font-size:16px;
}

#submit_items_row {
    margin-top: 40px;
}
</style>
