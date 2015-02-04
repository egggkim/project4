FactoryGirl.define do
  factory :user do
    name "Test User"
    email "test@email.com"
    password "password"
    password_digest "passworddigest"
  end
end
