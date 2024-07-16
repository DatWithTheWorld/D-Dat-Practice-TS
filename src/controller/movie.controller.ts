import MovieService from '../services/movie.service';
import { createToast } from '../views/components/handleToast';
import MovieView from '../views/movie.views';

class MovieController {
  movieServices: MovieService;
  movieViews: MovieView;

  constructor(movieServices: MovieService, movieViews: MovieView) {
    this.movieServices = movieServices;
    this.movieViews = movieViews;
    const currentPath = window.location.pathname;
    const name = sessionStorage.getItem('name');
    if (!name) {
      if (currentPath !== '/') {
        createToast('error', 'Please login or regist account to use');
        window.location.href = '/';
      } else {
        this.movieViews.toggleLogin();
        this.movieViews.toggleRegist();
        this.movieViews.bindAddUser(this.handleAddUser);
        this.handleLogin();

        
        this.handleDisplayDataUser();
      }
    } else {
      if (currentPath === '/') {
        this.movieViews.toggleLogin();
        this.movieViews.toggleRegist();
        this.movieViews.bindAddUser(this.handleAddUser);
        this.handleLogin();
        this.handleDisplayDataUser();
      }
      if (currentPath === '/playscr') {
        this.movieViews.appearToolbar();
        this.movieViews.toggleBar();
        this.movieViews.videoDuration();
        this.movieViews.return(this.handleReturn);
      }
      if (
        currentPath === '/home' ||
        currentPath === '/favorite' ||
        currentPath === '/trending'
      ) {
        if (currentPath === '/home') {
          this.handleDisplayData();
          this.movieViews.toggleAddForm();
          this.movieViews.bindAddMovie(this.handleAddMovie);
          this.handleDisplayContinue();
        }
        if (currentPath === '/trending') {
          this.handleDisplayDataTDP();
          // this.handleWatchMovie();
        }
        if (currentPath === '/favorite') {
          this.handleDisplayDataFavorites();
        }
        this.movieServices.bindDataChanged(this.onDataChanged);
        this.movieViews.homepageoption();
        this.movieViews.showSite();
        this.handleGetItemByUser();
        this.handleDataLoad();
      }
    }
  }
  onDataChanged = (movies) => {
    this.movieViews.displayData(movies);
  };
  async handleDisplayData() {
    const movies = await this.movieServices.getAllMovies();
    this.movieViews.displayData(movies);
  }
  async handleGetItemByUser() {
    const ids = await this.movieServices.getMovieIdByUID(
      sessionStorage.getItem('id'),
    );
    this.movieViews.showFavoriteItem(ids);
  }
  async handleLogin() {
    const users = await this.movieServices.getAllUsers();
    this.movieViews.loginss(users);
  }
  async handleDisplayDataUser() {
    const users = await this.movieServices.getAllUsers();
  }
  async handleDataLoad() {
    await this.movieServices.getAllMovies();
    await this.movieServices.getAllUsers();
    this.movieViews.bindAddToFavorite(this.handleAddToFavorite);
  }
  handleReturn = (id, time) => {
    this.movieServices.addToContinue(id, time);
  };
  handleAddToFavorite = (id) => {
    this.movieServices.addToFavorite(id);
  };
  async handleDisplayDataTDP() {
    const movies = await this.movieServices.getAllMovies();
    this.movieViews.displayDataTDP(movies);
    const ids = await this.movieServices.getMovieIdByUIDCTN();
    this.movieViews.showCardTrending(movies, ids);
  }
  async handleDisplayDataFavorites() {
    const movies = await this.movieServices.getAllMovies();
    const ids = await this.movieServices.getMovieIdByUID(
      sessionStorage.getItem('id'),
    );
    this.movieViews.displayDataFavorites(movies, ids);
  }
  async handleDisplayContinue() {
    const movies = await this.movieServices.getAllMovies();
    const ids = await this.movieServices.getMovieIdByUIDCTN();
    const idmv = await this.movieServices.getMovieIdByUID(
      sessionStorage.getItem('id'),
    );
    this.movieViews.displayDataContinue(movies, ids, idmv);
  }
  handleAddUser = (user) => {
    this.movieServices.addUser(user);
  };
  handleAddMovie = (movie) => {
    this.movieServices.addMovie(movie);
  };
}

export default MovieController;
