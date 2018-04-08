class Api::PaymentOptionsController < ApplicationController
  def index
    @payment_options = PaymentOption.all
  end

  def create
    @request = JSON.parse(request.body.read)
    @payment_option = PaymentOption.where(:name => @request["name"])[0]

    if @payment_option.nil?
      @payment_option = PaymentOption.new(@request)
      @payment_option.save!
    end

    @restaurant_payment_option = RestaurantPayment.new(payment_id: @payment_option.id, restaurant_id: params[:restaurant_id])
    if @restaurant_payment_option.save
      render :show
    else
      render json: @payment_option.errors.full_messages, status: 422
    end
  end

  def update
    @payment_option = PaymentOption.find(params[:id])

    if @payment_option.update_attributes(payment_option_params)
      render :show
    else
      render json: @payment_option.errors.full_messages, status: 404
    end
  end

  def show
    @payment_option = PaymentOption.find(params[:id])
  end

  def destroy
    payment_option = PaymentOption.find(params[:id])
    payment_option.destroy!
    render json: "{\"status\" : \"success\"}"
  end

  private

  def payment_option_params
    params.require(:payment_option).permit(:name)
  end
end
