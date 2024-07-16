import PreLogin from './pages/PreLogin';
import Trending from './pages/Trending';
import Router from '../router/Router';
import Playscr from './pages/Playscr';
import Favorite from './pages/Favorite';
import HomePage from './pages/HomePage';
import cardTrending from './components/cardTrending';
import CardDetail from './components/cardDetail';
import { createToast } from './components/handleToast';
import generateID from '../helper/uid';
import { apimv } from '../resources/constants/constant';
import validate from '../helper/formValidates';
class MovieView {
  app: any;
  router: Router;
  main: HTMLDivElement;
  container: HTMLDivElement;
  toastList: HTMLUListElement;
<<<<<<< Updated upstream
=======
  users: any;
  movies: any;
  idmv: any;
  ids: any;
>>>>>>> Stashed changes
  constructor() {
    this.app = document.querySelector('#root');
    this.router = new Router(this.app);
    this.initRoute();
    this.main = document.createElement('div');
    this.main.classList.add('main');
    this.container = document.createElement('div');
    this.container.classList.add('container');
    this.toastList = document.createElement('ul');
    this.toastList.classList.add('notifications');
    this.main.appendChild(this.container);
    this.app.appendChild(this.toastList);
    this.app.appendChild(this.main);
    this.router.changeRoute();
  }
  checkValidForm(dForm) {
    const inputs = [...dForm.querySelectorAll('input')];
    return !inputs.some((input) => input.classList.contains('invalid'));
  }
  clearInvalid(dForm) {
    const inputs = [...dForm.querySelectorAll('input')];
    inputs.map((input) => input.classList.remove('invalid'));
  }
  appearToolbar() {
    const returnbtn = document.querySelector('.returnbtn');
    const playscr = document.querySelector('.playscr');
    const playcircle = document.querySelector('.playcircle');
    const playbarcon = document.querySelector('.playscr-bar-con');
    const playbar = document.querySelector('.playscr-bar');
    const videos = document.getElementById('playsrcvd');
    const opa = document.querySelector('.opa');
    if(playscr != null && videos != null){
    const figureE = Array.from(playscr.querySelectorAll('.figuresc'));
    playscr.addEventListener('click', function (event) {
      const target = event.target;
      if (target !== playbar && !figureE.includes(target)) {
        if (videos.paused) {
          videos.play();
          playcircle.classList.toggle('hidden');
          returnbtn.classList.toggle('hidden');
          setTimeout(() => {
            playbarcon.classList.toggle('hidden');
          }, 2000);
          setTimeout(() => {
            opa.classList.toggle('hidden');
          }, 0);
        } else {
          videos.pause();
          opa.classList.toggle('hidden');
          playcircle.classList.toggle('hidden');
          playbarcon.classList.toggle('hidden');
          returnbtn.classList.toggle('hidden');
        }
      }
    });
    videos.addEventListener('ended', () => {
      playcircle.classList.toggle('hidden');
      playbarcon.classList.toggle('hidden');
      returnbtn.classList.toggle('hidden');
    });
    }
    

  }
  toggleBar() {
    const playscrbarcon = document.querySelector('.playscr-bar-con');
    const returnbtn = document.querySelector('.returnbtn');
    const videos = document.getElementById('playsrcvd');
    setTimeout(() => {
      playscrbarcon.classList.toggle('hidden');
      returnbtn.classList.toggle('hidden');
    }, 2000);
  }

  initRoute() {
    this.router.addRoute('/', PreLogin());
    this.router.addRoute('/trending', Trending());
    this.router.addRoute('/home', HomePage());
    this.router.addRoute('/favorite', Favorite());
    this.router.addRoute('/playscr', Playscr(sessionStorage.getItem('link')));
  }

  toggleLogin() {
    const logginbtn = document.querySelector('.btn-log');
    const loginform = document.querySelector('.con-form-login');
    const lgform = document.querySelector('.form-log');
    validate(lgform);
    logginbtn.addEventListener('click', function () {
      loginform.classList.toggle('hidden');
    });
    document.addEventListener('click', function (e) {
      const targetE = e.target;
      if (!loginform.contains(targetE) && !logginbtn.contains(targetE)) {
        loginform.classList.add('hidden');
      }
    });
  }
  toggleAddForm() {
    const btnadd = document.querySelector('.btn-add');
    const addForm = document.querySelector('.addMovieForm');
    btnadd.addEventListener('click', function (e) {
      addForm.classList.toggle('hidden');
    });
    document.addEventListener('click', function (event) {
      const targetElement = event.target;
      if (!addForm.classList.contains('hidden')) {
        if (
          !addForm.contains(targetElement) &&
          !btnadd.contains(targetElement)
        ) {
          addForm.classList.toggle('hidden');
        }
      }
    });
  }
  videoDuration(dura) {
    const videos = document.getElementById('playsrcvd');
    let maxDuration = 0;
    const progressBar = document.querySelector('.progress-bar');
    const timingElement = document.querySelector('.timing');
    const maxtimeE = document.querySelector('.maxtime');

    videos.addEventListener('loadedmetadata', function (e) {
      maxDuration = videos.duration;
      if (dura) {
        videos.currentTime = dura; // Thiết lập thời gian bắt đầu của video
      }
    });

    videos.addEventListener('timeupdate', function () {
      const currentTime = videos.currentTime;
      const progressPercentage = (currentTime / maxDuration) * 100;
      const progressWidth = (progressPercentage / 100) * 100;
      progressBar.style.width = progressWidth + '%';

      const minutes = Math.floor(currentTime / 60);
      const seconds = Math.floor(currentTime % 60);
      const formattedTime = `${String(minutes).padStart(2, '0')}:${String(
        seconds,
      ).padStart(2, '0')}`;
      timingElement.textContent = formattedTime;

      const minutesm = Math.floor(maxDuration / 60);
      const secondsm = Math.floor(maxDuration % 60);
      const formattedTimem = `${String(minutesm).padStart(2, '0')}:${String(
        secondsm,
      ).padStart(2, '0')}`;
      maxtimeE.textContent = formattedTimem;
    });
  }
  toggleRegist() {
    const signupbtn = document.querySelector('.btn-signup');
    const registform = document.querySelector('.con-form-regist');
    const formRes = document.querySelector('.form-res');
    signupbtn.addEventListener('click', function () {
      validate(formRes);
      registform.classList.toggle('hidden');
    });
    document.addEventListener('click', function (e) {
      const targetE = e.target;
      if (!registform.contains(targetE) && !signupbtn.contains(targetE)) {
        registform.classList.add('hidden');
      }
    });
  }
  loginss(users) {
    this.users = users;
    const forms = document.querySelector('.form-log');
    const button = document.querySelector('.btn-submit-login');
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const name = document.querySelector('.username-input').value;
      const password = document.querySelector('.userpassword-input').value;
      if (this.checkValidForm(forms)) {
        let isLoggedIn = false;
        this.users.forEach((user) => {
          if (user.name === name && user.password === password) {
            sessionStorage.setItem('name', name);
            sessionStorage.setItem('id', user.id);
            isLoggedIn = true;
          }
        });

        if (isLoggedIn) {
          window.location.href = '/home';
        } else {
          createToast('error', 'Invalid username or password');
        }
      }
    });
  }
  return(handle) {
    const returnbtn = document.querySelector('.returnbtn') as HTMLElement;
    const video = document.querySelector('#playsrcvd') as HTMLVideoElement;

    returnbtn.addEventListener('click', (e) => {
      e.preventDefault();
      handle(sessionStorage.getItem('mvid'), '' + video.currentTime);
      window.location.href = '/trending';
    });
  }
  homepageoption() {
    const navleft = document.querySelector('.nav-left-container') as HTMLElement;
    const lilist = navleft.querySelectorAll(`span`);
    const atag = navleft.querySelectorAll(`a`);
    atag.forEach((ef) => {
      ef.addEventListener('click', (e) => {
        e.preventDefault();
      });
    });
    lilist.forEach((liit) => {
      liit.addEventListener('click', (e) => {
        const clname = liit.getAttribute('class');
        switch (clname) {
          case 'homep':
            window.location.href = '/home';
            break;
          case 'favoritep':
            window.location.href = '/favorite';
            break;
          case 'trendingp':
            window.location.href = '/trending';
            break;
          case 'logoutp':
            sessionStorage.removeItem('name');
            sessionStorage.removeItem('id');
            window.location.href = '/';
            break;
          default:
        }
      });
    });
  }
  showSite() {
    const navleft = document.querySelector('.nav-left-container') as HTMLElement;
    const homep = document.querySelector('.homep') as HTMLElement;
    const favoritep = document.querySelector('.favoritep') as HTMLElement;
    const trendingp = document.querySelector('.trendingp') as HTMLElement;
    const currentPath = window.location.pathname;
    switch (currentPath) {
      case '/home':
        homep.classList.toggle('active');
        break;
      case '/trending':
        trendingp.classList.toggle('active');
        break;
      case '/favorite':
        favoritep.classList.toggle('active');
        break;
      default:
    }
  }
  displayData(movies) {
    this.movies = movies;
    const hometrendingct = document.querySelector(
      '.movie-center-trending-card',
    ) as HTMLElement ;
    let html = '';
    this.movies.forEach((movie) => {
      html += cardTrending(movie);
    });
    hometrendingct.innerHTML = html;
  }

  displayDataTDP(movies) {
    this.movies = movies;
    const movieTrending = document.querySelector('.movie-trending') as HTMLElement;
    let html = '';
    this.movies.forEach((movie) => {
      html += cardTrending(movie);
    });
    movieTrending.innerHTML = html;
  }

  showCardTrending(movies, idmv) {
    this.idmv = idmv;
    this.movies = movies;
    const movieTrending = document.querySelector('.movie-trending') as HTMLElement;
    const cardContainer = document.querySelector('.card-container') as HTMLElement;
    const cardTrending = movieTrending.querySelectorAll('.card-trending') as NodeListOf<HTMLElement> 
    cardTrending.forEach((card) => {
      card = card as HTMLElement;
      card.addEventListener('click', (e) => {
        e.preventDefault();
        card.style.opacity = '1';
        cardTrending.forEach((othercard) => {
          if (othercard !== card) {
            othercard.style.opacity = '0.3';
          }
        });
        const id = card.getAttribute('data-id');
        const btnfvr = card.querySelector('.card-trending-status') as HTMLElement;
        const imga = btnfvr.querySelector('img') as HTMLImageElement;
        const imgasrc = imga.src;
        this.movies.forEach((movie) => {
          if (movie.id === id) {
            cardContainer.innerHTML = CardDetail(movie);
          }
        });
        const cardDetail = document.querySelector('.card-detail-stt') as HTMLImageElement;
        cardDetail.src = imgasrc;
        const carddt = document.querySelector('.card-details') as HTMLElement;
        const btnwatch = document.querySelector('.btn-watch') as HTMLElement;
        btnwatch.addEventListener('click', (e) => {
          e.preventDefault();
          const id = carddt.getAttribute('data-id');
          this.movies.forEach((movie) => {
            if (movie.id === id) {
              this.idmv.forEach((idm) => {
                if (idm.id === id) {
                  sessionStorage.setItem('link', movie.link);
                  sessionStorage.setItem('mvid', movie.id);
                  sessionStorage.setItem('duration', idm.timewatched);
                  window.location.href = '/playscr';
                }
              });
            }
          });
        });
      });
    });
  }
  bindAddUser(handle) {
    const addButton = document.querySelector('.btn-submit-regist') as HTMLElement;
    const formRes = document.querySelector('.form-res') as HTMLFormElement;
    const usernameInput = formRes.querySelector('.username-input') as HTMLInputElement;
    const passwordInput = formRes.querySelector('.userpassword-input') as HTMLInputElement;
    const emailInput = formRes.querySelector('.useremail-input') as HTMLInputElement;
    addButton.addEventListener('click', (e) => {
      e.preventDefault();
      const name = usernameInput.value;
      const password = passwordInput.value;
      const email = emailInput.value;
      if (this.checkValidForm(formRes)) {
        const user = {
          id: generateID(),
          name,
          password,
          avatar: '',
          email,
          favorites: [],
          watched: [],
        };
        handle(user);
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    });
  }
  getVideoDuration(file) {
    return new Promise((resolve) => {
      const fileUrl = URL.createObjectURL(file);
      const video = document.createElement('video');
      video.src = fileUrl;
      video.addEventListener('loadedmetadata', () => {
        const duration = video.duration;
        resolve(duration);
      });
    });
  }
  bindAddMovie(handle) {
    const addButton = document.querySelector('.addmoviebtn') as HTMLButtonElement;
    const aposter = document.querySelector('.inputAddField-Poster') as HTMLInputElement;
    let poster = '';
    aposter.addEventListener('change', (ev) => {
      const file = (ev.target as HTMLInputElement).files?.[0];
      poster = file?.name || "";
    });
    let link = '';
    let duration = '';
    const avideo = document.querySelector('.inputAddField-Video') as HTMLInputElement;
    avideo.addEventListener('change', async (ev) => {
      const file = (ev.target as HTMLInputElement).files?.[0];
      link = file?.name || "";
      const fileUrl = file ? URL.createObjectURL(file) : "";
      const video = document.createElement('video');
      video.src = fileUrl;
    });
    addButton.addEventListener('click', async (e) => {
      e.preventDefault();
      const nameInput = document.querySelector('.inputAddField-Name') as HTMLInputElement;
    const dateInput = document.querySelector('.inputAddField-Date') as HTMLInputElement;
    const typeInput = document.querySelector('.inputAddField-Type') as HTMLInputElement;
    const evaluateInput = document.querySelector('.inputAddField-Evaluate') as HTMLInputElement;
    const descriptionInput = document.querySelector('.inputAddField-Description') as HTMLInputElement;
      const name = nameInput.value;
      const ayear = dateInput.value;
      const year = ayear.substring(0, 4);
      const type = typeInput.value;
      const evaluate = evaluateInput.value;
      const description = descriptionInput.value;
      if (name === '' || poster === '' || link === '') {
        createToast('error', 'Please fill all the fields');
      } else {
        const movieDuration = await this.getVideoDuration(avideo.files?.[0])
        const movie = {
          id: generateID(),
          name,
          year,
          type,
          poster,
          link,
          duration : movieDuration,
          description,
          evaluate,
          favorites: 'ic-heart-3d',
        };
        handle(movie);
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    });
  }
  showFavoriteItem(ids) {
    this.ids = Array.isArray(ids) ? ids : [ids];
    const cardTrending = document.querySelectorAll('.card-trending');
    let html = '';
    cardTrending.forEach((card) => {
      const value = card.getAttribute('data-id');
      this.ids.forEach((id) => {
        if (id == value) {
          const btnfvr = card.querySelector('.card-trending-status') as HTMLElement;
          const imga = btnfvr.querySelector('img') as HTMLImageElement;
          imga.src = `${apimv}ic-heart-3d-hv.svg`;
        }
      });
    });
  }
  displayDataFavorites(movies, ids) {
    this.movies = movies;
    this.ids = Array.isArray(ids) ? ids : [ids];
    const favorite = document.querySelector('.favorite') as HTMLElement;
    let html = '';
    this.movies.forEach((movie) => {
      this.ids.forEach((id) => {
        if (movie.id === id) {
          movie.favorites = 'ic-heart-3d-hv';
          html += cardTrending(movie);
        }
      });
    });
    favorite.innerHTML = html;
  }
  displayDataContinue(movies, ids, idmv) {
    this.movies = movies;
    this.ids = ids;
    this.idmv = Array.isArray(idmv) ? idmv : [idmv];
    const continues = document.querySelector('.movie-center-continue-card') as HTMLElement;
    let html = '';
    this.movies.forEach((movie) => {
      this.ids.forEach((id) => {
        if (movie.id === id.id) {
          html += cardTrending(movie);
        }
      });
    });
    continues.innerHTML = html;
    const cardtr = continues.querySelectorAll('.card-trending');
    cardtr.forEach((card) => {
      this.idmv.forEach((id) => {
        if (id === card.getAttribute('data-id')) {
          const btnfvr = card.querySelector('.card-trending-status') as HTMLInputElement;
          const imga = btnfvr.querySelector('img') as HTMLImageElement;
          imga.src = `${apimv}ic-heart-3d-hv.svg`;
        }
      });
    });
  }
  bindAddToFavorite(handle) {
    const button = document.querySelectorAll('.btn-addFavorite');
    button.forEach((btn) => {
      btn.addEventListener('click', () => {
        const parentDiv = btn.closest('.card-trending');
        if (parentDiv) {
          const imga = parentDiv.querySelector('.image-status') as HTMLImageElement;
          if (imga.src === '${apimv}ic-heart-3d.svg') {
            imga.src = `${apimv}ic-heart-3d-hv.svg`;
          } else if (imga.src === `${apimv}ic-heart-3d-hv.svg`) {
            imga.src = `${apimv}ic-heart-3d.svg`;
          }
          const id = parentDiv.getAttribute('data-id');
          handle(id);
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      });
    });
  }
}

export default MovieView;
