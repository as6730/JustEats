json.menu_sections do
  @menu.menu_sections.each do |menu_section|
    json.set! menu_section.id do
      json.partial! 'api/menu_sections/menu_section', menu_section: menu_section
    end
  end
end

json.dishes do
  @menu.dishes.each do |dish|
    json.set! dish.id do
      json.partial! 'api/dishs/dish', dish: dish
    end
  end
end
