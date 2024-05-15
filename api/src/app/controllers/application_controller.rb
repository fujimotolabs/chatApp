class ApplicationController < ActionController::API
        include DeviseTokenAuth::Concerns::SetUserByToken

        after_action :add_user_id_to_header

        private

        def add_user_id_to_header
        response.headers['user_id'] = current_user.id if current_user
        response.headers['Access-Control-Expose-Headers'] = 'access-token, client, uid, user_id'

        end
end
