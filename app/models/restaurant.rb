# == Schema Information
#
# Table name: restaurants
#
#  id                       :integer          not null, primary key
#  name                     :string           not null
#  description              :string           not null
#  phone_number             :string
#  website_link             :string
#  hours                    :string
#  dining_style             :string
#  dress_code               :string
#  executive_chef           :string
#  price_range              :string
#  private_party_facilities :string
#  private_party_contact    :string
#  created_at               :datetime         not null
#  updated_at               :datetime         not null
#

class Restaurant < ApplicationRecord
  validates :name, :description, presence: true, uniqueness: true

  has_many :restaurant_cuisines,
    class_name: :RestaurantCuisine,
    foreign_key: :restaurant_id,
    primary_key: :id

  has_many :restaurant_payments,
    class_name: :RestaurantPayment,
    foreign_key: :restaurant_id,
    primary_key: :id

  has_many :payment_options,
    through: :restaurant_payments,
    source: :payment_option

  has_many :cuisines,
    through: :restaurant_cuisines,
    source: :cuisine

  has_many :favorites,
    class_name: :RestaurantFavorite,
    foreign_key: :restaurant_id,
    primary_key: :id

  has_many :reservations,
    class_name: :Reservation,
    foreign_key: :restaurant_id,
    primary_key: :id

  has_many :users,
    through: :favorites,
    source: :user

  has_many :restaurant_tags,
    class_name: :RestaurantTag,
    foreign_key: :restaurant_id,
    primary_key: :id

  has_many :tags,
    through: :restaurant_tags,
    source: :tag

  has_many :reviews,
    class_name: :Review,
    foreign_key: :restaurant_id,
    primary_key: :id

  has_many :photos,
    class_name: :Photo,
    foreign_key: :restaurant_id,
    primary_key: :id

  has_one :menu,
    class_name: :Menu,
    foreign_key: :restaurant_id,
    primary_key: :id

  has_many :menu_sections,
    through: :menu,
    source: :menu_sections

  has_many :dishes,
    through: :menu_sections,
    source: :dishes

  has_one :location,
    class_name: :Location,
    foreign_key: :restaurant_id,
    primary_key: :id
end
