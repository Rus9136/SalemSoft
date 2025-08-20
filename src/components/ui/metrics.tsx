'use client'

import { useEffect, useState } from 'react'

interface Metric {
  value: string
  label: string
  suffix?: string
}

interface MetricsProps {
  metrics: Metric[]
  className?: string
}

export function Metrics({ metrics, className = '' }: MetricsProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${className}`}>
      {metrics.map((metric, index) => (
        <div 
          key={index} 
          className={`text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <div className="text-3xl md:text-4xl font-bold text-accent mb-2 font-heading">
            {metric.value}
            {metric.suffix && (
              <span className="text-fg">{metric.suffix}</span>
            )}
          </div>
          <div className="text-sm text-fg-muted font-medium uppercase tracking-wider">
            {metric.label}
          </div>
        </div>
      ))}
    </div>
  )
}