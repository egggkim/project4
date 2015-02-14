Rails.application.routes.draw do
  # single page app
  get '/home' => 'home#index' 

  # resource for users
  resources :users
  get '/signup' => 'users#new'

  # resources for sessions
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  delete '/logout' => 'sessions#destroy'

  namespace :api, defaults: { format:"json" } do
    resources :clients
    resources :events,only: [:index, :show]
  end
end
