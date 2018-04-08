class Api::ReviewsController < ApplicationController
  # before_action :require_user_login!

  def index
    @reviews = Review.where(restaurant_id: params[:restaurant_id])
  end

  def new
    @review = Review.new
  end

  def create
    @review = Review.new(JSON.parse(request.body.read))
    # @review.username = current_user.username
    @review.restaurant_id = params[:restaurant_id]

    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find(params[:id])

    if @review.update_attributes(JSON.parse(request.body.read))
      render :show
    else
      render json: @review.errors.full_messages, status: 404
    end
  end

  def edit
    render :show
  end

  def show
    @review = Review.find(params[:id])
  end

  def destroy
    review = Review.find(params[:id])
    review.destroy!
    render json: "{\"status\" : \"success\"}"
  end
end
