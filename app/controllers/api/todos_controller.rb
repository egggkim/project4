module API
  class TodosController < ApplicationController
    #protect_from_forgery with: :null_session
       
    respond_to :json

    def index
      render json: Todo.all
    end

    def show
      render json: Todo.find(params[:id])
    end

    def create      
      todo = Todo.new(todo_params)            

      if todo.save
        render json: todo, status: 201
      else
        render json: {errors: todo.errors}, status: 422
      end
    end

    def update
      todo = Todo.find(params[:id])
      if todo.update(todo_params)
        render json: todo, status: 200
      else
        render json: {errors: todo.errors}, status: 422
      end
    end

    def destroy
      todo = Todo.find(params[:id])
      todo.destroy
      head 204
    end

    private
      def todo_params
        params.require(:todo).permit(:task, :done, :todo_list_id)
      end
  end
end