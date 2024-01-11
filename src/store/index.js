import { createStore } from 'vuex'

import user from "./modules/user.js";

// createstore takes an object
export default createStore({
    modules: {
        user,
    }
})