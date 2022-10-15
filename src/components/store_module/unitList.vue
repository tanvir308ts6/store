<template>
<div class="row">
    <div class="col-md-12">
        <!-- Unit List  -->
        <div class="row">
            <div class="col-md-12">
                <div class="card" id="item_receve_list_card">
                    <!-- unit list table Heading and button -->
                    <div class="row">
                        <div class="col-md-12">
                            <h4 id="item_form_header">Unit List</h4>
                        </div>
                    </div>
                    <!-- unit list table -->
                    <div class="row">
                        <div class="col-md-12">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col" id="action_col_head">SL</th>
                                        <th scope="col">Unit Name</th>
                                        <th scope="col">Unit Status</th>
                                        <th scope="col" id="action_col_head">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(unitlLists, index) in unitList" :key="index">
                                        <th id="action_col" scope="row">{{ index+1 }}</th>
                                        <td id="action_col">{{ unitlLists.unit_name }}</td>
                                        <td id="action_col" v-if="unitlLists.unit_status == 1">Active</td>
                                        <td id="action_col" v-if="unitlLists.unit_status == 0">Inactive</td>
                                        <td id="action_col_btn">
                                            <button class="btn btn-primary me-md-2" data-bs-toggle="modal" data-bs-target="#exampleeditModal" type="submit" @click="editItem(itemlLists.id)"><i class="bi bi-pencil"></i></button>
                                            <button class="btn btn-danger me-md-2" type="button" @click="removeitem(itemlLists.id)"><i class="bi bi-trash3"></i></button>
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
</div>
</template>

<script>
export default {
    data() {
        return{
            unitList:[],
        }
    },

    created() {
        this.GetUnitList()
    },

    watch: {

    },

    methods: {
        //get unit list
        GetUnitList() {
            fetch(`http://103.4.145.242:8006/api/auth/unit`)
                .then((response) => response.json())
                .then((json) => {this.unitList = json?.data});
        }
    },

}
</script>

<style>
#item_receve_list_card{
    margin-top: 20px;
    border-radius: 0%;
    border: none;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
</style>
