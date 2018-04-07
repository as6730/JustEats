class Api::ReservationsController < ApplicationController
  before_action :require_user_login!

  def index
    @reservations = Reservation.all
  end

  def new
    @reservation = Reservation.new
  end

  def create
    @reservation = Reservation.new(JSON.parse(request.body.read))
    @reservation.user_id = current_user.id
    @reservation.restaurant_id = params[:restaurant_id]

    if @reservation.save
      render :show
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  def update
    @reservation = current_user.reservations.find(params[:id])

    if @reservation.update_attributes(JSON.parse(request.body.read))
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
    render json: "{\"status\" : \"success\"}"
  end

  private

  def reservation_params
    params.require(:reservation).permit(:party_size, :date, :points)
  end
end
