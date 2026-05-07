"use client";

import { SearchX, ArrowLeft, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NoResultsProps {
  searchQuery: string;
  onNewSearch: () => void;
  onRetry: () => void;
}

export function NoResults({ searchQuery, onNewSearch, onRetry }: NoResultsProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 animate-in fade-in-0 duration-500">
      <div className="p-4 rounded-full bg-destructive/10 border border-destructive/20 mb-6">
        <SearchX className="h-12 w-12 text-destructive" />
      </div>
      
      <h2 className="text-2xl font-bold text-foreground mb-2 text-center">
        Aucun resultat trouve
      </h2>
      
      <p className="text-muted-foreground text-center max-w-md mb-2">
        Nous n&apos;avons trouve aucun profil correspondant a votre recherche.
      </p>
      
      {searchQuery && (
        <p className="text-sm text-muted-foreground/70 mb-6 text-center">
          Recherche : &quot;{searchQuery}&quot;
        </p>
      )}

      <div className="bg-card border border-border rounded-xl p-6 mb-8 max-w-md w-full">
        <h3 className="font-semibold text-foreground mb-3">Suggestions :</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary">-</span>
            Verifiez l&apos;orthographe du nom ou prenom
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">-</span>
            Essayez avec moins de criteres de recherche
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">-</span>
            Utilisez uniquement le nom ou le prenom
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">-</span>
            Essayez une autre ville ou laissez ce champ vide
          </li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          variant="outline"
          onClick={onRetry}
          className="border-border hover:bg-secondary"
        >
          <RefreshCw className="h-4 w-4 mr-2" />
          Reessayer
        </Button>
        <Button
          onClick={onNewSearch}
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Nouvelle recherche
        </Button>
      </div>
    </div>
  );
}
