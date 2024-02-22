const DealsCards = ({ dealsName, DealsDescription }) => {
    return (
      <div className="card max-w-sm">
        <div className="card_img">
          
          {/* <h1 className="text-xl font-bold">{dealsName}</h1> */}
        </div>
        <div className="card_caption mt-4">
          <h2 className="text-lg font-semibold">{dealsName}</h2>
          <p className="text-sm">{DealsDescription}</p>
        </div>
      </div>
    );
  };
  
  export default DealsCards;