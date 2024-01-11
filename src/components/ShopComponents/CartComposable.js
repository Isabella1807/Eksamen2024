import {ref, computed} from 'vue';
export function useCart(){
    const cartItems = ref({ });

    const addItemToCart = (itemId, amountOfItem) => {
        cartItems.value[itemId] = amountOfItem + (cartItems.value[itemId] ?? 0);
    }

    const totalCartAmount = computed(() => {
        const arrOfItemAmounts = Object.values(cartItems.value);
        if (arrOfItemAmounts.length > 0) {
            return arrOfItemAmounts.reduce((total, num) => total + num);
        }
        return 0;
    });


    return { addItemToCart, cartItems, totalCartAmount}
}
