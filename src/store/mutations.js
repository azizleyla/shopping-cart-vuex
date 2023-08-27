export function addToCart(state, product) {
    state.cart.push(product)
}
export function deleteProductFromCart(state, id) {
    state.cart = state.cart.filter(item => item.id !== id)
}