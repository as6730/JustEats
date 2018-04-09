class Api::MenusController < ApplicationController
  def index
    @menus = Menu.all
  end

  def create
    menuObj = JSON.parse(request.body.read)

    @menu = Menu.new()
    @menu.last_update = menuObj["last_update"].presence || "Placeholder"
    @menu.restaurant_id = params[:restaurant_id]
    @menu.save!

    menuObj["menu_sections"].each do |menu_section|
      curr_menu_section = MenuSection.new()
      curr_menu_section.title = menu_section["title"].presence || "Placeholder"
      curr_menu_section.menu_id = @menu.id
      curr_menu_section.save!

      menu_section["mini_sections"].each do |mini_menu_section|
        curr_mini_menu_section = MiniMenuSection.new()
        curr_mini_menu_section.menu_section_id = curr_menu_section.id
        curr_mini_menu_section.title = mini_menu_section["mini_section_title"].presence || "Placeholder"
        curr_mini_menu_section.save!

        mini_menu_section["items"].each do |dish|
          curr_dish = Dish.new()
          curr_dish.name = dish["title"].presence || "Placeholder"
          curr_dish.price = dish["price"].presence || "Placeholder"
          curr_dish.mini_menu_section_id = curr_mini_menu_section.id
          curr_dish.save!
        end
      end
    end

    render :show
  end

  def update
    @menu = Menu.find(params[:id])

    if @menu.update_attributes(menu_params)
      render :show
    else
      render json: @menu.errors.full_messages, status: 404
    end
  end

  def show
    @menu = Menu.find(params[:id])
  end

  def destroy
    menu = Menu.find(params[:id])
    menu.destroy!
    render json: "{\"status\" : \"success\"}"
  end

  private

  def menu_params
    params.require(:menu).permit(:link, :last_update)
  end
end
