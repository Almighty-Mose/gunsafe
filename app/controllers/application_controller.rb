class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?

  private

  def require_login
    unless logged_in?
      redirect_to root_path
    end
  end

  def logged_in?
    current_user != nil
  end

  def current_user
    @current_user ||= User.find_by(id: session[:user_id]) if session[:user_id]
  end

end
