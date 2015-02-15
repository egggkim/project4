class User < ActiveRecord::Base
  has_many :clients
  has_many :events
  has_many :todos

  # user attribute validations
  validates :name, presence: :true, length: { maximum: 30 }
  validates :email, presence: :true, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }, length: { maximum: 100 }, uniqueness: { case_sensitive: false }
  before_save :downcase_email
  has_secure_password

  private 
  def downcase_email
    self.email = email.downcase
  end
end
