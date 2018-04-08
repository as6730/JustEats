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

  has_many :restaurant_tags
  has_many :tags, through: :restaurant_tags

  has_many :restaurant_cuisines
  has_many :cuisines, through: :restaurant_cuisines

  has_many :restaurant_payments,
    class_name: :RestaurantPayment,
    foreign_key: :restaurant_id,
    primary_key: :id

  has_many :payment_options,
    through: :restaurant_payments,
    source: :payment_option

  has_many :favorites,
    class_name: :RestaurantFavorite,
    foreign_key: :restaurant_id,
    primary_key: :id

  has_many :reservations

  has_many :users,
    through: :favorites,
    source: :user

  has_many :reviews
  has_many :photos

  has_one :menu
  has_many :menu_sections, through: :menu
  has_many :dishes, through: :menu_sections
  has_one :location
end
