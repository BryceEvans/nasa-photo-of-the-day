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
    <div>
      <NasaPhoto src={photo.hdurl} alt="photo-of-the-day" />
    </div>
  )
}