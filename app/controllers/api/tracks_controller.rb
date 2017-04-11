class Api::TracksController < ApplicationController
  def index
    @album = Album.find(params[:album_id])
    @tracks = @album.tracks
    render :index
  end

  def show
    @track = Track.find(params[:track_id])
    render :show
  end
end
