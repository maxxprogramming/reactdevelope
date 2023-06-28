import React, { useState, useEffect } from 'react';
import RenderHtml from '../render/render';

function MarvelData() {
  const [dataMarvel, setDataMarvel] = useState();

  useEffect(() => {
    fetchMarvelCharacters();
  }, []);

  async function fetchMarvelCharacters() {
    try {
      const response = await fetch(
        'https://gateway.marvel.com/v1/public/characters?ts=1000&apikey=b819d866c81b5bd4e0cc05f9a943dba5&hash=d2920bc5270a5ef5760c5a3b1ce3e506'
      );
      const jsonData = await response.json();
      setDataMarvel(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    
  }, [dataMarvel]);

  return (
    <div>
      <RenderHtml data={dataMarvel} />
    </div>
  );
}


export default MarvelData;
