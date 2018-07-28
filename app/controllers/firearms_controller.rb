class FirearmsController < ApplicationController
  before_action :require_login

  def index
    if @current_user.firearms.count == 0
      redirect_to new_firearm_path
    end
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

end
