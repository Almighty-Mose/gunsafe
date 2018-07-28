class FirearmsController < ApplicationController
  before_action :require_login
  before_action :set_firearm, except: [:index, :new, :create]

  def index
    if @current_user.firearms.count == 0
      redirect_to new_firearm_path
    end
  end

  def new
    @firearm = Firearm.new
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

    def set_firearm
      @firearm = Firearm.find(params[:id])
    end
end
