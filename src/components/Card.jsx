import { useOnScreen } from '../hooks/useOnScreen'

export default function Card({ 
  icon, 
  title, 
  description, 
  gradient = 'from-blue-500 to-cyan-500',
  delay = 0,
  children 
}) {
  const [ref, isVisible] = useOnScreen(0.3)

  return (
    <div 
      ref={ref}
      className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {icon && (
        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
          {icon}
        </div>
      )}
      
      {title && (
        <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
      )}
      
      {description && (
        <p className="text-gray-600 leading-relaxed">{description}</p>
      )}
      
      {children && (
        <div className="mt-4">
          {children}
        </div>
      )}
    </div>
  )
}

export function ServiceCard({ 
  icon, 
  title, 
  items = [], 
  gradient = 'from-blue-500 to-cyan-500',
  delay = 0 
}) {
  const [ref, isVisible] = useOnScreen(0.3)

  return (
    <div 
      ref={ref}
      className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      
      <h3 className="text-xl font-bold mb-4 text-gray-800">{title}</h3>
      
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-gray-600">
            <svg 
              className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                clipRule="evenodd" 
              />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function FeatureCard({ 
  icon, 
  title, 
  description, 
  bgColor = 'bg-white/10',
  delay = 0 
}) {
  const [ref, isVisible] = useOnScreen(0.3)

  return (
    <div 
      ref={ref}
      className={`${bgColor} backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl transition-all duration-1000 hover:scale-105 hover:bg-white/15 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center shadow-lg">
          {icon}
        </div>
        <h2 className="text-4xl font-bold text-white">{title}</h2>
      </div>
      <p className="text-lg text-gray-200 leading-relaxed">{description}</p>
    </div>
  )
}

export function StepCard({ 
  step, 
  title, 
  description, 
  showConnector = false,
  delay = 0 
}) {
  const [ref, isVisible] = useOnScreen(0.3)

  return (
    <div 
      ref={ref}
      className={`text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative mb-6">
        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center text-white font-bold text-2xl shadow-xl hover:scale-110 transition-transform duration-300">
          {step}
        </div>
        {showConnector && (
          <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
        )}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  )
}
