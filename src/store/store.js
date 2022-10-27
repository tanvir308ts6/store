import Vue from 'vue';
import Vuex from 'vuex'

//Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        booklist:['book1','book2','book3']
    }
})


export default store