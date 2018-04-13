Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:show, :create, :destroy]
    resources :users, only: [:create, :show, :edit] do
      resources :reservation, only: [:show]
    end
    resources :reservations, only: [:index, :update, :show, :destroy]

    resources :reviews, only: [:update, :destroy]
    resources :tags, only: [:update, :destroy]
    resources :photos, only: [:update, :destroy]
    resources :menus, only: [:update, :destroy]
    resources :locations, only: [:update, :destroy]
    resources :cuisines, only: [:update, :destroy]
    resources :payment_options, only: [:update, :destroy]

    resources :restaurants, only: [:create, :update, :index, :show, :destroy] do
      resources :reservations, only: [:create, :destroy]
      resources :reviews, only: [:index, :create]
      resources :tags, only: [:create]
      resources :photos, only: [:create]
      resources :menus, only: [:create]
      resources :locations, only: [:create]
      resources :cuisines, only: [:create]
      resources :payment_options, only: [:create]
    end

    get 'getuserfavorites/', to: 'users#get_favorites'
    post 'users/addfavorite/:restaurantId', to: 'users#add_favorite'
    delete 'users/removefavorite/:restaurantId', to: 'users#remove_favorite'
  end
end
