class Api::UsersController < ApplicationController
  def index
      @users = User.all
      render :index
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login_user(@user)
      render "/api/users"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  # def show
  #   if params.include?(:id)
  #     @user = User.find(params[:id])
  #     render "/api/users/{@user}"
  #   else
  #
  #   end
  # end
  #
  # def edit
  #   @user = User.find(params[:id])
  #
  #   if @user.save
  #
  #   else
  #
  #   end
  # end
  #
  # def update
  #   @user = User.find_by(params[:id])
  #
  #   if @user.update_attributes(user_params)
  #     render "/api/users/{@user}"
  #   else
  #     render json: @user.errors.full_messages, status: 422
  #   end
  # end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
