# == Schema Information
#
# Table name: reviews
#
#  id            :integer          not null, primary key
#  username      :string           not null
#  body          :string
#  rating        :integer          not null
#  restaurant_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  date_created  :string
#

class Review < ApplicationRecord
  validates :username, :rating, presence: true
  validates_inclusion_of :rating, :in => (0.0..5.0)

  belongs_to :restaurant
end
