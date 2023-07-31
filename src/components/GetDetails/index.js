import React, {useState,useEffect} from "react";
import './style.css';
import { getDetails } from "../../utils/utilities";
// import {getMovies} from "../..utils/utilities";

const IMAGE_BASE_URL=process.env.REACT_APP_BASE_IMAGE_BASE_URL;

const GetDetails = () =>{
    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() =>{
        (async()=>{
            setLoading(true);
            const details=await getDetails();
            console.log({details});
            setDetails(details.results);
            setLoading(false);
        })();
    }, []);
    if(loading){
        return <h1>Loading movie description...</h1>
    }
    return(
        <div className="container">
            {details &&
            !loading &&
            details.length > 0 &&
            details.map(item=>(
                <div className="detail-container">
                    <img src={`${IMAGE_BASE_URL}${item.poster_path}`} alt={item.title} />
                </div>
            ))}
        {details && !loading && details.length === 0 &&(
            <div>
            <h1>No movies description found</h1>
            </div>
        )}
        </div>
    );
};
export default GetDetails;
