# == Schema Information
#
# Table name: locations
#
#  id                 :integer          not null, primary key
#  latitude           :float            not null
#  longitude          :float            not null
#  address            :string
#  neighborhood       :string
#  cross_street       :string
#  parking_details    :string
#  location_image_url :string
#  restaurant_id      :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  country            :string           not null
#  city               :string           not null
#

require 'test_helper'

class LocationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
