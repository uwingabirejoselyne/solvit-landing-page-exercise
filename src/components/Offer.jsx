import { Event } from "./cards/Event"

export const Offer = () => {
  const data = [
    {
      id: 1,
      title: "Renting Offices",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit mollis mauris",
      image: "https://tse1.mm.bing.net/th/id/OIP.fzteOlMnCz-Zmq8UvyHUXwHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 2,
      title: "Coffee Shop",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit mollis mauris",
      image: "https://th.bing.com/th/id/R.11767d0d75deb1ecbfab56c09be82278?rik=4T6BmuTV6u0oUQ&pid=ImgRaw&r=0",
    },
    {
      id: 3,
      title: "Private event Space",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit mollis mauris",
      image: "https://i0.wp.com/weddingseason.ie/wp-content/uploads/2022/11/Untitled-design-26.png",
    },
  ]

  return (
    <div className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center space-y-4 sm:space-y-6 md:space-y-8 mb-12 sm:mb-16 md:mb-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
            We Offer creative working <br className="hidden sm:block" /> environments
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed text-gray-600">
            Find your perfect workspace. Choose from versatile options <br className="hidden md:block" /> tailored to
            your needs.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {data.map((item) => (
            <Event key={item.id} title={item.title} image={item.image} description={item.description} />
          ))}
        </div>
      </div>
    </div>
  )
}
