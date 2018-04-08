@restaurants.each do |restaurant|
  json.set! restaurant.id do
    json.partial! 'api/restaurants/restaurant', restaurant: restaurant
    # json.extract specific information for index page
    json.extract! restaurant, :reservations, :reviews, :cuisines, :favorites, :tags, :photos, :location
    # json.payment_option_ids @restaurant.payment_options.pluck(:id)
  end
end
