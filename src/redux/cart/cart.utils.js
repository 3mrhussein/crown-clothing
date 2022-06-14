export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const clearItem = (cartItems, itemToClear) => {
  const newCartItems = cartItems.filter((item) => item.id !== itemToClear.id);
  return newCartItems;
};
export const removeItem = (cartItems, itemToRemove) => {
  const exsistingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToRemove.id
  );
  if (exsistingCartItem.quantity === 1)
    return cartItems.filter((item) => item.id !== exsistingCartItem.id);

  return cartItems.map((item) =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
