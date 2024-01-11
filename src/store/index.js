import { createStore } from 'vuex'

import user from "./modules/user.js";
import cart from "./modules/cart.js";

// createstore takes an object
export default createStore({
    modules: {
        user,
        cart
    }
})