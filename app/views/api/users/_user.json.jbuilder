json.extract! user, :firstname, :lastname, :username, :email, :session_token

json.favorites user.restaurant_ids
