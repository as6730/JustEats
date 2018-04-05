json.restaurant do
  json.partial! 'api/restaurants/restaurant', restaurant: @restaurant
  # will only execute what comes after the &. if it is not nil
  json.website_link @restaurant.website_link&.asset_path(@restaurant.website_link)

  # external ids 
  json.review_ids @restaurant.reviews.pluck(:id)
  json.reservation_ids @restaurant.reservations.pluck(:id)
end

json.reviews do
  @restaurant.reviews.each do |review|
    json.set! review.id do
      json.partial! 'api/reviews/review', review: review
    end
  end
end

json.reservations do
  @restaurant.reservations.each do |reservation|
    json.set! reservation.id do
      json.partial! 'api/reservations/reservation', reservation: reservation
    end
  end
end
