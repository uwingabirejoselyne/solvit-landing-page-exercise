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
    <div className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-8 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 sm:space-y-6 md:space-y-8 mb-12 sm:mb-16 md:mb-20">
          <h3 className="text-teal-600 font-semibold text-lg sm:text-xl">Your Benefits</h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
            Why Choose Us
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Unleash your productivity with our premium workspace solutions. Elevate your work game and join the winning
            team today.
          </p>
        </div>

        <div className="block lg:hidden space-y-6">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} title={benefit.title} description={benefit.description} />
          ))}

          <div className="aspect-[4/3] rounded-lg overflow-hidden my-8">
            <img
              src="https://icowork-static-prd.s3.amazonaws.com/media/spaces/89/_MG_1688_1.jpg"
              alt="Modern office workspace with pendant lights and seating areas"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 xl:w-96 h-80 xl:h-96 rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Modern office workspace with pendant lights and seating areas"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -left-56 xl:-left-64 top-0 space-y-8">
                <BenefitCard title={benefits[0].title} description={benefits[0].description} />
                <BenefitCard title={benefits[1].title} description={benefits[1].description} />
                <BenefitCard title={benefits[2].title} description={benefits[2].description} />
              </div>

              <div className="absolute -right-56 xl:-right-64 top-0 space-y-8">
                <BenefitCard title={benefits[3].title} description={benefits[3].description} />
                <BenefitCard title={benefits[4].title} description={benefits[4].description} />
                <BenefitCard title={benefits[5].title} description={benefits[5].description} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
