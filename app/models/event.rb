class Event < ActiveRecord::Base
  belongs_to :user
  belongs_to :client

  # uploaders/ for event photo album
  mount_uploader :image, PhotoUploader
end
