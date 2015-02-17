class Client < ActiveRecord::Base
  belongs_to :user
  has_many :events

  # client attribute validations
  validates :first_name, presence: :true, length: { maximum: 30 }
  validates :last_name, presence: :true, length: { maximum: 30 }
  validates :email, presence: :true, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }, length: { maximum: 100 }
  validates :phone, presence: :true, format: { with: /\A\d{3}-\d{3}-\d{4}\z/ }
end
