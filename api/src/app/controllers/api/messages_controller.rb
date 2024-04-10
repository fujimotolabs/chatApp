module Api
  class MessageController < ApplicationController
    def create
      user = User.find(params[:user_id])
      message = user.messages.create(message_params)
      if message.save
        render json: { status: 'SUCCESS', message: 'Message saved', data: message }, status: :ok
      else
        render json: { status: 'ERROR', message: 'Message not saved', data: message.errors }, status: :unprocessable_entity
      end
    end

    private

    def message_params
      params.require(:message).permit(:body)
    end
  end
end