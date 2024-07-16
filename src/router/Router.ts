class Router {
    constructor(root) {
      this.routes = [];
      this.currentRoute = null;
    }
  
    addRoute(path, component) {
      this.routes.push({ path, component });
    }
  
    changeRoute() {
      const path = window.location.pathname;
      const route = this.routes.find((route) => route.path === path);
      if (route) {
        const { component } = route;
        const container = document.querySelector('.container');
        if (typeof component === 'string') {
          container.innerHTML = component;
        } else {
          container.innerHTML = '';
          if (component) {
            container.appendChild(component);
          }
        }
      }
    }
  }
  
  export default Router;
