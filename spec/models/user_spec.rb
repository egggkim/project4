require 'rails_helper'

RSpec.describe User, :type => :model do
  it "has a valid factory" do
    expect(FactoryGirl.build(:user)).to be_valid
  end

  # ============== users name validation tests ==============
  it "has a name" do
    user = FactoryGirl.build(:user, :name => nil)
    expect(user).to respond_to(:name)
    expect(user).to be_invalid
    expect{user.save!}.to raise_error(ActiveRecord::RecordInvalid)
  end

  it "invalid when a name has over 30 characters" do
    user = FactoryGirl.build(:user, :name => "j" * 31)
    expect(user).to be_invalid
  end

  # ============== users email validation tests ==============
  it "responds to an email address" do
    user = FactoryGirl.build(:user)
    expect(user).to respond_to(:email)
    expect(user.email).to_not be_nil
    expect(user.email).to_not be_empty
  end

  it "is invalid without an email address and will raise an error" do
    user = FactoryGirl.build(:user, :email => nil)
    expect(user).to be_invalid
    expect{user.save!}.to raise_error(ActiveRecord::RecordInvalid)
  end

  it "has a properly formatted email address" do
    expect(FactoryGirl.build(:user, email:"test.com")).to be_invalid
  end

  it "has an email address that is fewer than 100 characters" do
    user = FactoryGirl.build(:user, :email => "a" * 92 + "email.com")
    expect(user).to be_invalid
  end

  it "is invalid if a new user registers with an email that already exists in the database" do
    user1 = FactoryGirl.create(:user)
    user2 = FactoryGirl.build(:user)
    expect(user2).to be_invalid
  end

  it "is invalid if the email already exists in the database regardless of case sensitivity" do
    user1 = FactoryGirl.create(:user, email: "hello@email.com")
    user2 = FactoryGirl.build(:user, email: "Hello@email.com")
    expect(user2).to be_invalid
  end

# ============== users password validation tests ==============
  it "has a password" do
    user = FactoryGirl.build(:user)
    expect(user.password).to_not be_nil
    expect(user.password).to_not be_empty
  end

end