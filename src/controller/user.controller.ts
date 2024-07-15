class UserController{
    constructor(userService){
      this.userService = userService;
      this.userService.getAllUsers();
    }
}
export default UserController;
