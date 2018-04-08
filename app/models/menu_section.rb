# == Schema Information
#
# Table name: menu_sections
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :string
#  menu_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class MenuSection < ApplicationRecord
  validates :title, presence: true

  belongs_to :menu
  has_many :mini_menu_sections
end
