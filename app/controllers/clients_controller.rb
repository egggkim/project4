class ClientsController < ApplicationController
  def index
    @clients = Client.all
  end

  def new
    @client = Client.new
  end

  def create
    @client = Client.create(client_params)
    if @client.save
      redirect_to root_path
    else
      render :new
    end
  end

  def edit
    @client = Client.find(params[:id])
  end

  def update
    @client = Client.find(params[:id])
    if @client.update_attributes(client_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  def show
    @client = Client.find(params[:id])
  end

  def destroy
    @client = Client.find(params[:id])
    if @user.destroy
      redirect_to root_path
    else
      redirect_to root_path
    end
  end

  private
  def client_params
    params.require(:client).permit(:first_name, :last_name, :email, :phone)
  end
end
