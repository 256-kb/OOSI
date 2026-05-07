"use client"

import { cn } from "@/lib/utils"
import { filterTags } from "@/lib/mock-profiles"

interface FilterTagsProps {
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export function FilterTags({ activeFilter, onFilterChange }: FilterTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {filterTags.map((tag) => (
        <button
          key={tag.id}
          onClick={() => onFilterChange(tag.value)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
            "border border-border/50 hover:border-border",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            activeFilter === tag.value
              ? "bg-primary text-primary-foreground border-primary hover:bg-primary/90"
              : "bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted"
          )}
        >
          {tag.label}
        </button>
      ))}
    </div>
  )
}
