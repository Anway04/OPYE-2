
// const DestinationCards = ({ imageUrl, destinationName, locDescription }) => {
//   return (
//     <div className="card">
//       <div className="card_img">
//         <img src={imageUrl} alt="destinationImg"/>
//         <h1>{destinationName}</h1>
//       </div>
//       <div className="card_caption">
//         <h2>{destinationName}</h2>
//         <p>{locDescription}</p>
//       </div>
//     </div>
//   )
// }

// export default DestinationCards
const DestinationCards = ({ imageUrl, destinationName, locDescription }) => {
  return (
    <div className="card max-w-sm">
      <div className="card_img">
        <img src={imageUrl} alt="destinationImg" className="w-full h-auto" />
        <h1 className="text-xl font-bold">{destinationName}</h1>
      </div>
      <div className="card_caption mt-4">
        <h2 className="text-lg font-semibold">{destinationName}</h2>
        <p className="text-sm">{locDescription}</p>
      </div>
    </div>
  );
};

export default DestinationCards;
