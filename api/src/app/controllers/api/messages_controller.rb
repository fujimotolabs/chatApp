module Api
  class MessagesController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
      user = User.find(params[:user_id])
      
      message = user.messages.create(message: params[:message])
      if message.save
        render json: { status: 'SUCCESS', message: 'Message saved', data: message }, status: :ok
      else
        render json: { status: 'ERROR', message: 'Message not saved', data: message.errors }, status: :unprocessable_entity
      end
    end
  end
end