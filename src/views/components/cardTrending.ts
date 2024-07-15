import { IcHeartActiveIcon } from '../../resources/assets/icons';
import { apimv } from '../../resources/constants/constant';

function cardTrending(movie) {
  return `
    <div class="card-trending" data-id="${movie.id}">
    <figure class="card-trending-figure">
    <img src="${apimv}${movie.poster}"> 
    </figure>
    <button class="btn-addFavorite">
    <figure class="card-trending-status">
    <img class = "image-status" src="${apimv}${movie.favorites}.svg"> 
    </figure>
    </button>
    <div class="card-trending-content">
    <h3 class="card-trending-title">${movie.name}</h3>
    <div class="card-trending-block">
    <span class="card-trending-year">${movie.year}</span>
    <span class="card-trending-type">${movie.type}</span>
    </div>
    </div>
    </div>
    `;
}
export default cardTrending;
