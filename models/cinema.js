const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
  return this.films.map(function(film) {
    return film.title;
  })
};

Cinema.prototype.filmByTitle = function(title){
  return this.films.find(function(film){
    return film.title === title;
  })
}

Cinema.prototype.filmsByGenre = function(genre){
  return this.films.filter(function(film){
    return film.genre === genre;
  })
}

Cinema.prototype.filmsByYear = function(year){
  return this.films.some(function(film){
    return film.year === year;
  })
}

Cinema.prototype.filmsOverLength = function(length){
  return this.films.filter(function(film){
    return film.length > length;
  })
}

Cinema.prototype.getTotalRunTime = function(){
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  result = this.films.map(film => film.length)
  return result.reduce(reducer);
}

Cinema.prototype.getMoviesByProperty = function(property, value){
  let movies =[];
  this.films.filter(function(film){
    if(film.hasOwnProperty(property) && Object.values(film).includes(value)){
      movies.push(film);
    }
  })
  return movies;
}

module.exports = Cinema;
