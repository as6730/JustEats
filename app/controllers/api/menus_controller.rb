class Api::MenusController < ApplicationController
  def index
    @menus = Menu.all
  end

  def create
    @menu = Menu.new(JSON.parse(request.body.read))
    @menu.restaurant_id = params[:restaurant_id]

    if @menu.save
      render :show
    else
      render json: @menu.errors.full_messages, status: 422
    end
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
    params.require(:menu).permit(:url)
  end
end
