<template>
<nav class="navbar navbar-expand-lg" id="navigation_top">
    <div class="container-fluid">
        <a class="navbar-brand" href="#" id="nav_head">
            NU/STORE
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="nav_item">
                <!-- link list here  -->
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </div>
</nav>
</template>

<script>
export default {};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap');
    #navigation_top{
        width: 100%;
        background-color: rgb(53, 140, 211);
        color: rgb(255, 255, 255);
    }
    #nav_head{
        color: rgb(255, 255, 255);
        font-size: 26px;
         font-family: 'Lato', sans-serif;
       
    }
    #nav_item li a{
        color: rgb(255, 255, 255);
    }
</style>
