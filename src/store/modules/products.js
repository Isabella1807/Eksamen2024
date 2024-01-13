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
    },
    deleteProduct({commit}, {productID}) {
        commit('removeProductFromDB', {productID});
    }
}

const mutations = {
    async fetchAllProductsFromDB(state) {
      state.products = await productDB.getAllProducts();
    },
    async removeProductFromDB(state, {productID}) {
        await productDB.deleteProduct(productID);
        state.products = state.products.filter((productObject) => productObject.id !== productID);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}