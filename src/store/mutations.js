export function addToCart(state, product) {
    const selectedItem = state.cart.find(item => item.id === product.id)
    if(selectedItem){
        selectedItem.count++
    }else{
        state.cart.push(product)

    }
}
export function deleteProductFromCart(state, id) {
    state.cart = state.cart.filter(item => item.id !== id)
}
export function updateCount(state, item) {
    const selectedItem = state.cart.find(c => c.id === item.id)
    selectedItem.count = item.count;
}
