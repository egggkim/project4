class Event < ActiveRecord::Base
  belongs_to :client
  mount_uploader :image, PhotoUploader
end
