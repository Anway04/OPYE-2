
const DestinationCards = ({ imageUrl, destinationName, locDescription }) => {
  return (
    <div className="card">
      <div className="card_img">
        <img src={imageUrl} alt="destinationImg"/>
        <h1>{destinationName}</h1>
      </div>
      <div className="card_caption">
        <h2>{destinationName}</h2>
        <p>{locDescription}</p>
      </div>
    </div>
  )
}

export default DestinationCards
