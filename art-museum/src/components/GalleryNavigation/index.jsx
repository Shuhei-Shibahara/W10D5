import React from "react";
import harvardArt from "../../data/harvardArt";
import { NavLink } from "react-router-dom";

const GalleryNavigation = ({galleries}) => {
    const galleryLink = galleries.map((gallery)=>{
        return(
            <NavLink to={`/galleries/${gallery.id}`} >
                <h1>{gallery.id}</h1>
            </NavLink>
        )     
        }
    )
    // return(
    //     <nav>
    //         <NavLink to="/" className="home">
    //             <h1>Galleries</h1>
    //         </NavLink>
    //     </nav>
    // )
    return galleryLink

}

export default GalleryNavigation