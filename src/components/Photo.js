import React, { useState, useEffect } from "react";
import axios from "axios";

import { NasaPhoto } from "./styling";

export default function Photo() {
  const [photo, setPhoto] = useState([])

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=TfgQP58oG2P6QBzQ78EeYiY0GvIZABs7PfFDmrPc')
      .then(response => {
        console.log(response)
        setPhoto(response.data)
      })
      .catch(err => {
        console.log("Err: ", err)
      })
  }, [])
  console.log("Photo: ", photo)

  return (
    <div className="container">
      <NasaPhoto src={photo.hdurl} alt="photo-of-the-day" />
      <p className="text NPOD">Astronomy Picture of the Day</p>
      <p className="text date">{photo.date}</p>
      <p className="text title">{photo.title}</p>
      <p className="text explanation">{photo.explanation}</p>
    </div>
  )
}