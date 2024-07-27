class User {
    id: number | string;
    name: string;
    password: string;
    email: string;
    avatar: string;
    favorites: { id: number | string }[];
    watched: { id: number | string }[];
  
    constructor({
      id,
      name,
      password,
      email,
      avatar,
      favorites = [],
      watched = [],
    }: {
      id: number | string;
      name: string;
      password: string;
      email: string;
      avatar: string;
      favorites?: { id: number | string }[];
      watched?: { id: number | string }[];
    }) {
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