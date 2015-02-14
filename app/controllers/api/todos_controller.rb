module API
  class TodosController < ApplicationController
    # respond_to :json

    def index      
      render json: Todo.all
    end

    def create
      todo = Todo.new(todo_params)  
      todo.save
      render json: todo, status: 201
    end

    def destroy
      todo = Todo.find(params[:id])
      todo.destroy
      head 204
    end

    private
    def todo_params
      params.require(:todo).permit(:task, :done)
    end
  end
end