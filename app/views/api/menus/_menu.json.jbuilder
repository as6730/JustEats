json.extract! menu, :id, :last_update

json.menu menu
json.menu_sections menu.menu_sections do |menu_section|
  json.set! menu_section.id do
    json.partial! 'api/menu_sections/menu_section', menu_section: menu_section
    json.mini_menu_section menu_section.mini_menu_sections do |mini_menu_section|
      json.set! mini_menu_section.id do
        json.partial! 'api/mini_menu_sections/mini_menu_section', mini_menu_section: mini_menu_section
        json.dishes mini_menu_section.dishes do |dish|
          json.set! dish.id do
            json.partial! 'api/dishes/dish', dish: dish
          end
        end
      end
    end
  end
end
