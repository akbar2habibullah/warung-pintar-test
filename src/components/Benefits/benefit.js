import React from 'react';
import Img from "../UI/image";

export default function Benefit({images, title}) {
    return (
        <div className="benefit">
          <Img filename={images} alt={title}/>
          <h2>{title}</h2>
          <p>
            Jump off balcony, onto stranger's head. Chase ball of string hide when
            guests come over.
          </p>
        </div>
    )
}
