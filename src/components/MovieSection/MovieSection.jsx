import React, { useState, useEffect } from 'react';
import './MovieSection.css';
import SingleComp from '../SingleComp/SingleComp';
import fetchMovieData from '../../Api';

export default function MovieSection() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieData = await fetchMovieData();
        setData(movieData.results);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='MovieSection'>
      {data && <SingleComp data={data} />}
    </div>
  );
}
