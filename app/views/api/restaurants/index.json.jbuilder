@restaurants.each do |restaurant|
  json.set! restaurant.id do
    json.partial! 'api/restaurants/restaurant', restaurant: restaurant
    # json.extract specific information for index page
    json.extract! restaurant, :reservations, :reviews, :cuisines, :tags, :photos, :location
    # json.payment_option_ids @restaurant.payment_options.pluck(:id)
    # json.reviews restaurant.reviews do |review|
    #   json.set! review.id do
    #     debugger;
    #     json.partial! 'api/reviews/review', review: review
    #   end
    # end
  end
end
