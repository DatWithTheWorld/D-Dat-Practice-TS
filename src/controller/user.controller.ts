import UserService from "../services/user.service";

class UserController{
    userService: UserService;
    constructor(userService: UserService){
      this.userService = userService;
      this.userService.getAllUsers();
    }
}
export default UserController;
