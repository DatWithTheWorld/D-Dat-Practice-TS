class Router {
  routes: { path: string; component: any }[];
  currentRoute: any;

  constructor(root: any) {
    this.routes = [];
    this.currentRoute = null;
  }

  addRoute(path: string, component: any): void {
    this.routes.push({ path, component });
  }

  changeRoute(): void {
    const path = window.location.pathname;
    const route = this.routes.find((route) => route.path === path);
    if (route) {
      const { component } = route;
      const container = document.querySelector('.container');
      if (typeof component === 'string') {
        if (container) {
          container.innerHTML = component;
        }
      } else {
        if (container) {
          container.innerHTML = '';
          if (component) {
            container.appendChild(component);
          }
        }
      }
    }
  }
}

export default Router;