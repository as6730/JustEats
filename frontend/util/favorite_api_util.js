export const getUserFavorites = () => (
  $.ajax({
    method: "GET",
    url: `/api/getuserfavorites`,
  })
);

export const addFavorite = (restaurantId) => (
  $.ajax({
    method: "POST",
    url: `/api/users/addfavorite/${restaurantId}`,
  })
);

export const removeFavorite = (restaurantId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/users/removefavorite/${restaurantId}`,
  })
);
