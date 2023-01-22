import React, { useEffect, useState } from "react";


const Lastfm = () => {

    const [lfmData, updateLfmData] = useState({});
    const userName = 'raminhbb'
    const apiKey ='32eb2d7a7dae121619b5441cf61f44f2'

    useEffect( () => {

      fetch(`https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=australia&user=${userName}&api_key=${apiKey}&format=json`)
      .then(response => {
        if (response.ok) {
          console.log(response)
          return response.json();
        }
        throw new Error('error');
      })
      .then((data) =>{
        console.log(data)
        updateLfmData(data)
      })
      .catch(() => {
          console.log("error occuerd!");
          updateLfmData({ error: 'Whoops! Something went wrong with Last.fm' })
      }
      );

    },[])


    const fetchData = () => {

    }

    return (
        <>
        {lfmData ? "ok" : null}
        </>
    )

}

const Lastfm3 = () => {

  const [lfmData, updateLfmData] = useState({});
  const userName = 'raminhbb'
  const apiKey ='32eb2d7a7dae121619b5441cf61f44f2'

  useEffect( () => {

    fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Cher&user=${userName}&api_key=${apiKey}&format=json`)
    .then(response => {
      if (response.ok) {
        console.log(response)
        return response.json();
      }
      throw new Error('error');
    })
    .then((data) =>{
      console.log(data)
      updateLfmData(data)
    })
    .catch(() => {
        console.log("error occuerd!");
        updateLfmData({ error: 'Whoops! Something went wrong with Last.fm' })
    }
    );

  },[])


  const fetchData = () => {

  }

  return (
      <>
      {lfmData ? "ok" : null}
      </>
  )

}

const Lastfm2 = () => {

  const [lfmData, updateLfmData] = useState({});
  const userName = 'raminhbb'
  const apiKey ='32eb2d7a7dae121619b5441cf61f44f2'

  useEffect( () => {

    fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${userName}&api_key=${apiKey}&limit=1&nowplaying=true&format=json`)
    .then(response => {
      if (response.ok) {
        console.log(response)
        return response.json();
      }
      throw new Error('error');
    })
    .then(data => updateLfmData(data))
    .catch(() => {
        console.log("error occuerd!");
        updateLfmData({ error: 'Whoops! Something went wrong with Last.fm' })
    }
    );

  },[])


  const fetchData = () => {

  }

  return (
      <>
      {lfmData ? "ok" : null}
      </>
  )

}

export default Lastfm;