function RenderHtml({ data }) {
  if (!data || !data.data || !data.data.results) {
    return <div>No data available.</div>;
  }
  console.log(data)

  const mapData = data.data.results.map((dataM) => ({
    id: dataM.id,
    name: dataM.name,
    path: dataM.thumbnail.path,
    extension: dataM.thumbnail.extension, 
    modified: dataM.modified ,
    series: dataM.series.items.map((item) => {
      const { name } = item;
      return `${name} `;
    }).join(", "),

    events: dataM.events.items.map((item) => {
      const { name , resourceURI  } = item;
      return `Event: ${name} , Acces for more info :  ${resourceURI}` ;
    }).join(", "),

   

  }));

  return (
    
    <div class="container">
     <div class="logo"></div>
      {mapData.map((item) => (
        <div key={item.id}>
         <div>  <p>Hero: {item.name}</p> </div>
          <img src={`${item.path}.${item.extension}`} alt={item.name} />
          <div>Last modification: {item.modified}</div>
          <div class="container_series"><div>Series: {item.series} </div></div>
          <div class="container_events"><h4>{item.events}</h4></div>
        </div>
      ))}
    </div>
  );
}

export default RenderHtml;
