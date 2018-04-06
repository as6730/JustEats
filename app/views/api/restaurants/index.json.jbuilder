@restaurants.each do |restaurant|
  json.set! restaurant.id do
    # json.extract specific information for index page
    json.extract!
    json.partial! 'api/restaurants/restaurant', restaurant: restaurant

  end
end
