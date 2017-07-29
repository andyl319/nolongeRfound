class Api::EntourageController < ApplicationController
  def index
    @entourage = Entourage.all
    render :index
  end

  def show
    @entourage = Entourage.find(params[:id])
    render :show
  end

end
