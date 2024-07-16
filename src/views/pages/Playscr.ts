import {
  IcMaximizeIcon,
  IcPauseIcon,
  IcPlayCircleIcon,
  IcReturnIcon,
  IcSlidersIcon,
  IcVolumeIcon,
} from '../../resources/assets/icons';
import { apimv } from '../../resources/constants/constant';

const Playscr = (videolink) => {
  return ` 
      <video id="playsrcvd" width="100%" height="100%" autoplay controls>
        <source src="${apimv}${videolink}" type="video/mp4">
      </video>
      <div class="playscr">
        <div class = "opa hidden"></div>
        <figure class="figuresc playcircle hidden">
        <img src="${IcPlayCircleIcon}">
        </figure>
        <figure class="figuresc returnbtn ">
        <img src="${IcReturnIcon}">
        </figure>
        <div class="playscr-bar-con ">
        <div class="playscr-bar">
        <figure>
             <img src="${IcPauseIcon}">
        </figure>
        <div class="progress"><div class="progress-bar"></div></div>
        <span class="timevideo"><span class = "timing"></span>/<span class ="maxtime"></span></span>
        <figure>
            <img src="${IcVolumeIcon}">
        </figure>
        <figure>
            <img src="${IcSlidersIcon}">
        </figure>
        <figure>
            <img src="${IcMaximizeIcon}">
        </figure>
    </div>
        </div>
      </div>
      `;
};

export default Playscr;
