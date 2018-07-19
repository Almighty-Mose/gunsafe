Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
resources :user
resources :firearms # We will nest accessories under firearms.

# get '/login', => 'sessions#login'
# post '/login', => 'sessions#login'
# get '/signup', => 'sessions#signup'


root 'welcome#home'

end
