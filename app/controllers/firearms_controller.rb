require 'pry'
class FirearmsController < ApplicationController
  before_action :require_login
  before_action :set_firearm, except: [:index, :new, :create]

  def index
    if @current_user.firearms.count == 0
      redirect_to new_firearm_path
    end
    
    if !params[:category].blank?
      @firearms = @current_user.firearms.category(params[:category])
    else
      @firearms = @current_user.firearms
    end
  end

  def new
    @firearm = Firearm.new
  end

  def create
    @firearm = current_user.firearms.build(firearm_params)
    if @firearm.save
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
    @firearm.update(firearm_params)

    redirect_to @firearm
  end

  def destroy
    @firearm.delete

    redirect_to firearms_path
  end

  private

    def firearm_params
      params.require(:firearm).permit(:make, :model, :caliber, :category, :serial_number, :price, :purchase_date, accessory_ids:[])
    end

    def set_firearm
      @firearm = Firearm.find(params[:id])
      if @firearm.user != current_user
        redirect_to firearms_path
      end 
    end
end
