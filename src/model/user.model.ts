class User{
    constructor({id, name, password, email, avatar,favorites = [], watched = []}){
       this.id = id;
       this.name = name;
       this.password = password;
       this.email = email;
       this.avatar = avatar;
       this.favorites = favorites;
       this.watched = watched;
    }
}

export default User;