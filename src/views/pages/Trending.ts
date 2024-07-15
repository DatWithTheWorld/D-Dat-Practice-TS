import { IcHeartActiveIcon, IcStarIcon, PngTkoTrain } from "../../resources/assets/icons";
import cardTrending from "../components/cardTrending";
import Header from "../layouts/header";
import leftNav from "../layouts/leftNav";
const Trending = () => {
    return `
    <section class="main-section">
    <div class="main-section-nav--left">
    ${leftNav()}
    </div>
    <div class="main-section-content--right">
    <div class = "opacitydiv"></div>
    ${Header()}
    <h3 class="hd-favorite">Trending at this moment</h3>
    <div class="movie-trending">
   </div>
    <div class = "card-container">
    
    </div>
</div>
    </section>
    `;

}

export default Trending;
