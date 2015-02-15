class Event < ActiveRecord::Base
  belongs_to :user
  belongs_to :client
  has_many :todos

  validates :address, presence: :true, length: { maximum: 30 }
  validates :date, presence: :true
  validates :start_time, presence: :true
  validates :end_time, presence: :true

  # uploaders/ for event photo album
  mount_uploader :image, PhotoUploader
end
