class Movie {
    id: string;
    name: string;
    year: string;
    type: string;
    poster: string;
    link: string;
    duration: string;
    description: string;
    evaluate: string;
    favorites: string;
  
    constructor({
      id,
      name,
      year,
      type,
      poster,
      link,
      duration,
      description,
      evaluate,
      favorites,
     }: {
      id: string;
      name: string;
      year: string;
      type: string;
      poster: string;
      link: string;
      duration: string;
      description: string;
      evaluate: string;
      favorites: string;
     }) {
    
      this.id = id;
      this.name = name;
      this.year = year ;
      this.type = type ;
      this.poster = poster ;
      this.link = link ;
      this.duration = duration;
      this.description = description ;
      this.evaluate = evaluate;
      this.favorites = favorites;
    }
  }
  
  export default Movie;