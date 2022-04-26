class Api::V1::CountriesController < ApplicationController
  before_action :set_country, only: [:show, :edit, :update, :destroy]

  #GET /drinks
  def index
    @countries = Country.all.order(brand: :asc)
    render json: @drinks
  end
  
  #GET /drinks/1
  def show
    if @country
      render json: @country
    else
      render json: @country.errors
    end
  end
  
  #GET /drinks/new
  def new
    @country = Country.new
  end
  #GET /drinks/1/edit
  def edit
  end
  #POST /drinks
  def create
    @country = Country.new(country_params)
    if @country.save
      render json: @country
    else
      render json: @country.errors
    end
  end
  #PATCH/PUT /drinks/1
  def update
  end
  #DELETE /drinks/1
  def destroy
    @country.destroy
    render json: {notice: 'Drink was succesfully removed'}
  end
  private
   def set_country
     @country = Country.find(params[:id])
   end
   def country_params
     params.permit(:brand, :style, :country, :quantity)
   end
end
