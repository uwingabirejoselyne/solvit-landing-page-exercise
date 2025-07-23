export const Event = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          alt={title}
        />
      </div>
      <div className="p-4 sm:p-6 flex flex-col items-center text-center space-y-3 sm:space-y-4">
        <div className="relative">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-teal-600">{title}</h2>
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-12 sm:w-16 h-1 bg-teal-600 rounded-full"></div>
        </div>
        <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-xs sm:max-w-sm">
          {description}
        </p>
        <button className="text-teal-600 hover:text-teal-700 hover:bg-teal-50 font-semibold mt-auto py-2 px-4 rounded transition-colors duration-200">
          Learn More
        </button>
      </div>
    </div>
  )
}
