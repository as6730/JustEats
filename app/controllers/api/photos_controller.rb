class Api::PhotosController < ApplicationController
  def index
    @photos = Photo.all
  end

  def create
    @photo = Photo.new(JSON.parse(request.body.read))
    @photo.restaurant_id = params[:restaurant_id]

    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def update
    @photo = Photo.find(params[:id])

    if @photo.update_attributes(photo_params)
      render :show
    else
      render json: @photo.errors.full_messages, status: 404
    end
  end

  def show
    @photo = Photo.find(params[:id])
  end

  def destroy
    photo = Photo.find(params[:id])
    photo.destroy!
    render json: "{\"status\" : \"success\"}"
  end

  private

  def photo_params
    params.require(:photo).permit(:url)
  end
end
