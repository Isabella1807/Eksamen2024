const state = () => ({
    itemIds: {
    }
})

const getters = {
    totalAmount: (state) => {
        const listOfItemAmounts = Object.values(state.itemIds);
        if (listOfItemAmounts.length > 0) {
            return listOfItemAmounts.reduce((total, num) => total + num);
        }
        return 0;
    }
}

const actions = {
    addItemToCart({commit}, {productID, amount}) {
        commit('addItemIdWithAmount', {productID, amount})
    }
}

const mutations = {
    addItemIdWithAmount(state, {productID, amount}){
        state.itemIds[productID] = amount + (state.itemIds[productID] ?? 0);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}