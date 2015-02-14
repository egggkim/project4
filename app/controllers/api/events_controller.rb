module API
  class EventsController < ApplicationController
    protect_from_forgery with: :null_session
    respond_to :json

    def index
      events = Event.all
      respond_with events
    end

    def show
      event = Event.find(params[:id])
      respond_with event
    end

  end
end