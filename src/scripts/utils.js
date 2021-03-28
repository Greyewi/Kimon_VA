
export const addToWishlist = (wishList, game) => {
  return [...wishList, game]
}

export const removeFromWishlist = (wishList, gameId) => {
  return wishList.filter(f => f.id !== gameId)
}