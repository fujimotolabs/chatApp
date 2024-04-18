Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth', controllers: {
    registrations: 'auth/registrations', 
  }
  namespace :api do
    resources :users, only: [:index]
    resources :messages, only: [:create, :show, :index]
  end
end
