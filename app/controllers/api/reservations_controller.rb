class Api::ReservationsController < ApplicationController
  before_action :require_user_login!

  def index
    @reservation = Reservation.all
  end

  def new
    @reservation = Reservation.new
  end

  def create
    @reservation = Reservation.new(reservation_params)
    @reservation.user_id = current_user.id

    if @reservation.save!
      render :show
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  def update
    @reservation = Reservation.find(params[:id])
    @reservation.user_id = params[:user_id]
    @reservation.restaurant_id = params[:restaurant_id]
    
    if @reservation.update_attributes(reservation_params)
      render :show
    else
      render json: @reservation.errors.full_messages, status: 404
    end
  end

  def edit
    render :show
  end

  def show
    @reservation = Reservation.find(params[:id])
  end

  def destroy
    reservation = Reservation.find(params[:id])
    reservation.destroy!
    render json: :show
  end

  private

  def reservation_params
    params.require(:reservation).permit(:party_size, :date, :points)
  end
end
