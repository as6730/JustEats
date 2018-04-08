class Api::TagsController < ApplicationController
  def index
    @tags = Tag.all
  end

  def create
    @request = JSON.parse(request.body.read)
    @tag = Tag.where(:name => @request["name"])[0]
    
    if @tag.nil?
      @tag = Tag.new(@request)
      @tag.save!
    end

    @restaurant_tag = RestaurantTag.new(tag_id: @tag.id, restaurant_id: params[:restaurant_id])
    if @restaurant_tag.save
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def update
    @tag = Tag.find(params[:id])

    if @tag.update_attributes(tag_params)
      render :show
    else
      render json: @tag.errors.full_messages, status: 404
    end
  end

  def show
    @tag = Tag.find(params[:id])
  end

  def destroy
    tag = Tag.find(params[:id])
    tag.destroy!
    render json: "{\"status\" : \"success\"}"
  end

  private

  def tag_params
    params.require(:tag).permit(:name)
  end
end
