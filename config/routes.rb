Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :albums, only: [:index, :show] do
      resources :tracks, only: [:show]
    end
    resources :tracks, only: [:index]
  end
end
