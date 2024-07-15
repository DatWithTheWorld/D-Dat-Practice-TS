import MovieController from './controller/movie.controller';
import MovieService from './services/movie.service';
import MovieView from './views/movie.views';
new MovieController(new MovieService(), new MovieView());
// new MovieView();
