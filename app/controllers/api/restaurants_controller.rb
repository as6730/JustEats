class Api::RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.all
  end

  def create
    # the post request body will be a json string of a restaurant object
    # req = JSON.parse(request.body.read)
    @restaurant = Restaurant.new(JSON.parse(request.body.read))

    if @restaurant.save
      render :show
    else
      render json: @restaurant.errors.full_messages, status: 422
    end
  end

  def update
    @restaurant = Restaurant.find(params[:id])

    if @restaurant.update_attributes(restaurant_params)
      render :show
    else
      render json: @restaurant.errors.full_messages, status: 404
    end
  end

  def show
    # preload associated tables so that there aren't multiple queries
    @restaurant = Restaurant.includes(:reviews, :photos, :cuisines, :reservations, :payment_options, :favorites, :tags).find(params[:id])
  end

  def destroy
    restaurant = Restaurant.find(params[:id])
    restaurant.destroy!
    render json: "{\"status\" : \"success\"}"
  end

  private

  def restaurant_params
    params.require(:restaurant).permit(:name, :description, :phone_number, :website_link, :hours, :dining_style, :dress_code, :executive_chef, :price_range, :private_party_facilities, :private_party_contact)
  end
end
