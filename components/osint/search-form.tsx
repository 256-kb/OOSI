"use client";

import { useState } from "react";
import { Search, User, MapPin, Phone, Mail, Building2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export interface SearchQuery {
  firstName: string;
  lastName: string;
  city: string;
  phone: string;
  email: string;
  workplace: string;
}

interface SearchFormProps {
  onSearch: (query: SearchQuery) => void;
  isSearching: boolean;
}

export function SearchForm({ onSearch, isSearching }: SearchFormProps) {
  const [query, setQuery] = useState<SearchQuery>({
    firstName: "",
    lastName: "",
    city: "",
    phone: "",
    email: "",
    workplace: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const hasInput = Object.values(query).some((v) => v.trim() !== "");
    if (hasInput) {
      onSearch(query);
    }
  };

  const handleClear = () => {
    setQuery({
      firstName: "",
      lastName: "",
      city: "",
      phone: "",
      email: "",
      workplace: "",
    });
  };

  const hasInput = Object.values(query).some((v) => v.trim() !== "");

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First Name */}
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-sm font-medium text-muted-foreground flex items-center gap-2">
            <User className="h-4 w-4" />
            Prenom
          </Label>
          <Input
            id="firstName"
            placeholder="Jean"
            value={query.firstName}
            onChange={(e) => setQuery({ ...query, firstName: e.target.value })}
            className="bg-input/50 border-border/50 focus:border-primary focus:ring-primary/20"
            disabled={isSearching}
          />
        </div>

        {/* Last Name */}
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-sm font-medium text-muted-foreground flex items-center gap-2">
            <User className="h-4 w-4" />
            Nom
          </Label>
          <Input
            id="lastName"
            placeholder="Dupont"
            value={query.lastName}
            onChange={(e) => setQuery({ ...query, lastName: e.target.value })}
            className="bg-input/50 border-border/50 focus:border-primary focus:ring-primary/20"
            disabled={isSearching}
          />
        </div>

        {/* City */}
        <div className="space-y-2">
          <Label htmlFor="city" className="text-sm font-medium text-muted-foreground flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Ville
          </Label>
          <Input
            id="city"
            placeholder="Paris"
            value={query.city}
            onChange={(e) => setQuery({ ...query, city: e.target.value })}
            className="bg-input/50 border-border/50 focus:border-primary focus:ring-primary/20"
            disabled={isSearching}
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-medium text-muted-foreground flex items-center gap-2">
            <Phone className="h-4 w-4" />
            Telephone
          </Label>
          <Input
            id="phone"
            placeholder="06 12 34 56 78"
            value={query.phone}
            onChange={(e) => setQuery({ ...query, phone: e.target.value })}
            className="bg-input/50 border-border/50 focus:border-primary focus:ring-primary/20"
            disabled={isSearching}
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-muted-foreground flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Email
          </Label>
          <Input
            id="email"
            placeholder="jean.dupont@email.com"
            value={query.email}
            onChange={(e) => setQuery({ ...query, email: e.target.value })}
            className="bg-input/50 border-border/50 focus:border-primary focus:ring-primary/20"
            disabled={isSearching}
          />
        </div>

        {/* Workplace */}
        <div className="space-y-2">
          <Label htmlFor="workplace" className="text-sm font-medium text-muted-foreground flex items-center gap-2">
            <Building2 className="h-4 w-4" />
            Entreprise / Ecole
          </Label>
          <Input
            id="workplace"
            placeholder="Google, Universite Paris..."
            value={query.workplace}
            onChange={(e) => setQuery({ ...query, workplace: e.target.value })}
            className="bg-input/50 border-border/50 focus:border-primary focus:ring-primary/20"
            disabled={isSearching}
          />
        </div>
      </div>

      <div className="flex items-center gap-3 pt-2">
        <Button
          type="submit"
          disabled={!hasInput || isSearching}
          className={cn(
            "flex-1 md:flex-none md:min-w-[200px] bg-primary hover:bg-primary/90 text-primary-foreground font-semibold",
            "transition-all duration-300",
            isSearching && "animate-pulse"
          )}
        >
          {isSearching ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Recherche en cours...
            </>
          ) : (
            <>
              <Search className="mr-2 h-4 w-4" />
              Lancer la recherche
            </>
          )}
        </Button>
        
        {hasInput && !isSearching && (
          <Button
            type="button"
            variant="outline"
            onClick={handleClear}
            className="border-border/50 hover:bg-secondary"
          >
            Effacer
          </Button>
        )}
      </div>
    </form>
  );
}
