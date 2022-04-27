Rails.application.routes.draw do
  resources :users
  resources :countries
  # resources :drinks
  
  namespace :api do
    namespace :v1 do
      get 'drinks/index'
      post 'drinks/create'
      delete 'drinks/:id', to: 'drinks#destroy'
      put 'drinks/:id', to: 'drinks#update'
      get 'drinks/:id', to: 'drinks#show'
      post 'users/create'
      get 'users/:id', to: 'users#show'
    end
  end

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "drinks#index"
end
