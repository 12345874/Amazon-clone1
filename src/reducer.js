//think of it as a data layer 
//create an empty basket

export const initialState = {
    basket: [],
    user: null
};
//Reduce :- iterate through the basket and talley up the total
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

//action is basically what type of action you want to do add to basket or remove eg.
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                //whatever the state originally it was
                ...state,
                //whatever the basket currently was + whatever actully decided to the item
                basket: [...state.basket, action.item],
            }

        case "EMPTY_BASKET":
            return {
                ...state,
                basket: [],
            }

        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);

            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in basket!`
                )
            }
            return {
                ...state,
                basket: newBasket
            }

        case "SET_USER":
            return {
                ...state,
                user: action.user

            }

        default:
            return state;
    }
}

export default reducer;