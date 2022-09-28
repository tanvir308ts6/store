<template>
<div class="row">
    <div class="col-md-12">
        <div class="card" id="main_card">
            <h1 id="item_form_header">Item Receive Form</h1>
            <form class="row g-3" id="item_receive_form">
                <div class="row">
                    <div class="col-md-4">
                        <label id="input_box_level" for="inputEmail4" class="form-label">Received No</label>
                        <input type="number" class="form-control">
                    </div>
                    <div class="col-md-4">
                        <label id="input_box_level" for="inputEmail4" class="form-label">Received Date</label>
                        <input type="date" class="form-control">
                    </div>
                    <div class="col-md-4">
                        <label id="input_box_level" for="inputEmail4" class="form-label">MRR No</label>
                        <input type="number" class="form-control">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <label id="input_box_level" for="inputEmail4" class="form-label">Received By</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="col-md-6">
                        <label id="input_box_level" for="inputEmail4" class="form-label">Item Remarks</label>
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="card" id="receive_item_filds">
                    <div class="row">
                        <div class="item_header_receive">
                            <i class="bi bi-list-check" id="item_header_icon"></i>
                            <h1 id="item_header">Item Details</h1>
                        </div>
                    </div>
                    <div class="row" id="receive_item_filds_row" v-for="item,index  in from" :key="item">
                        <div class="col-md-2">
                            <label id="input_box_level" for="inputEmail4" class="form-label">Item ID</label>
                            <input type="number" class="form-control" v-model="item.item_id">
                        </div>
                        <div class="col-md-2">
                            <label id="input_box_level" for="inputEmail4" class="form-label">Unit ID</label>
                            <input type="number" class="form-control" v-model="item.unit_id">
                        </div>
                        <div class="col-md-2">
                            <label id="input_box_level" for="inputEmail4" class="form-label">Received Quantity</label>
                            <input type="number" class="form-control" v-model="item.received_quantity">
                        </div>
                        <div class="col-md-4">
                            <label id="input_box_level" for="inputEmail4" class="form-label">Remarks</label>
                            <input type="text" class="form-control" v-model="item.remarks">
                        </div>
                        <div class="col-md-2" id="receive_item_filds_action_group_col">
                            <button v-if="index!==0" class="btn btn-danger me-md-2" id="receive_item_filds_action_group" type="button" @click="removeRow(index)"><i class="bi bi-x-octagon"></i></button>
                            <button class="btn btn-success me-md-2" id="receive_item_filds_action_group" type="button" @click="addRow"><i class="bi bi-plus-circle"></i></button>
                        </div>
                    </div>
                </div>
            </form>
            <div class="row">
                <div class="col-md-12" id="submit_items_row">
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button id="submit_items" class="btn btn-primary me-md-2" type="button">Button</button>
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
    reactive
} from 'vue';
export default {
    data() {

    },
    created() {

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

    },
    setup() {
        const from = reactive([{
            studentName: '',
            age: '',
            batch: ''
        }])

        const addRow = () => {
            from.push({
                studentName: '',
                age: '',
                batch: ''
            })
        }

        const removeRow = (index) => {
            if (from.length > 1) {
                from.splice(index, 1)
            }
        }
        return {
            from,
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
}

#receive_item_filds {
    border: 1px solid rgb(179, 179, 179);
    padding: 10px;
    padding-top: -20px;
    margin-top: 30px;

    /* width: 100%;
    height: 280px;
    overflow-y: scroll;
    scrollbar-color: rebeccapurple green;
    scrollbar-width: thin; */
    /* font: 24px/36px sans-serif; */
    width: 100%;
    height: 280px;
    overflow-x: scroll;
}



/* Scrollbar styles */
::-webkit-scrollbar {
    width: 12px;
    height: 12px;
}

/* ::-webkit-scrollbar-track {
    border: 1px solid yellowgreen;
    border-radius: 10px;
} */

::-webkit-scrollbar-thumb {
    background: rgb(95, 95, 95);
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

#receive_item_filds_action_group_add {
    margin-top: 44px;
}

#receive_item_filds_action_group {
    margin-top: 22px;
}

#submit_items_row {
    margin-top: 40px;
}
</style>
