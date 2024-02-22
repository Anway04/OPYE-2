import DealsFrame from "./DealsFrame";

const HottestDeals = () => {
    return (
      <section className="pop_dest p-8 lg:p-16" id="pop_dest">
        <div className=" subheadtext text-2xl lg:text-4xl">
          Hottest Deals
        </div>
        <div className="deals">
          <DealsFrame />
        </div>
      </section>
    );
  };
  
  export default HottestDeals;