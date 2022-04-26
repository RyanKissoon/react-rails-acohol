class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]
  def index
    @users = User.all.order(name: :asc)
    render json: @users    
  end
  
  def show
    if @user
      render json: @user
    else 
      render json: @user.errors
    end
  end

  def new
    @user = User.new
  end
  def edit
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user
    else
      render json: @user.errors
    end
      
  end

  def update
    
  end

  def destroy
    @user.destroy
    render json: {notice: 'User was succesfully removed'}
    
  end
  
  private
    def set_user
      @user = User.find(params[:id])
    end
    def user_params
      params.permit(:name, :password)
    end
end
