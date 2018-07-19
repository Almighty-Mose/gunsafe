Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
resources :user
resources :firearms # We will nest accessories under firearms.


root 'welcome#home'

end
