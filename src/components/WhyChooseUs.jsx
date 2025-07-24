import { BenefitCard } from "./cards/BenefitCard"

export const WhyChooseUs = () => {
  const benefits = [
    {
      title: "Creative Space",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "High Speed Wifi",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Parking Area",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "24/7 Access",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Great Location",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "outdoor space",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ]

  return (
    


<div className=" lg:grid grid-cols-3 gap-2 items-center ">
  {/* Left column: 1 card */}
  <div className="space-y-6">
    {benefits.slice(0, 3).map((benefit, index) => (
      <BenefitCard key={index} title={benefit.title} description={benefit.description} />
    ))}
  </div>

  {/* Center column: Image */}
  <div className="w-full h-full flex justify-center items-center">

      <img
        src="https://icowork-static-prd.s3.amazonaws.com/media/spaces/89/_MG_1688_1.jpg"
        alt="Modern office workspace"
        className="w-full h-full object-cover"
      />
 
  </div>

  {/* Right column: 3 cards */}
  <div className="space-y-6">
    {benefits.slice(3, 6).map((benefit, index) => (
      <BenefitCard key={index + 3} title={benefit.title} description={benefit.description} />
    ))}
  </div>
</div>




      
  
  )
}
