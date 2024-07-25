import React from 'react'
import { skipText } from "../constants";

const Skip = () => {
  return (
    <div id="skip">
      {skipText.map((skip, key) => (
        <>
          <a href={skip.title} key={key}>{skip.text}</a>
        </>
      ))}
    </div>
  )
}

export default Skip