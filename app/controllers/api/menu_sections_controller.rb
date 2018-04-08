class Api::MenuSectionsController < ApplicationController
  def create
    @menu_section = MenuSection.new(JSON.parse(request.body.read))
    @menu_section.menu_id = params[:menu_id]

    if @menu_section.save
      render :show
    else
      render json: @menu_section.errors.full_messages, status: 422
    end
  end

  private

  def menu_section_section_params
    params.require(:menu_section).permit(:title, :description)
  end
end
