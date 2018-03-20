import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    photoList: []
};

const mutations = {
    setPhotoList(state,status){
        state.photoList = status.list;
    }
};

const actions = {
    setPhotoList({commit},status) {
        commit('setPhotoList',status);
    }
};


export default new Vuex.Store({
    state,
    mutations,
    actions
});
