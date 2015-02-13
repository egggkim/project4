require 'rails_helper'

RSpec.describe Event, :type => :model do
  it "has a valid factory" do
    expect(FactoryGirl.build(:event)).to be_valid
  end

  # ============== event attribute validation tests ==============
  it "has an address" do
    event = FactoryGirl.build(:event, :address => nil)
    expect(event).to respond_to(:address)
    expect(event).to be_invalid
    expect{event.save!}.to raise_error(ActiveRecord::RecordInvalid)
  end

  it "has a date" do
    event = FactoryGirl.build(:event, :date => nil)
    expect(event).to respond_to(:date)
    expect(event).to be_invalid
    expect{event.save!}.to raise_error(ActiveRecord::RecordInvalid)
  end

  it "has a start time" do
    event = FactoryGirl.build(:event, :start_time => nil)
    expect(event).to respond_to(:start_time)
    expect(event).to be_invalid
    expect{event.save!}.to raise_error(ActiveRecord::RecordInvalid)
  end

  it "has an end time" do
    event = FactoryGirl.build(:event, :end_time => nil)
    expect(event).to respond_to(:end_time)
    expect(event).to be_invalid
    expect{event.save!}.to raise_error(ActiveRecord::RecordInvalid)
  end

end
