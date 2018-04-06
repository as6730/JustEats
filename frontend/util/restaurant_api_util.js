export const fetchRestaurant = id =>
  $.ajax({
    method: "GET",
    url: `/api/restaurants/${id}`
  });
