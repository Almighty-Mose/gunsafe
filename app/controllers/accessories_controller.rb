class AccessoriesController < ApplicationController
  before_action :set_accessory, except: [:new, :create, :index]

  def index

  end

  def new

  end

  def create

  end

  def show

  end

  def edit

  end

  def update

  end

  def destroy

  end

  private

  def set_accessory
    @accessory = Accessory.find(params[:id])
  end
end
