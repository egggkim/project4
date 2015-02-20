class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id.to_s
      redirect_to root_path
    else
      flash[:notice] = "Error Signing up. Please try again."
      render :new
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      redirect_to users_path
    else 
      render :edit
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def destroy
    
    @user = User.find(params[:id])
    if @user.destroy
      redirect_to root_path
    else
      redirect_to users_path(@user)
    end
  end

  private 
  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
