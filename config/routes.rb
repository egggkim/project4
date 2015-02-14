Rails.application.routes.draw do

  root 'home#index'
  
  # single page app
  get '/home' => 'home#index' 

  # resource for users
  resources :users
  get '/signup' => 'users#new'

  # resources for sessions
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  delete '/logout' => 'sessions#destroy'

  match '*all' => 'application#handle_options', via: :options

  namespace :api, defaults: { format:"json" } do
    resources :todos
    # resources :events, only: [:index, :show]
  end
end
