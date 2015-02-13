class User < ActiveRecord::Base
  has_many :clients
  has_many :events

  validates :name, presence: :true
  validates :email, presence: :true, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }, uniqueness: { case_sensitive: false }
  before_save :downcase_email
  has_secure_password

  private 
  def downcase_email
    self.email = email.downcase
  end
end
