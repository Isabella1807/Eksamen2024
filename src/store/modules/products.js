import {onMounted} from "vue";
import productDB from "@/database/products";

const state = () => ({
    products: []
})

const getters = {
    allProducts: (state) => {
        return state.products
    }
}

const actions = {
    loadProducts({state, commit}) {
        if (state.products.length === 0) {
            commit('fetchAllProductsFromDB')
        }
    }
}

const mutations = {
    async fetchAllProductsFromDB(state) {
      state.products = await productDB.getAllProducts();
      console.log("anton berg ellerr");
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}