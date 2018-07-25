const assert = require('assert');
const Cinema = require('../models/cinema.js');
const Film = require('../models/film.js');

describe('Cinema', function () {

  let moonlight;
  let bladeRunner;
  let dunkirk;
  let blackPanther;
  let trainspotting;
  let films;
  let cinema;

  beforeEach(function () {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
    bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
    dunkirk = new Film('Dunkirk', 'history', 2017, 96);
    blackPanther = new Film('Black Panther', 'action', 2018, 134);
    trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
    cinema = new Cinema(films);
  });

  it('should have a collection of films', function () {
    const actual = cinema.films;
    assert.deepStrictEqual(actual, films);
  });

  it('should be able to get a list of film titles', function(){
    let result = ['Moonlight', 'Blade Runner 2049', 'Dunkirk', 'Black Panther', 'T2 Trainspotting'];
    let actual = cinema.filmTitles();
    assert.deepStrictEqual(actual, result)
  });

  it('should be able to find a film by title', function(){
    let result = moonlight;
    let actual = cinema.filmByTitle('Moonlight');
    assert.deepStrictEqual(actual, result);
  });

  it('should be able to filter films by genre', function(){
    let result = [moonlight, trainspotting];
    let actual = cinema.filmsByGenre('drama');
    assert.deepStrictEqual(actual, result);
  });

  it('should be able to check whether there are some films from a particular year', function() {
    let result = true;
    let actual = cinema.filmsByYear(2017);
    assert.deepStrictEqual(actual, result);
  });

  it('should be able to check whether there are no films from a particular year', function() {
    let result = false;
    let actual = cinema.filmsByYear(2000);
    // console.log(actual);
    assert.deepStrictEqual(actual, result);
  });

  it('should be able to check whether all films are over a particular length', function() {
    let result = [bladeRunner, blackPanther];
    let actual = cinema.filmsOverLength(120);
    assert.deepStrictEqual(actual, result);
  });

  it('should be able to calculate total running time of all films', function() {
    let result = 622;
    let actual = cinema.getTotalRunTime();
    assert.deepStrictEqual(actual, result);
  });

  it('Cinema should be able to filter films by year', function() {
    let result = [bladeRunner, dunkirk, trainspotting];
    let actual = cinema.getMoviesByProperty('year', 2017);
    assert.deepStrictEqual(actual, result);
  })

});

module.exports = Cinema;
