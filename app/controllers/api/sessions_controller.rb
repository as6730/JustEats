class Api::SessionsController < ApplicationController
  # def show
  #   @user = current_user
  #   render json: @user
  # end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password],
    )

    if @user
      login_user(@user)
      render "api/users/show"
    else
      render json: ['Invalid username/password combination'], status: 401
    end
  end

  def destroy
    @user = current_user

    if @user
      logout_user
      render json: { message: 'Logout successful'}
    else
      render json: ['User is not signed in'], status: 404
    end
  end
end
