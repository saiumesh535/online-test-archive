package auth

import "online-test/server/types"

func (model AuthModel) LoginModel(userLogin types.UserLogin, dest *types.User) error {
	return model.PGInstance.Get(dest, "SELECT user_id, username FROM  users WHERE username = $1 and password = $2", userLogin.Username, userLogin.Password)
}