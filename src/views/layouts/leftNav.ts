import {
  LgLogoMainIcon,
  IcFilmIcon,
  IcHeartIcon,
  IcTrendingIcon,
  IcUsersIcon,
  IcCalendarIcon,
  IcMessageIcon,
  LgBgr,
  IcSlidersIcon,
  IcLogOutIcon,
} from '../../resources/assets/icons';
import navChild from '../components/navChild';
const homeLogo = [`<figure><img src="${LgLogoMainIcon}"></figure>`];
const listNavFirst = [
  `<figure><img src="${IcFilmIcon}"></figure><span class="homep">Home</span>`,
  `<figure><img src="${IcHeartIcon}"></figure><span class = "favoritep">Favorites</span>`,
  `<figure><img src="${IcTrendingIcon}"></figure><span class = "trendingp">Trending</span>`,
  `<figure><img src="${IcCalendarIcon}"></figure><span>Coming soon</span>`,
];
const listNavSecond = [
  `<figure><img src="${IcUsersIcon}"></figure><span>Comunity</span>`,
  `<figure><img src="${IcMessageIcon}"></figure><span>Social</span>`,
];
const listNavThird = [
  `<figure><img src="${IcSlidersIcon}"></figure><span>Settings</span>`,
  `<figure><img src="${IcLogOutIcon}"></figure><span class="logoutp">Logout</span>`,
];
const leftNav = () => {
  return `
<nav class="nav-left-container">
<ul>${navChild(homeLogo)}</ul>

<ul>${navChild(listNavFirst)}</ul>

<ul>${navChild(listNavSecond)}</ul>

<ul>${navChild(listNavThird)}</ul>
</nav>
`;
};

export default leftNav;
