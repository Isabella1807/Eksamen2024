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
    addProduct({commit}, product){
      commit('addNewProductToDB', product);
    },
    loadProducts({state, commit}) {
        if (state.products.length === 0) {
            commit('fetchAllProductsFromDB')
        }
    },
    editProduct({commit}, {product, productID}){
        commit('editProductFromDB', {product, productID})
    },
    deleteProduct({commit}, {productID}) {
        commit('removeProductFromDB', {productID});
    }
}

const mutations = {
    async addNewProductToDB(state, product){
        const newID = await productDB.addNewProduct(product);
        state.products.push({
            ...product,
            id: newID
        })
    },
    async fetchAllProductsFromDB(state) {
      state.products = await productDB.getAllProducts();
    },
    async editProductFromDB(state, {product, productID}){
        await productDB.editProduct(
            productID,
            product
        )
        const indexOfUpdatedProduct = state.products.findIndex((p) => p.id === productID)
        if (indexOfUpdatedProduct >= 0) {
            state.products[indexOfUpdatedProduct] = product
        }
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