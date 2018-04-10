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
    if params.include?(:id)
      @user = User.find(params[:id])
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end
  
  private

  def user_params
    params.require(:user).permit(:username, :firstname, :lastname, :email, :password)
  end
end
