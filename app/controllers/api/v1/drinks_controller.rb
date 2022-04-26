class Api::V1::DrinksController < ApplicationController
  before_action :set_drink, only: [:show, :edit, :update, :destroy]

  #GET /drinks
  def index
    @drinks = Drink.all.order(brand: :asc)
    render json: @drinks
  end
  
  #GET /drinks/1
  def show
    if @drink
      render json: @drink
    else
      render json: @drink.errors
    end
  end
  
  #GET /drinks/new
  def new
    @drink = Drink.new
  end
  #GET /drinks/1/edit
  def edit
  end
  #POST /drinks
  def create
    @drink = Drink.new(drink_params)
    if @drink.save
      render json: @drink
    else
      render json: @drink.errors
    end
  end
  #PATCH/PUT /drinks/1
  def update
  end
  #DELETE /drinks/1
  def destroy
    @drink.destroy
    render json: {notice: 'Drink was succesfully removed'}
  end
  private
   def set_drink
     @drink = Drink.find(params[:id])
   end
   def drink_params
     params.permit(:brand, :style, :country, :quantity, :description)
   end
end
