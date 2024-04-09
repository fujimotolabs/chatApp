Rails.application.routes.draw do
  namespace :api do
    resources :users, only: [:index]
    resources :postmessages, only: [:index, :create]
  end
end
