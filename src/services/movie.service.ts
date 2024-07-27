
import api from '../api/movies';
import Movie from '../model/movie.model';
import User from '../model/user.model';
import { createToast } from '../views/components/handleToast';


interface ffit{
  id: number | string;
}
interface MovieService {
  movies: Movie[];
  users: User[];
  midbyuid: ffit[];
  continue: { id: number, timewatched: number }[];
  onDataChanged: (data: any) => void;
}
class MovieService implements MovieService {
  

  constructor() {
    this.movies = [];
    this.users = [];
    this.midbyuid = [];
    this.continue = [];
    this.onDataChanged = () => {};
  }

  async getAllMovies() {
    try {
      let { data } = await api.get('/movies');
      if (data) {
        data = await data.map((movie: { id: string; name: string; year: string; type: string; poster: string; link: string; duration: string; description: string; evaluate: string; favorites: string; }) => new Movie(movie));
        this.movies = data;
        return this.movies;
      }
    } catch (error) {
      if(error instanceof Error)
      createToast('error', error.message);
    }
  }
  async getAllUsers() {
    try {
      let { data } = await api.get('/users');
      if (data) {
        data = await data.map((user: { id: any; name: any; password: any; email: any; avatar: any; favorites?: never[] | undefined; watched?: never[] | undefined; }) => new User(user));
        this.users = data;
        return this.users;
      }
    } catch (error) {
      if (error instanceof Error)
      createToast('error', error.message);
    }
  }

  bindDataChanged(callback: { (movies: any): void; (data: any): void; }) {
    this.onDataChanged = callback;
  }
  commitMovies = (movies: Movie) => {
    this.onDataChanged(movies);
  };
  async addUser(user: User) {
    try {
      const { data } = await api.post('/users', new User(user));
      if (data) {
        this.users.push(data);
      }
      createToast('success', 'Added user');
    } catch (error) {
      createToast('error', "Can't add user");
    }
  }

  async addMovie(movie: Movie) {
    try {
      const { data } = await api.post('/movies', new Movie({
        id: movie.id,
        name: movie.name,
        duration: movie.duration,
        description: movie.description,
        link: movie.link,
        favorites: movie.favorites,
        evaluate: movie.evaluate,
        type: movie.type,
        year: movie.year,
        poster: movie.poster

      }));
      if (data) {
        this.movies.push(data);
      }
      createToast('success', 'Added movie');
    } catch (error) {
      createToast('error', "Can't add movie");
    }
  }
  async getMovieIdByUID(id: string | number) {
    try {
      const { data } = await api.get(`/users/${id}`);
      if (data) {
        const userFavorites = data.favorites;
        const arr = userFavorites.map((favorite: { id: any; }) => favorite.id).join();
        const arrf = arr.split(',');
        this.midbyuid = arrf;
        return this.midbyuid;
      }
    } catch (error) {}
  }
  async getMovieIdByUIDCTN() {
    const id = sessionStorage.getItem('id');
    try {
      const { data } = await api.get(`/users/${id}`);
      if (data) {
        const usercontinue = data.watched;
        const arr = usercontinue.map((watched: { id: any; timewatched: any; }) => ({
          id: watched.id,
          timewatched: watched.timewatched,
        }));
        this.continue = arr;
        return this.continue;
      }
    } catch (error) {}
  }
  async addToFavorite(id: number | string) {
    const uid = sessionStorage.getItem('id');
    try {
      const { data } = await api.get(`/users/${uid}`);
      if (data) {
        this.midbyuid = data.favorites;
        let check = false;
        this.midbyuid.forEach((mid) => {
          if (mid.id === id) {
            check = true;
          }
        });
        if (check) {
          this.midbyuid = this.midbyuid.filter((item) => item.id !== id);
          try {
            await api.patch(`/users/${uid}`, { favorites: this.midbyuid });
            createToast('success', 'success ');
          } catch (errorss) {
            createToast('error', 'Failed');
          }
        } else {
          this.midbyuid.push({id: id as any });
          data.favorites = this.midbyuid;
          try {
            await api.put(`/users/${uid}`, data);
            createToast('success', 'success ');
          } catch (errors) {}
        }
      }
    } catch (error) {}
  }
  async addToContinue(id: number, time: any) {
    const uid = sessionStorage.getItem('id');
    try {
      const { data } = await api.get(`/users/${uid}`);
      if (data) {
        this.continue = data.watched;
        let check = false;
        this.continue.forEach((mid) => {
          if (mid.id === id) {
            check = true;
          }
        });
        if (check) {
          this.continue = this.continue.filter((item) => item.id !== id);
          try {
            await api.patch(`/users/${uid}`, { watched: this.continue });
            createToast('success', 'success ');
          } catch (errorss) {
            createToast('error', 'Failed');
          }
        } else {
          this.continue.push({ id: id, timewatched: time });
          data.watched = this.continue;
          try {
            await api.patch(`/users/${uid}`, data);
            createToast('success', 'success add to continue');
          } catch (error) {}
        }
      }
    } catch (error) {}
  }
}

export default MovieService;
