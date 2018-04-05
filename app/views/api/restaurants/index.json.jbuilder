@restaurants.each do |restaurant|
  json.set! restaurant.id do
    json.partial! 'api/restaurants/restaurant', restaurant: restaurant
    # will only execute what comes after the &. if it is not nil
    json.website_link restaurant.website_link&.asset_path(restaurant.website_link)
  end
end
