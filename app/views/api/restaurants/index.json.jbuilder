@restaurants.each do |restaurant|
  json.set! restaurant.id do
    json.partial! 'api/restaurants/restaurant', restaurant: restaurant
    # json.extract specific information for index page
    json.extract! restaurant, :reservations, :reviews, :payment_options, :cuisines, :favorites, :restaurant_tags, :photos, :location 
  end
end
