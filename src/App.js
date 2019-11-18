/* eslint-disable jsx-quotes */
import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

/* JSX & Props */
// const movieList = [
//   {
//     id: 1,
//     name: 'Jocker',
//     actor: 'Joaquin',
//     img: 'https://i.ytimg.com/vi/5jKxSmqWyP8/maxresdefault.jpg',
//     rating: 5
//   },
//   {
//     id: 2,
//     name: 'Mother',
//     actor: 'Bin',
//     img: 'https://i.ytimg.com/vi/K0Ri0bUsZK8/maxresdefault.jpg',
//     rating: 4
//   }
// ];

// function Movie({
//  name, actor, img, rating
// }) {
//   return (
//     <div>
//       <h1>I like {name}</h1>
//       <h1>The actor is {actor}</h1>
//       <h1>Rating is {rating}/5.0</h1>
//       <img src={img} alt={name} />
//     </div>
//   );
// }

// Movie.propTypes = {
//   name: PropTypes.string.isRequired,
//   actor: PropTypes.string.isRequired,
//   img: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
// };

// function App() {
//   return (
//     <div>
//       {movieList.map((movies) => (
//         <Movie
//           key={movies.id}
//           name={movies.name}
//           actor={movies.actor}
//           img={movies.img}
//           rating={movies.rating}
//         />
//       ))}
//     </div>
//   );
// }

/* Component Life Cycle */
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("1. constructor");
//   }
//   state = {
//     count: 0
//   };
//   add = () => {
//     this.setState(current => ({ count: current.count + 1 }));
//   };
//   minus = () => {
//     this.setState(current => ({ count: current.count - 1 }));
//   };
//   componentDidMount() {
//     console.log("3. componentDidMount");
//   }
//   componentDidUpdate() {
//     console.log("componentDidUpdate");
//   }
//   componentWillUnmount() {
//     console.log("componentWillUnmount");
//   }
//   render() {
//     console.log("2. render");
//     return (
//       <div>
//         <h1>The number is: {this.state.count}</h1>
//         <button onClick={this.add}>Add</button>
//         <button onClick={this.minus}>Minus</button>
//       </div>
//     );
//   }
// }

/* Using a component Life Cycle */
class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts.lt/api/v2/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
    // this.setState({ movies });
    console.log({ movies });
  };
  componentDidMount() {
    console.log("componentDidMount");
    this.getMovies();
  }
  render() {
    console.log("render");
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
