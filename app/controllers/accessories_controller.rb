class AccessoriesController < ApplicationController
  before_action :set_accessory, except: [:new, :create, :index]

  def index

  end

  def new
    @accessory = Accessory.new
  end

  def create
    @accessory = current_user.accessories.build(accessory_params)
    if @accessory.save
      redirect_to firearms_path
    else
      render :new
    end
  end

  def show

  end

  def edit

  end

  def update
    @accessory.update(accessory_params)

    redirect_to @accessory
  end

  def destroy
    @accessory.delete

    redirect_to firearms_path
  end

  private

  def set_accessory
    @accessory = Accessory.find(params[:id])
  end

  def accessory_params
    params.require(:accessory).permit(:name, :category, :price, :purchase_date)
  end
end
