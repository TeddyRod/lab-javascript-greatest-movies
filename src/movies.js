/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array){
    let yearArray = [...array]
    yearArray.sort(compare)
    return yearArray
  }
  
  function compare(movie1, movie2) {
    if (movie1.year > movie2.year) {
      return 1
    }else if (movie1.year < movie2.year) {
      return -1
    }else {
      return movie1.title.localeCompare(movie2.title)
    }
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies (array) {
    let manyArray = [...array]
    manyArray.filter(movieFilter)
    return manyArray.Length
}

function movieFilter (movie) {
    if (movie.director == "Steven Spielberg" && movie.genre.includes("drama")) {
        return true
    }
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabatetically (array) {
    let films = array.map(function(movie){
        return movie.title
    })
    let orderedFilms = films.sort()
    return orderedFilms.slice(0, 20)
}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
