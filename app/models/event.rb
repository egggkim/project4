class Event < ActiveRecord::Base

  mount_uploader :image, PhotoUploader
  
end
