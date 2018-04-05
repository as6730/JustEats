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

require 'test_helper'

class RestaurantTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
