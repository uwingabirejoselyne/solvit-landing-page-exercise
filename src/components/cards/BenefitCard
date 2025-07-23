import { Layers } from "lucide-react"

export const BenefitCard = ({ title, description, className = "" }) => {
  return (
    <div
      className={`bg-teal-50 p-4 sm:p-6 rounded-lg text-center space-y-3 sm:space-y-4 max-w-xs mx-auto ${className}`}
    >
      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto">
        <Layers className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
      </div>
      <h3 className="text-base sm:text-lg md:text-xl font-bold text-black">{title}</h3>
      <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}
