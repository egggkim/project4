require 'rails_helper'

RSpec.describe Client, :type => :model do
  it "has a valid factory for clients" do
    expect(FactoryGirl.build(:client)).to be_valid
  end

  # ============== clients name validation tests ==============
  it "has a first name" do
    client = FactoryGirl.build(:client, :first_name => nil)
    expect(client).to respond_to(:first_name)
    expect(client).to be_invalid
    expect{client.save!}.to raise_error(ActiveRecord::RecordInvalid)
  end

  it "invalid when a first name has over 30 characters" do
    client = FactoryGirl.build(:client)
    client.first_name = "j" * 31
    expect(client).to be_invalid
  end
  
  it "has a last name" do
    client = FactoryGirl.build(:client, :last_name => nil)
    expect(client).to respond_to(:last_name)
    expect(client).to be_invalid
    expect{client.save!}.to raise_error(ActiveRecord::RecordInvalid)
  end

  it "invalid when a last name has over 30 characters" do
    client = FactoryGirl.build(:client)
    client.last_name = "j" * 31
    expect(client).to be_invalid
  end

# ============== clients email validation tests ==============
  it "responds to an email address" do
    client = FactoryGirl.build(:client)
    expect(client).to respond_to(:email)
    expect(client.email).to_not be_nil
    expect(client.email).to_not be_empty
  end

  it "is invalid without an email address and will raise an error" do
    client = FactoryGirl.build(:client, :email => nil)
    expect(client).to be_invalid
    expect{client.save!}.to raise_error(ActiveRecord::RecordInvalid)
  end

  it "has a properly formatted email address" do
    expect(FactoryGirl.build(:client, email:"test.com")).to be_invalid
  end

  it "has an email address that is fewer than 100 characters" do
    client = FactoryGirl.build(:client, :email => "a" * 92 + "email.com")
    expect(client).to be_invalid
  end

  # ============== clients phone validation tests ==============
  it "has a phone number" do
    client = FactoryGirl.build(:client, :phone => nil)
    expect(client).to respond_to(:phone)
    expect(client).to be_invalid
    expect{client.save!}.to raise_error(ActiveRecord::RecordInvalid)
  end

  it "has a properly formatted phone number" do
    client = FactoryGirl.build(:client, :phone => "1234567890")
    expect(client).to be_invalid
  end

end
