<template>
<div class="row">
    <div class="col-md-12" id="sidebar">
        <div class="accordion">
            <div class="accordion-item">
                <div class="accordion-button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Store Module
                </div>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div class="accordion-body">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <a href="#" class="list-group-item list-group-item-action">
                                    <router-link class="list-group-item list-group-item-action" to="/">Dashbord</router-link>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="list-group-item list-group-item-action">
                                    <router-link class="list-group-item list-group-item-action" to="/itemList">Item List</router-link>
                                </a>
                            </li>
                            <!-- <li class="nav-item">
                                <a href="#" class="list-group-item list-group-item-action">
                                    <router-link class="list-group-item list-group-item-action" to="/itemReceive">Item Receive Form</router-link>
                                </a>
                            </li> -->
                            <li class="nav-item">
                                <a href="#" class="list-group-item list-group-item-action">
                                    <router-link class="list-group-item list-group-item-action" to="/ReceiveItemList">Item Receive List</router-link>
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
#sidebar{
    background-color: rgb(255, 255, 255);
    height: 640px;
    border-right: 1px solid rgb(160, 160, 160);;
}
.accordion-button {
    border-radius: none !important;
}

.accordion-item {
    border: none !important;
}

.accordion {
    width: 100%;
    color: black;
    margin-top: 20px;
}

.accordion-body {
    border-radius: none !important;
    color: black;
}
</style>
