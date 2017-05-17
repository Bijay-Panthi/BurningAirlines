Rails.application.routes.draw do

  root 'pages#app'

  resources :reservations
  resources :users
  resources :flights
  resources :airplanes

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
