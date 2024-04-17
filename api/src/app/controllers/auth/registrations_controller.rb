class Auth::RegistrationsController < DeviseTokenAuth::RegistrationsController
    def registrations_params
        params.permit(:email, :password, :password_confirmation, :name)
      end
end
