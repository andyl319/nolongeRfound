class Api::TracksController < ApplicationController
  def index
    @tracks = Track.all
    render :index
  end

  def show
    @track = Track.find(params[:track_id])
    render :show
  end
end
