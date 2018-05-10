export const fetchRestaurants = (query) => {
  return $.ajax({
    method: "GET",
    url: `/api/restaurants?query=${query}`
  });
}

export const fetchRestaurant = id =>
  $.ajax({
    method: "GET",
    url: `/api/restaurants/${id}`
  });

export const createRestaurant = restaurant =>
  $.ajax({
    url: "/api/restaurants",
    method: "POST",
    data: { restaurant }
  });

export const updateRestaurant = restaurant =>
  $.ajax({
    url: `/api/restaurants/${restaurant.id}`,
    method: "PATCH",
    data: { restaurant }
  });

export const deleteRestaurant = id =>
  $.ajax({
    url: `/api/restaurants/${id}`,
    method: "DELETE"
  });
