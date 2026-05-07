import { Users } from "lucide-react"

interface EmptyStateProps {
  title?: string
  description?: string
}

export function EmptyState({ 
  title = "Aucun profil trouvé", 
  description = "Essayez de modifier vos filtres ou votre recherche."
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-muted mb-4">
        <Users className="h-8 w-8 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground mt-1 max-w-sm">{description}</p>
    </div>
  )
}
