"use client";

import { useState, useCallback, useRef } from "react";
import { SearchForm, type SearchQuery } from "@/components/osint/search-form";
import { ScanningAnimation } from "@/components/osint/scanning-animation";
import { ProfileResult, type ProfileData } from "@/components/osint/profile-result";
import { ResultsList } from "@/components/osint/results-list";
import { IntroSection } from "@/components/osint/intro-section";
import { NoResults } from "@/components/osint/no-results";
import { ThemeToggle } from "@/components/theme-toggle";
import { generateMultipleProfiles } from "@/lib/generate-profile";
import { Eye, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

type AppState = "intro" | "searching" | "results" | "no-results" | "detail";

export default function OsintPage() {
  const [state, setState] = useState<AppState>("intro");
  const [results, setResults] = useState<ProfileData[]>([]);
  const [selectedProfile, setSelectedProfile] = useState<ProfileData | null>(null);
  const [lastQuery, setLastQuery] = useState<SearchQuery | null>(null);
  const searchFormRef = useRef<HTMLDivElement>(null);

  const handleSearch = useCallback((query: SearchQuery) => {
    setState("searching");
    setResults([]);
    setSelectedProfile(null);
    setLastQuery(query);

    // Simulate search delay (2-4 seconds)
    const delay = 2000 + Math.random() * 2000;
    setTimeout(() => {
      const generatedResults = generateMultipleProfiles(query, 30);
      
      if (generatedResults.length === 0) {
        setState("no-results");
      } else {
        setResults(generatedResults);
        setState("results");
      }
    }, delay);
  }, []);

  const handleSelectProfile = useCallback((profile: ProfileData) => {
    setSelectedProfile(profile);
    setState("detail");
  }, []);

  const handleBackToResults = useCallback(() => {
    setSelectedProfile(null);
    setState("results");
  }, []);

  const handleNewSearch = useCallback(() => {
    setState("intro");
    setResults([]);
    setSelectedProfile(null);
    setLastQuery(null);
  }, []);

  const handleRetry = useCallback(() => {
    if (lastQuery) {
      handleSearch(lastQuery);
    }
  }, [lastQuery, handleSearch]);

  const handleQuickSearch = useCallback((query: SearchQuery) => {
    // Scroll to search form area
    searchFormRef.current?.scrollIntoView({ behavior: "smooth" });
    // Small delay then trigger search
    setTimeout(() => {
      handleSearch(query);
    }, 300);
  }, [handleSearch]);

  // Build search summary for no results
  const getSearchSummary = () => {
    if (!lastQuery) return "";
    const parts = [];
    if (lastQuery.firstName) parts.push(lastQuery.firstName);
    if (lastQuery.lastName) parts.push(lastQuery.lastName);
    if (lastQuery.city) parts.push(lastQuery.city);
    return parts.join(" ");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {(state === "detail" || state === "results" || state === "no-results") && (
              <Button
                variant="ghost"
                size="icon"
                onClick={state === "detail" ? handleBackToResults : handleNewSearch}
                className="mr-2"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
            )}
            <button 
              onClick={handleNewSearch}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h1 className="text-xl font-bold text-foreground">OSINT Research</h1>
                <p className="text-xs text-muted-foreground">Intelligence & Investigation Tool</p>
              </div>
            </button>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Intro Section */}
        {state === "intro" && (
          <>
            <IntroSection onQuickSearch={handleQuickSearch} />
            
            {/* Search Form */}
            <div ref={searchFormRef} className="mt-8">
              <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                    <Search className="h-5 w-5 text-primary" />
                    Lancer une recherche
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Entrez au moins un critere pour rechercher une personne
                  </p>
                </div>
                <SearchForm onSearch={handleSearch} isSearching={false} />
              </div>
            </div>
          </>
        )}

        {/* Searching State */}
        {state === "searching" && (
          <>
            <div className="bg-card border border-border rounded-xl p-6 shadow-lg mb-8">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <Search className="h-5 w-5 text-primary" />
                  Recherche en cours
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Analyse des bases de donnees...
                </p>
              </div>
              <SearchForm onSearch={handleSearch} isSearching={true} />
            </div>
            <ScanningAnimation isActive={true} />
          </>
        )}

        {/* Results List */}
        {state === "results" && results.length > 0 && (
          <ResultsList
            results={results}
            onSelectProfile={handleSelectProfile}
            onNewSearch={handleNewSearch}
          />
        )}

        {/* No Results */}
        {state === "no-results" && (
          <NoResults
            searchQuery={getSearchSummary()}
            onNewSearch={handleNewSearch}
            onRetry={handleRetry}
          />
        )}

        {/* Profile Detail */}
        {state === "detail" && selectedProfile && (
          <ProfileResult
            profile={selectedProfile}
            onNewSearch={handleNewSearch}
            onBack={handleBackToResults}
          />
        )}
      </main>
    </div>
  );
}
