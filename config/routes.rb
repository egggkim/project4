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

  # resources for calendar
  get '/calendar' => 'home#index'

  # resources for todos
  get '/todos' => 'todos#index'

  # resources for clients
  resources :clients
  get '/clients' => 'clients#index'

  match '*all' => 'application#handle_options', via: :options

  namespace :api, defaults: { format:"json" } do
    resources :todos
    # resources :events, only: [:index, :show]
  end
end
