# == Schema Information
#
# Table name: menu_sections
#
#  id          :integer          not null, primary key
#  title       :string
#  description :string
#  menu_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class MenuSection < ApplicationRecord
end
