json.restaurant do
  json.partial! 'api/restaurants/restaurant', restaurant: @restaurant
  # will only execute what comes after the &. if it is not nil
  # json.website_link @restaurant.website_link&.asset_path(@restaurant.website_link)

  # external ids
  # json.review_ids @restaurant.reviews.pluck(:id)
  # json.reservation_ids @restaurant.reservations.pluck(:id)
  # json.photo_ids @restaurant.photos.pluck(:id)
  # json.favorite_ids @restaurant.favorites.pluck(:id)
  # json.tag_ids @restaurant.tags
  # json.payment_option_ids @restaurant.payment_options.pluck(:id)

  # associations with no foreign key / has_one association
  json.location @restaurant.location
  # json.cuisines @restaurant.cuisines
  unless @restaurant.menu.nil?
    json.partial! 'api/menus/menu', menu: @restaurant.menu
  end

  # how do you pull has many through assocations?
  # json.menu_sections @restaurant.menu_sections
  # json.dishes @restaurant.dishes

  # load any extras into controller for faster querying

  # @restaurant.reviews.each do |review|
  #   json.set! review.id do
  #     # json.partial! 'api/reviews/review', review: review
  #     json.reviewId review.id
  #     json.username review.username
  #     json.body review.body
  #     json.rating review.rating
  #     json.date_created review.date_created
  #
  #   end
  # end
  
  json.reviews @restaurant.reviews.each do |review|
    json.partial! 'api/reviews/review', review: review
  end

  json.reservations @restaurant.reservations.each do |reservation|
    json.partial! 'api/reservations/reservation', reservation: reservation
  end

  json.photos @restaurant.photos.each do |photo|
    json.partial! 'api/photos/photo', photo: photo
  end

  json.cuisines @restaurant.cuisines.each do |cuisine|
    json.partial! 'api/cuisines/cuisine', cuisine: cuisine
  end

  json.payment_options @restaurant.payment_options.each do |payment_option|
    json.partial! 'api/payment_options/payment_option', payment_option: payment_option
  end

  json.tags @restaurant.tags.each do |tag|
    json.partial! 'api/tags/tag', tag: tag
  end
end
