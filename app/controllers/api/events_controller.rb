module API
  class EventsController < ApplicationController
    #protect_from_forgery with: :null_session
       
    respond_to :json

    def index
      render json: Event.all
    end

    def show
      render json: Event.find(params[:id])
    end

    def create      
      event = Event.new(event_paramss)            

      if event.save
        render json: event, status: 201
      else
        render json: { errors: event.errors }, status: 422
      end
    end

    def update
      event = Event.find(params[:id])
      if event.update(event_paramss)
        render json: event, status: 200
      else
        render json: { errors: event.errors }, status: 422
      end
    end

    def destroy
      event = Event.find(params[:id])
      event.destroy
      head 204
    end

    private
      def event_paramss
        params.require(:event).permit(:address, :date, :start_time, :end_time)
      end
  end
end