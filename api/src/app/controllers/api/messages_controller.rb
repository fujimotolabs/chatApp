module Api
  class MessagesController < ApplicationController
    before_action :authenticate_user!, except: [create]

    def create
      user = User.find(params[:user_id])
      
      message = user.messages.create(message: params[:message])
      if message.save
        render json: { status: 'SUCCESS', message: 'Message saved', data: message }, status: :ok
      else
        render json: { status: 'ERROR', message: 'Message not saved', data: message.errors }, status: :unprocessable_entity
      end
    end

    def show
      user_id = params[:id]
      user = User.find(user_id)
      messages = user.messages
      render json: { status: 'SUCCESS', message: 'Loaded messages', data: messages }, status: :ok
    end
    
    def index
      messages = Message.all
      render json: { status: 'SUCCESS', message: 'Loaded messages', data: messages }, status: :ok
    end
  end
end