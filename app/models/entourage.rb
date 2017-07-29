class Entourage < ActiveRecord::Base

  validates :name, :pic_url, :bio, presence: true
end
