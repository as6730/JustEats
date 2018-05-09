class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render :index
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login_user(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.where(:id=>current_user.id).first
    render :show
  end

  def get_favorites
    if current_user
      favorites = RestaurantFavorite.where(:user_id=>current_user.id)

      favorite_restaurants = {}
      favorites.each do |favorite|
        restaurant = Restaurant.where(:id=>favorite.restaurant_id).first
        favorite_restaurants[restaurant.id] = restaurant unless restaurant.nil?
      end

      render json: favorite_restaurants
    else
      render json: {}
    end
  end

  def add_favorite
    if current_user
      @favorite = RestaurantFavorite.where(:user_id=>current_user.id).where(:restaurant_id=>params[:restaurantId]).first

      if @favorite.nil?
        @favorite = RestaurantFavorite.new()
        @favorite.restaurant_id = params[:restaurantId]
        @favorite.user_id = current_user.id
        @favorite.save!
      end

      render json: Restaurant.where(:id=>@favorite.restaurant_id).first
    else
      render json: {}
    end
  end

  def remove_favorite
    if current_user
      @favorite = RestaurantFavorite.where(:user_id=>current_user.id).where(:restaurant_id=>params[:restaurantId]).first

      if @favorite
        @favorite.destroy!
      end

      render json: @favorite.restaurant_id
    else
      render json: {}
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :firstname, :lastname, :email, :password)
  end
end
