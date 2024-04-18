module Api
  class UsersController < ApplicationController
    before_action :authenticate_user!, except: []
    def index
    users = User.all
    render json: users, status: :ok
    end
  end
end
