"use client";

import { MapPin, Building2, GraduationCap, Shield, ChevronRight, Instagram, Twitter, Linkedin, Facebook, Github, MessageCircle, Send, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ProfileData } from "./profile-result";

// Custom TikTok icon
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );
}

// Custom Snapchat icon
function SnapchatIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.12-.063-.18-.01-.149.165-.375.42-.419 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-.809-.329-1.212-.72-1.212-1.17 0-.254.135-.479.359-.644.165-.119.389-.179.612-.179.119 0 .254.029.375.074.36.12.704.225 1.048.225.18 0 .314-.03.4-.074-.009-.165-.019-.345-.031-.539l-.003-.06c-.104-1.627-.229-3.654.299-4.848C7.861 1.068 11.216.793 12.206.793" />
    </svg>
  );
}

interface ResultsListProps {
  results: ProfileData[];
  onSelectProfile: (profile: ProfileData) => void;
  onNewSearch: () => void;
}

function ResultCard({
  profile,
  onClick,
  index,
}: {
  profile: ProfileData;
  onClick: () => void;
  index: number;
}) {
  const getConfidenceColor = (score: number) => {
    if (score >= 80) return "text-primary border-primary/30 bg-primary/10";
    if (score >= 60) return "text-yellow-500 border-yellow-500/30 bg-yellow-500/10";
    return "text-destructive border-destructive/30 bg-destructive/10";
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full text-left bg-card border border-border rounded-xl p-4 shadow-sm",
        "hover:border-primary/50 hover:shadow-md hover:bg-card/80",
        "transition-all duration-200 group",
        "animate-in fade-in-0 slide-in-from-bottom-4"
      )}
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}
    >
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="relative shrink-0">
          <img
            src={profile.avatar}
            alt={`${profile.firstName} ${profile.lastName}`}
            className="w-16 h-16 rounded-xl object-cover border border-border/50"
          />
          <div
            className={cn(
              "absolute -bottom-1 -right-1 w-6 h-6 rounded-md border flex items-center justify-center text-xs font-bold",
              getConfidenceColor(profile.confidenceScore)
            )}
          >
            {profile.confidenceScore}
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-foreground truncate">
              {profile.firstName} {profile.lastName}
            </h3>
            <span className="text-muted-foreground text-sm">{profile.age} ans</span>
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-1 mt-0.5">
            <MapPin className="h-3 w-3 shrink-0" />
            <span className="truncate">{profile.city}</span>
          </p>

          <p className="text-sm text-muted-foreground flex items-center gap-1 mt-0.5">
            {profile.workplaceType === "school" ? (
              <GraduationCap className="h-3 w-3 shrink-0" />
            ) : (
              <Building2 className="h-3 w-3 shrink-0" />
            )}
            <span className="truncate">{profile.workplace}</span>
          </p>

          {/* Social indicators */}
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center gap-1 flex-wrap">
              {profile.snapchat && (
                <SnapchatIcon className="h-3.5 w-3.5 text-yellow-500" />
              )}
              {profile.instagram && (
                <Instagram className="h-3.5 w-3.5 text-pink-500" />
              )}
              {profile.twitter && (
                <Twitter className="h-3.5 w-3.5 text-sky-500" />
              )}
              {profile.linkedin && (
                <Linkedin className="h-3.5 w-3.5 text-blue-600" />
              )}
              {profile.facebook && (
                <Facebook className="h-3.5 w-3.5 text-blue-500" />
              )}
              {profile.tiktok && (
                <TikTokIcon className="h-3.5 w-3.5 text-foreground" />
              )}
              {profile.reddit && (
                <MessageCircle className="h-3.5 w-3.5 text-orange-500" />
              )}
              {profile.github && (
                <Github className="h-3.5 w-3.5 text-foreground" />
              )}
              {profile.discord && (
                <MessageCircle className="h-3.5 w-3.5 text-indigo-500" />
              )}
              {profile.telegram && (
                <Send className="h-3.5 w-3.5 text-sky-400" />
              )}
            </div>
            <div className="flex flex-wrap gap-1">
              {profile.tags.slice(0, 2).map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="text-xs py-0 px-1.5 bg-secondary/50"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="shrink-0">
          <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
      </div>
    </button>
  );
}

export function ResultsList({ results, onSelectProfile, onNewSearch }: ResultsListProps) {
  // Count social networks found
  const totalSocials = results.reduce((acc, p) => {
    let count = 0;
    if (p.snapchat) count++;
    if (p.instagram) count++;
    if (p.twitter) count++;
    if (p.linkedin) count++;
    if (p.facebook) count++;
    if (p.tiktok) count++;
    if (p.reddit) count++;
    if (p.github) count++;
    if (p.discord) count++;
    if (p.telegram) count++;
    return acc + count;
  }, 0);

  return (
    <div className="space-y-6 animate-in fade-in-0 duration-300">
      {/* Header */}
      <div className="bg-card border border-border rounded-xl p-4 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                {results.length} profil{results.length > 1 ? "s" : ""} trouve
                {results.length > 1 ? "s" : ""}
              </h2>
              <p className="text-sm text-muted-foreground">
                {totalSocials} compte{totalSocials > 1 ? "s" : ""} reseaux sociaux detecte{totalSocials > 1 ? "s" : ""}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>Trie par pertinence</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={onNewSearch}
            >
              Nouvelle recherche
            </Button>
          </div>
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map((profile, index) => (
          <ResultCard
            key={profile.id}
            profile={profile}
            onClick={() => onSelectProfile(profile)}
            index={index}
          />
        ))}
      </div>
      
      {/* Results count footer */}
      <div className="text-center py-4">
        <p className="text-sm text-muted-foreground">
          Affichage de {results.length} profils correspondants
        </p>
      </div>
    </div>
  );
}
