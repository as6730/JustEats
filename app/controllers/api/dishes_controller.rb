class Api::DishesController < ApplicationController
  def create
    @dish = Dish.new(JSON.parse(request.body.read))
    @dish.menu_section_id = params[:menu_section_id]

    if @dish.save
      render :show
    else
      render json: @dish.errors.full_messages, status: 422
    end
  end

  private

  def dish_section_params
    params.require(:dish).permit(:name, :price, :description)
  end
end
