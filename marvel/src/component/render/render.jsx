function RenderHtml({ data }) {
  if (!data || !data.data || !data.data.results) {
    return <div>No data available.</div>;
  }

  const mapData = data.data.results.map((dataM) => ({
    id: dataM.id,
    name: dataM.name,
    path: dataM.thumbnail.path,
    extension: dataM.thumbnail.extension,
  }));

  return (
    <div>
      {mapData.map((item) => (
        <div key={item.id}>
          <p>Name: {item.name}</p>
          <img src={`${item.path}.${item.extension}`} alt={item.name} />
        </div>
      ))}
    </div>
  );
}

export default RenderHtml;
