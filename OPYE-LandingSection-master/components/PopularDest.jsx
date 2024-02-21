import DestCardFrame from "./DestCardFrame"

// const PopularDest = () => {
//   return (
//     <section className="pop_dest" id="pop_dest">
//       <div className="subheadtext text-2xl lg:text-4xl">
//         Popular Destinations
//       </div>
//       <div className="destination">
//         <DestCardFrame />
//       </div>
//     </section>
//   )
// }

// export default PopularDest

const PopularDest = () => {
  return (
    <section className="pop_dest p-8 lg:p-16" id="pop_dest">
      <div className=" subheadtext text-2xl lg:text-4xl">
        Popular Destinations
      </div>
      <div className="destination">
        <DestCardFrame />
      </div>
    </section>
  );
};

export default PopularDest;