class Api::ReviewsController < ApplicationController
  before_action :require_user_login!

  def index
    @review = Review.all
  end

  def new
    @review = Review.new
  end

  def create
    @review = Review.new(review_params)
    @review.restaurant_id = params[:restaurant_id]

    if @review.save!
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find(params[:id])

    if @review.update_attributes(review_params)
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
    render json: :show
  end

  private

  def review_params
    params.require(:review).permit(:username, :body, :rating)
  end
end
