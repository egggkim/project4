class EventsController < ApplicationController
  def index   
    @events = Event.all 
  end

  def new   
    @event = Event.new 
  end

  def create   
    @event = Event.new(event_params) 
    if @event.save
      redirect_to events_path
    else
      render :new
    end
  end

  def edit
    @event = Event.find(params[:id])
  end

  def update
    @event = Event.find(params[:id])
    if @event.update_attributes(event_params)
      redirect_to events_path
    else 
      render :edit
    end
  end

  def show
    @event = Event.find(params[:id])
  end

  def destroy
    @event = Event.find(params[:id])
    if @event.destroy
      redirect_to root_path
    else
      redirect_to events_path(@event)
    end
  end

  private 
  def event_params
    params.require(:event).permit(:title, :address, :date, :start_time, :end_time)
  end
end
