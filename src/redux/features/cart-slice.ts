export const addItemToCart = () => {};
export const removeItemFromCart = () => {};
export const updateCartItemQuantity = () => {};
export const removeAllItemsFromCart = () => {};
export const selectCartItems = () => [];
export const selectTotalPrice = () => 0;

export default function cartReducer() {
  return { items: [] };
}
