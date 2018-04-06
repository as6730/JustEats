Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do

    resources :reviews, only: [:update, :destroy]
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show, :edit]
    resources :reservations, only: [:update, :show, :destroy]

    resources :restaurants, only: [:create, :index, :show, :destroy] do
      resources :reservations, only: [:create]
      resources :reviews, only: [:index, :create]
    end
  end
end
