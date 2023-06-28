import { useState } from "react";
import { useEffect } from "react";

const PreviewPokemon = ({ data }) => {
 
    const [dataMap, setDataMap] = useState();
    const [mappedData, setMappedData] = useState(null);

    useEffect(() => {
      setDataMap([{data}]);
      mapPath();
    }, [data]);

  
    function mapPath() {
        if (dataMap && dataMap[0].data && dataMap[0].data.name) {
            const newData = {
                id: dataMap[0].data.id,
                name: dataMap[0].data.name,
                img: dataMap[0].data.sprites.other.home.front_default,
                hp: dataMap[0].data.stats[0].base_stat,
                attack: dataMap[0].data.stats[1].base_stat,
                defense: dataMap[0].data.stats[2].base_stat,
                speed: dataMap[0].data.stats[5].base_stat,
                type: dataMap[0].data.types[0].type.name,
              };
        
              setMappedData(newData);
    
         
        } 

  
      }
  

     return (
        <div >
     
      {mappedData && (
        <div key={mappedData.id} class='card ' >  
        <div className={mappedData.type} >   
        <div><img src={mappedData.img} alt='pokemon-foto' /></div>
        <div>{mappedData.name.toUpperCase()}</div>
        <div>Hp: {mappedData.hp}</div>
        <div>attack: {mappedData.attack}</div>
        <div>Defense: {mappedData.defense}</div>
        <div>Speed: {mappedData.speed}</div>
      
        </div>
        </div>
        )}
      </div>
     )
   
  
  };
  
  export default PreviewPokemon;
  