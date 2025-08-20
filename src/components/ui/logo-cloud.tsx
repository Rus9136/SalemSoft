import { 
  MessageSquare, 
  Phone, 
  Mail, 
  Globe, 
  CreditCard, 
  BarChart3,
  Settings,
  Users
} from 'lucide-react'

interface Integration {
  name: string
  icon: keyof typeof iconMap
}

const iconMap = {
  MessageSquare,
  Phone,
  Mail,
  Globe,
  CreditCard,
  BarChart3,
  Settings,
  Users
}

interface LogoCloudProps {
  integrations: Integration[]
  title?: string
  className?: string
}

export function LogoCloud({ integrations, title, className = '' }: LogoCloudProps) {
  return (
    <div className={`text-center ${className}`}>
      {title && (
        <h3 className="text-sm font-semibold text-fg-muted uppercase tracking-wider mb-8">
          {title}
        </h3>
      )}
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
        {integrations.map((integration, index) => {
          const IconComponent = iconMap[integration.icon]
          return (
            <div
              key={index}
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-surface/50 border border-line/50 hover:border-accent/30 transition-all duration-200"
            >
              <IconComponent className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium text-fg">
                {integration.name}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}