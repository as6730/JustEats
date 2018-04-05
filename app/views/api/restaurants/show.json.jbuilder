json.restaurant do
  json.partial! 'api/restaurants/restaurant', restaurant: restaurant
  # will only execute what comes after the &. if it is not nil
  json.website_link @restaurant.website_link&.asset_path(@restaurant.website_link)
  # what should this review id point to?
  json.review_ids @restaurant.reviews.pluck(:id)
end

json.reviews do
  @restaurant.reviews.each do |review|
    json.set! review.id do
      # this will need to go to the partial for the review
      json.partial! 'api/reviews/review', review: review
    end
  end
end
