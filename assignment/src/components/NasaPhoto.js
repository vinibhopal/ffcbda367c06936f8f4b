
import React,{useState,useEffect} from "react";
import NavBar from "./NavBar";

const apiKey= process.env.clIo9Okj7BxxszKTTTo3sANx3Iu6KPMXge2NNKO;
export default function NasaPhoto(){
    const[photoData,setPhotoData]=useState(null);
    useEffect(()=>{
        fetchPhoto();
        async function fetchPhoto(){
            const res=await fetch(
                "https://api.nasa.gov/planetary/apod?api_key=7clIo9Okj7BxxszKTTTo3sANx3Iu6KPMXge2NNKO"
            )
            const data= await res.json();
            setPhotoData(data);
        }
    },[]);

    if(!photoData) return <div/>

    return(
        <>
        <NavBar/>
        <div className="nasa-photo">
            {photoData.media_type==="image"}
            <img
            src={photoData.url}
            alt={photoData.title}
            className="photo"></img>
            
        <div>
            <h1>{photoData.title}</h1>
            <p className="data">{photoData.data}</p>
            <p className="explanation">{photoData.explanation}</p>
        </div>
        </div>
        </>
    )
}