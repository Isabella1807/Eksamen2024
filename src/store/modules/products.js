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
    async addProduct({commit, dispatch}, product) {
        const dataIsValid = await dispatch('isProductDataValid', product);
        if (dataIsValid) {
            commit('addNewProductToDB', product);
            return true;
        } else {
            return false;
        }
    },
    loadProducts({state, commit}) {
        if (state.products.length === 0) {
            commit('fetchAllProductsFromDB')
        }
    },
    async editProduct({commit, dispatch}, {product, productID}) {
        const dataIsValid = await dispatch('isProductDataValid', product);
        if (dataIsValid) {
            commit('editProductFromDB', {product, productID})
            return true;
        } else {
            return false;
        }
    },
    deleteProduct({commit}, {productID}) {
        commit('removeProductFromDB', {productID});
    },
    isProductDataValid({commit}, product) {
        if (product.title === '') return false;
        if (product.frontImage === '') return false;
        if (!product.price > 0) return false;
        if (product.description === '') return false;
        if (product.category === '') return false;

        // all good
        return true;
    }
}

const mutations = {
    async addNewProductToDB(state, product) {
        const newID = await productDB.addNewProduct(product);
        state.products.push({
            ...product,
            id: newID
        })
    },
    async fetchAllProductsFromDB(state) {
        state.products = await productDB.getAllProducts();
    },
    async editProductFromDB(state, {product, productID}) {
        await productDB.editProduct(
            productID,
            product
        )
        const indexOfUpdatedProduct = state.products.findIndex((p) => p.id === productID)
        if (indexOfUpdatedProduct >= 0) {
            state.products[indexOfUpdatedProduct] = {...product, id: productID}
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