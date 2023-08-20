export const cartSelector = () => state.cart
export const cartItemSelectorById = () => () =>
  state.cart.items.find((obj) => obj.id === id)
