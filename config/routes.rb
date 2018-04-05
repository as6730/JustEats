Rails.application.routes.draw do
  namespace :api do
    get 'restaurants/new'
  end

  namespace :api do
    get 'restaurants/index'
  end

  namespace :api do
    get 'restaurants/create'
  end

  namespace :api do
    get 'restaurants/update'
  end

  namespace :api do
    get 'restaurants/edit'
  end

  namespace :api do
    get 'restaurants/show'
  end

  namespace :api do
    get 'restaurants/destroy'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :edit]
    resource :session, only: [:create, :destroy]
  end
end
