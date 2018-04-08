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

  json.photos do
    @restaurant.photos.each do |photo|
      json.set! photo.id do
        json.partial! 'api/photos/photo', photo: photo
      end
    end
  end

  json.cuisines do
    @restaurant.cuisines.each do |cuisine|
      json.set! cuisine.id do
        json.partial! 'api/cuisines/cuisine', cuisine: cuisine
      end
    end
  end

  json.payment_options do
    @restaurant.payment_options.each do |payment_option|
      json.set! payment_option.id do
        json.partial! 'api/payment_options/payment_option', payment_option: payment_option
      end
    end
  end

  json.tags do
    @restaurant.tags.each do |tag|
      json.set! tag.id do
        json.partial! 'api/tags/tag', tag: tag
      end
    end
  end

  json.favorites do
    @restaurant.favorites.each do |favorite|
      json.set! favorite.id do
        json.partial! 'api/favorites/favorite', favorite: favorite
      end
    end
  end
end
