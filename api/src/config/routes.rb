Rails.application.routes.draw do
  namespace :api do
    resources :users, only: [:index]
    resources :messages, only: [:create, :show, :index]
  end
end
