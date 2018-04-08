json.extract! menu, :id, :name

json.menu menu
json.menu_sections menu.menu_sections do |menu_section|
  json.set! menu_section.id do
    json.partial! 'api/menu_sections/menu_section', menu_section: menu_section
    json.dishes menu_section.dishes do |dish|
      json.set! dish.id do
        json.partial! 'api/dishes/dish', dish: dish
      end
    end
  end
end
