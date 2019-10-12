Rails.application.routes.draw do
  root to: "home#index"

  namespace :api do
    jsonapi_resources :posts
  end

  get "*path", to: "home#index", constraints: { format: "html" }
end
