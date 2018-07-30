class UsersController < ApplicationController
  before_action :set_user, except: [:new, :create]
  before_action :require_login, except: [:new, :create]

  def new
    @user = User.new
  end

  def create
    @user = User.create(user_params)
    if @user.save
      session[:user_id] = @user.id

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
    @user.update(user_params)

    redirect_to @user
  end

  def destroy
    @user.destroy

    redirect_to root_path
  end

  private
    def user_params
      params.require(:user).permit(:username, :email, :password, :password_confirmation)
    end

    def set_user
      @user = User.find(params[:id])
      if @user != current_user
        redirect_to current_user
      end
    end
end
