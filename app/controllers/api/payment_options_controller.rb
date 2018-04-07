class Api::PaymentOptionsController < ApplicationController
  def index
    @payment_options = PaymentOption.all
  end

  def create
    @payment_option = PaymentOption.new(JSON.parse(request.body.read))

    if @payment_option.save
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
