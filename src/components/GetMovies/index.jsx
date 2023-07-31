// import React, {useState,useEffect} from "react";
// import './style.css';
// import { getMovies } from "../../utils/utilities";
import ImageContainer from "../../atoms/Image-container";

// const IMAGE_BASE_URL=process.env.REACT_APP_BASE_IMAGE_BASE_URL;

// const GetMovies = () =>{
//     const [movies, setMovies] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [search, setSearch] = useState([]);


// const movieSearch = (event) => {
//      let searchValue = event.target.value.trim().toLowerCase();
//      if(searchValue === ""){
//         setSearch(movies)
//      }
//      else{
//         let search = movies.filter((item => item.title.toLowerCase().includes(movieSearch)))
//         setSearch(search)
//      }
// }
//     useEffect(() =>{
//         (async()=>{
//             setLoading(true);
//             const movies=await getMovies();
//             console.log({movies});
//             setMovies(movies.results);
//             setLoading(false);
//         })();
//     }, []);
//     if(loading){
//         return <h1>Loading movies...</h1>
//     }
//     return(
//         <div className="container">
//             {/* <div>
//                 <input type="text" placeholder="Search"/>
//             </div> */}
//             <div className="ImageContainer">
//             {loading === false & search.length > 0 &&  search.map(
//                 item=>(
//              < ImageContainer imageSource={`${IMAGE_BASE_URL}${item.poster_path}`} alt={item.title} key={item.id}/> 
//             ))}
//              </div>
//          {movies && !loading && movies.length === 0 &&(
//             <div>
//             <h1>No movies found</h1>
//             </div>
//         )}
//         </div>
//     );
// };
// export default GetMovies;

import React, {useState,useEffect} from "react";
import './style.css';
import { getMovies } from "../../utils/utilities";
const IMAGE_BASE_URL=process.env.REACT_APP_BASE_IMAGE_BASE_URL;
const GetMovies = () =>{
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState([]);

    const movieSearch = (event) => {
     let searchValue = event.target.value.trim().toLowerCase();
     if(searchValue === ""){
        setSearch(movies)
     }
     else{
        let search = movies.filter((item => item.title.toLowerCase().includes(movieSearch)))
        setSearch(search)
     }
}
    useEffect(() =>{
        (async()=>{
            setLoading(true);
            const movies=await getMovies();
            console.log({movies});
            setMovies(movies.results);
            setLoading(false);
        })();
    }, []);
    if(loading){
        return <h1>Loading movies...</h1>
    }
    return(
        <>
        <div>
            <a href="home">Home</a>
            <a href="movies"></a>
            <a href="my list">My list</a>
            <input type="text" placeholder="Search" ></input>
            <button onClick={movieSearch}>Search</button>

        </div>
        <div className="container">

                {movies &&
                    !loading &&
                    movies.length > 0 &&
                    movies.map(item => (
                        <div className="image-container">

                            {loading === false & search.length > 0 && search.map(
                                item => (
           < ImageContainer imageSource={`${IMAGE_BASE_URL}${item.poster_path}`} alt={item.title} key={item.id}/> 
))}
                            <img src={`${IMAGE_BASE_URL}${item.poster_path}`} alt={item.title} />
                        </div>
                    ))}
                {movies && !loading && movies.length === 0 && (
                    <div>
                        <h1>No movies found</h1>
                    </div>
                )}
            </div>
            </>
    );
};
export default GetMovies;






