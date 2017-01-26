import React, {Component} from 'react';

const CatList = (props) => {
  return <div>
    {props.catPics.map((cat, index) => {
      return <img href={cat.url} />
    })}
  </div>
}

export default CatList
