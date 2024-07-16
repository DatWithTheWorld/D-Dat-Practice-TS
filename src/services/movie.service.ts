import Movie from '../model/movie.model';
import api from '../api/movies';
import User from '../model/user.model';
import { createToast } from '../views/components/handleToast';

class MovieService {
  constructor() {
    this.movies = [];
    this.users = [];
    this.midbyuid = [];
    this.continue = [];
  }

  async getAllMovies() {
    try {
      let { data } = await api.get('/movies');
      if (data) {
        data = await data.map((movie) => new Movie(movie));
        this.movies = data;
        return this.movies;
      }
    } catch (error) {
      createToast('error', error);
    }
  }
  async getAllUsers() {
    try {
      let { data } = await api.get('/users');
      if (data) {
        data = await data.map((user) => new User(user));
        this.users = data;
        return this.users;
      }
    } catch (error) {
      createToast('error', error);
    }
  }

  bindDataChanged(callback) {
    this.onDataChanged = callback;
  }
  commitMovies = (movies) => {
    this.onDataChanged(movies);
  };
  async addUser(user) {
    try {
      const { data } = await api.post('/users', new User(user));
      if (data) {
        this.users.push(data);
      }
      createToast('info', 'Added user');
    } catch (error) {
      createToast('error', "Can't add user");
    }
  }

  async addMovie(movie) {
    try {
      const { data } = await api.post('/movies', new Movie(movie));
      if (data) {
        this.movies.push(data);
      }
      createToast('info', 'Added movie');
    } catch (error) {
      createToast('error', "Can't add movie");
    }
  }
  async getMovieIdByUID(id) {
    try {
      const { data } = await api.get(`/users/${id}`);
      if (data) {
        const userFavorites = data.favorites;
        const arr = userFavorites.map((favorite) => favorite.id).join();
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
        const arr = usercontinue.map((watched) => ({
          id: watched.id,
          timewatched: watched.timewatched,
        }));
        this.continue = arr;
        return this.continue;
      }
    } catch (error) {}
  }
  async addToFavorite(id) {
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
            createToast('infor', 'success ');
          } catch (errorss) {
            createToast('error', 'Failed');
          }
        } else {
          this.midbyuid.push({ id: id });
          data.favorites = this.midbyuid;
          try {
            await api.put(`/users/${uid}`, data);
            createToast('infor', 'success ');
          } catch (errors) {}
        }
      }
    } catch (error) {}
  }
  async addToContinue(id, time) {
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
            createToast('infor', 'success ');
          } catch (errorss) {
            createToast('error', 'Failed');
          }
        } else {
          this.continue.push({ id: id, timewatched: time });
          data.watched = this.continue;
          try {
            await api.patch(`/users/${uid}`, data);
            createToast('infor', 'success add to continue');
          } catch (error) {}
        }
      }
    } catch (error) {}
  }
}

export default MovieService;
