interface ServiceCardProps {
  title: string
  description: string
}

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="bg-black p-6 rounded-lg shadow-lg border border-gray-800 hover:border-[var(--color-accent)] transition-colors duration-300">
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <a href="#" className="text-[var(--color-accent)] hover:underline transition-colors duration-300">Learn More</a>
    </div>
  )
}
