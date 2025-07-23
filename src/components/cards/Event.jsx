import React from 'react'

export const Event = ({title,description,image}) => {
  return (
       <div className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          alt={title}
        />
      </div>
      <div className="p-6 flex flex-col items-center text-center space-y-4">
        <div className="relative">
          <h2 className="text-xl md:text-2xl font-bold text-teal-600">{title}</h2>
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-16 h-1 bg-teal-600 rounded-full"></div>
        </div>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-sm">{description}</p>
        <button variant="ghost" className="text-teal-600 hover:text-teal-700 hover:bg-teal-50 font-semibold mt-auto">
          Learn More
        </button>
      </div>
    </div>
  )
}
