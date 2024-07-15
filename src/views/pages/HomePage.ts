import Header from '../layouts/header';
import {
  IcHeartActiveIcon,
  IcBellIcon,
  IcHeartNoActiveIcon,
  PngTkoTrain,
} from '../../resources/assets/icons';
import leftNav from '../layouts/leftNav';
import cardTrending from '../components/cardTrending';
import Form from '../components/addForm';
import { apimv } from '../../resources/constants/constant';
const HomePage = (movies = []) => {
  return `
    <section class="main-section">
    <div class="main-section-nav--left">
    ${leftNav()}
    </div>
    <div class="main-section-content--right">
    <div class = "addMovieForm hidden">
    <div class="addMovieForm-con">
       ${Form()}
    </div>
 </div>
    <div class="header-title">
    ${Header()}
    <video id="topvideotrending" width="100%" height="100%" autoplay controls>
    <source src="${apimv}/food.mp4" type="video/mp4">
  </video>
    <p class="movie-name">Insider</p>
    <div class="movie-details">
    <span class="movie-details-year">2022</span>
    <span class="movie-details-type">Comedy horor</span>
    <span class="movie-details-season">1 Season</span>
    </div>
    <div class="button-group">
    <button class = "btn-primary btn-watchNow">Watch now</button>
    <button class = "heart"><img src = "${IcHeartNoActiveIcon}"></button>
    </div>
    </div>
    <div class="movie-center">
    <button class = "btn-primary btn-add">Add new</button>
    <div class="movie-center-trending">
    <h3>Trending</h3>
    <div class="movie-center-trending-card">
      
    </div>
    </div>
    <div class="movie-center-continue">
    <h3>Continue watching</h3>
    <div class="movie-center-continue-card">
    </div>
    </div>
    </div>
    </div>
    </section>
    `;
};

export default HomePage;
