Rails.application.routes.draw do
  namespace :api do
    get 'reviews/new'
  end

  namespace :api do
    get 'reviews/index'
  end

  namespace :api do
    get 'reviews/create'
  end

  namespace :api do
    get 'reviews/update'
  end

  namespace :api do
    get 'reviews/edit'
  end

  namespace :api do
    get 'reviews/show'
  end

  namespace :api do
    get 'reviews/destroy'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show, :edit]

    resources :restaurants do
    end

    resources :reservations, only: [:edit, :show, :destroy]
  end
end
