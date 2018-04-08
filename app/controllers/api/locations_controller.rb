class Api::LocationsController < ApplicationController
  def index
    @locations = Location.all
  end

  def create
    @location = Location.new(JSON.parse(request.body.read))
    @location.restaurant_id = params[:restaurant_id]
    
    if @location.save
      render :show
    else
      render json: @location.errors.full_messages, status: 422
    end
  end

  def update
    @location = Location.find(params[:id])

    if @location.update_attributes(location_params)
      render :show
    else
      render json: @location.errors.full_messages, status: 404
    end
  end

  def show
    @location = Location.find(params[:id])
  end

  def destroy
    location = Location.find(params[:id])
    location.destroy!
    render json: "{\"status\" : \"success\"}"
  end

  private

  def location_params
    params.require(:location).permit(:latitude, :longitude)
  end
end
