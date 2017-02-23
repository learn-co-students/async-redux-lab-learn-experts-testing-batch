const fetch = require('node-fetch');


export const fetchCats = () => {
  const cats = fetch('http://localhost:3000/db')
    .then((res) => {
      return res.json()
    })
    .then((fetchedCats) => {
      return fetchedCats.images;
    })

  return {
    type: "FETCH_CATS",
    payload: cats
  }
}
