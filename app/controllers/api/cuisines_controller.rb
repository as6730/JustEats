class Api::CuisinesController < ApplicationController
  def index
    @cuisines = Cuisine.all
  end

  def create
    @cuisine = Cuisine.new(JSON.parse(request.body.read))

    if @cuisine.save
      render :show
    else
      render json: @cuisine.errors.full_messages, status: 422
    end
  end

  def update
    @cuisine = Cuisine.find(params[:id])

    if @cuisine.update_attributes(cuisine_params)
      render :show
    else
      render json: @cuisine.errors.full_messages, status: 404
    end
  end

  def show
    @cuisine = Cuisine.find(params[:id])
  end

  def destroy
    cuisine = Cuisine.find(params[:id])
    cuisine.destroy!
    render json: "{\"status\" : \"success\"}"
  end

  private

  def cuisine_params
    params.require(:cuisine).permit(:name)
  end
end
