import {
  IcHeartActiveIcon,
  IcHeartNoActiveIcon,
  IcStarIcon,
} from '../../resources/assets/icons';
import { apimv } from '../../resources/constants/constant';

function CardDetail(movies) {
  console.log(movies.duration);
  const hours = Math.floor(movies.duration / 60);
  const minutes = movies.duration % 60;
  const mformat = minutes.toFixed(0).padStart(2, '0');
  const timeFormat = `${hours}h ${mformat}m`;
  return `
   <div class="card-details" data-id="${movies.id}">
   <figure><img src="${apimv}${movies.poster}"></figure>
 <div class="card-details-content">
     <div class="card-details-content-firstline">
             <h2 class="title">${movies.name}</h2>
         <div class="evaluate">
             <figure><img src="${IcStarIcon}"></figure>
          <div class="evaluate-content">
              <span class="evaluate-value">${movies.evaluate}</span>/10
           </div>
         </div>
      </div>
      <div class="card-details-content-secondline">
      <span class="year">${movies.year}</span>
      <span class="genre">${movies.type}</span>
      <span class="time">${timeFormat} </span>
      </div>
      <p class="card-details-content-description">
       ${movies.description}
      </p>
      <div class="card-details-content-button">
      <button class="btn btn-primary btn-watch">Watch now</button>
      <button class="stt"><figure><img class = "card-detail-stt" src="${IcHeartNoActiveIcon}"></figure></button>
      </div>
 </div>
</div>
   `;
}
export default CardDetail;
