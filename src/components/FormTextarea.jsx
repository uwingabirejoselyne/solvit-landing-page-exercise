import { forwardRef } from "react"

export const FormTextarea = forwardRef(
  ({ label, error, placeholder, required, rows = 6, className = "", ...props }, ref) => {
    return (
      <div className="space-y-1">
        {label && (
          <label className="block text-sm font-medium text-gray-700">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          rows={rows}
          placeholder={placeholder}
          className={`w-full px-4 py-3 border-2 border-teal-300 rounded-lg focus:border-teal-500 focus:outline-none transition-colors duration-200 resize-none ${
            error ? "border-red-500" : ""
          } ${className}`}
          {...props}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    )
  },
)

FormTextarea.displayName = "FormTextarea"
