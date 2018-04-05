# == Schema Information
#
# Table name: photos
#
#  id            :integer          not null, primary key
#  url           :string           not null
#  restaurant_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Photo < ApplicationRecord
  validates :url, presence: true

  belongs_to :restaurant,
    class_name: :Restaurant,
    foreign_key: :restaurant_id,
    primary_key: :id
end
