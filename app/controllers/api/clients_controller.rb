module API
  class ClientsController < ApplicationController
    #protect_from_forgery with: :null_session
       
    respond_to :json

    def index
      render json: Client.all
    end

    def show
      render json: Client.find(params[:id])
    end

    def create      
      client = Client.new(client_params)
      client.user = current_user
      if client.save
        render json: client, status: 201
      else
        render json: { errors: client.errors }, status: 422
      end
    end

    def update
      client = Client.find(params[:id])
      if client.update(client_params)
        render json: client, status: 200
      else
        render json: { errors: client.errors }, status: 422
      end
    end

    def destroy
      client = Client.find(params[:id])
      client.destroy
      head 204
    end

    private
      def client_params
        params.require(:client).permit(:first_name, :last_name, :email, :phone)
      end
  end
end