import DestinationCards from "./DestinationCards"

const DestCardFrame = () => {
  return (
    <div className="card_frame">
      
      <DestinationCards imageUrl="./assets/images/pondi.png" destinationName="PONDICHERRY" locDescription="This is title of the travel package that is being featured here." />
      <DestinationCards imageUrl="./assets/images/blore.png" destinationName="BANGLORE" locDescription="The languages only differ in their grammar, their pronun and their most common words." />
      <DestinationCards imageUrl="./assets/images/kkl.png" destinationName="KODAIKANAL" locDescription="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."/>
    </div>
  )
}

export default DestCardFrame
