class RestaurantPaymentOption < ApplicationRecord

  belongs_to :restaurant,
    class_name: :Restaurant,
    foreign_key: :restaurant_id,
    primary_key: :id

  belongs_to :cuisine,
    class_name: :Cuisine,
    foreign_key: :payment_option_id,
    primary_key: :id
end
