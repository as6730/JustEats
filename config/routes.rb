Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do

    resources :reviews, only: [:update, :destroy]
    resources :tags, only: [:update, :destroy]
    resources :photos, only: [:update, :destroy]
    resources :menus, only: [:update, :destroy]
    resources :locations, only: [:update, :destroy]
    resources :cuisines, only: [:update, :destroy]
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show, :edit]
    resources :reservations, only: [:update, :show, :destroy]
    resources :payment_options, only: [:update, :show, :destroy]

    resources :restaurants, only: [:create, :update, :index, :show, :destroy] do
      resources :reservations, only: [:create]
      resources :reviews, only: [:index, :create]
      resources :tags, only: [:index, :create]
      resources :photos, only: [:index, :create]
      resources :menus, only: [:index, :create]
      resources :locations, only: [:index, :create]
      resources :cuisines, only: [:index, :create]
      resources :payment_options, only: [:index, :create]
    end
  end
end
