import {
  IcSearchIcon,
  IcBellIcon,
  IcHeartActiveIcon,
  IcHeartNoActiveIcon,
} from '../../resources/assets/icons';
import navChild from '../components/navChild';

const name = sessionStorage.getItem('name');
const arraynav = ['Movies', 'Series', 'Documentaties'];
const arrayicons = [
  `<figure><img src = "${IcSearchIcon}"></figure>`,
  `<figure ><img src = "${IcBellIcon}"></figure>`,
  `<figure class="avatar-icon"><img src ="https://yt3.googleusercontent.com/flfmr7SymUdWxl-Og9zKop5zJacdXf5PYwPVJzVfLWlMIQEo0DvmcD5L9l2W7eOZ-N4fQqgXkA=s900-c-k-c0x00ffffff-no-rj"></figure><p class="user-name">${name}</p>`,
];
const Header = () => {
  return `
    <header class="header-container">
      <nav class="nav-container">
        <ul>${navChild(arraynav)}</ul>      
        <ul>${navChild(arrayicons)}</ul>
      </nav>
    </header>
    `;
};
export default Header;
