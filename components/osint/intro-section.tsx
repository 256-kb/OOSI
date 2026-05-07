"use client";

import { Eye, Database, Search, Shield, Zap, Globe, Users, Lock, Instagram, Twitter, Linkedin, Facebook, Github, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { SearchQuery } from "./search-form";

// Custom icons
function SnapchatIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.12-.063-.18-.01-.149.165-.375.42-.419 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-.809-.329-1.212-.72-1.212-1.17 0-.254.135-.479.359-.644.165-.119.389-.179.612-.179.119 0 .254.029.375.074.36.12.704.225 1.048.225.18 0 .314-.03.4-.074-.009-.165-.019-.345-.031-.539l-.003-.06c-.104-1.627-.229-3.654.299-4.848C7.861 1.068 11.216.793 12.206.793" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );
}

function RedditIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
    </svg>
  );
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
    </svg>
  );
}

function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
    </svg>
  );
}

function MastodonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/>
    </svg>
  );
}

function BlueskyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"/>
    </svg>
  );
}

interface IntroSectionProps {
  onQuickSearch: (query: SearchQuery) => void;
}

const popularSearches = [
  { firstName: "Martin", lastName: "Dupont", city: "Paris" },
  { firstName: "Sophie", lastName: "Bernard", city: "Lyon" },
  { firstName: "Lucas", lastName: "Moreau", city: "Marseille" },
  { firstName: "Emma", lastName: "Leroy", city: "Bordeaux" },
  { firstName: "Thomas", lastName: "Petit", city: "Toulouse" },
  { firstName: "Lea", lastName: "Dubois", city: "Nice" },
];

// Reseaux sociaux
const socialPlatforms = [
  { name: "Instagram", icon: Instagram, color: "text-pink-500", bg: "bg-pink-500/10", border: "border-pink-500/20" },
  { name: "Snapchat", icon: SnapchatIcon, color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
  { name: "Twitter / X", icon: Twitter, color: "text-sky-500", bg: "bg-sky-500/10", border: "border-sky-500/20" },
  { name: "LinkedIn", icon: Linkedin, color: "text-blue-600", bg: "bg-blue-600/10", border: "border-blue-600/20" },
  { name: "Facebook", icon: Facebook, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  { name: "TikTok", icon: TikTokIcon, color: "text-foreground", bg: "bg-foreground/10", border: "border-foreground/20" },
  { name: "Reddit", icon: RedditIcon, color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/20" },
  { name: "Telegram", icon: Send, color: "text-sky-400", bg: "bg-sky-400/10", border: "border-sky-400/20" },
  { name: "GitHub", icon: Github, color: "text-foreground", bg: "bg-foreground/10", border: "border-foreground/20" },
  { name: "Discord", icon: DiscordIcon, color: "text-indigo-500", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
  { name: "Pinterest", icon: PinterestIcon, color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/20" },
  { name: "Mastodon", icon: MastodonIcon, color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20" },
  { name: "Bluesky", icon: BlueskyIcon, color: "text-sky-500", bg: "bg-sky-500/10", border: "border-sky-500/20" },
];

// Sources de donnees et agregateurs
const dataSources = [
  { name: "Social Searcher", type: "agregateur" },
  { name: "IntelX", type: "agregateur" },
  { name: "Maltego", type: "agregateur" },
  { name: "WhatsMyName", type: "agregateur" },
  { name: "Talkwalker", type: "agregateur" },
  { name: "Shodan", type: "agregateur" },
  { name: "Censys", type: "agregateur" },
  { name: "data.gouv.fr", type: "france" },
  { name: "INPI", type: "france" },
  { name: "Pappers", type: "france" },
  { name: "Infogreffe", type: "france" },
  { name: "SIRENE", type: "france" },
];

const features = [
  { icon: Database, title: "50+ Sources", description: "Bases de donnees multi-sources" },
  { icon: Search, title: "13 Reseaux", description: "Plateformes sociales indexees" },
  { icon: Shield, title: "Donnees France", description: "INPI, Pappers, data.gouv.fr" },
  { icon: Zap, title: "< 5 secondes", description: "Resultats instantanes" },
];

export function IntroSection({ onQuickSearch }: IntroSectionProps) {
  const handleQuickSearch = (search: typeof popularSearches[0]) => {
    onQuickSearch({
      firstName: search.firstName,
      lastName: search.lastName,
      city: search.city,
      phone: "",
      email: "",
      workplace: "",
    });
  };

  return (
    <div className="space-y-8 animate-in fade-in-0 duration-500">
      {/* Hero Section */}
      <div className="text-center py-8 md:py-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <Eye className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">Outil de recherche OSINT</span>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
          Trouvez des informations sur
          <span className="text-primary"> n&apos;importe qui</span>
        </h1>
        
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
          Recherchez une personne et obtenez tous ses profils reseaux sociaux, 
          coordonnees et informations publiques en quelques secondes.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-card border border-border/50 rounded-xl p-4 flex items-center gap-3 hover:border-primary/30 transition-colors"
          >
            <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20">
              <feature.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-lg font-bold text-foreground">{feature.title}</p>
              <p className="text-xs text-muted-foreground">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Social Platforms */}
      <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <Globe className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">Reseaux sociaux indexes</h2>
          <span className="text-xs text-muted-foreground ml-2">({socialPlatforms.length} plateformes)</span>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Notre systeme recherche automatiquement sur les principales plateformes sociales
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {socialPlatforms.map((platform) => (
            <div
              key={platform.name}
              className={`flex items-center gap-2 p-3 rounded-lg border ${platform.bg} ${platform.border}`}
            >
              <platform.icon className={`h-4 w-4 ${platform.color}`} />
              <span className="text-sm font-medium text-foreground truncate">{platform.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Data Sources */}
      <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <Database className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">Sources de donnees</h2>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Agregateurs OSINT et bases de donnees francaises interrogees
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {dataSources.map((source) => (
            <div
              key={source.name}
              className={`flex items-center gap-2 p-3 rounded-lg border ${
                source.type === "france" 
                  ? "bg-blue-500/10 border-blue-500/20" 
                  : "bg-secondary/50 border-border/50"
              }`}
            >
              <div className={`w-2 h-2 rounded-full ${
                source.type === "france" ? "bg-blue-500" : "bg-primary"
              }`} />
              <span className="text-sm font-medium text-foreground">{source.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Searches */}
      <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <Users className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">Recherches de demonstration</h2>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Cliquez sur un exemple pour tester l&apos;outil avec des donnees fictives
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {popularSearches.map((search, index) => (
            <Button
              key={index}
              variant="outline"
              className="justify-start h-auto py-3 px-4 border-border/50 hover:border-primary/50 hover:bg-primary/5"
              onClick={() => handleQuickSearch(search)}
            >
              <div className="text-left">
                <p className="font-medium text-foreground text-sm">
                  {search.firstName} {search.lastName}
                </p>
                <p className="text-xs text-muted-foreground">{search.city}</p>
              </div>
            </Button>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="flex items-start gap-3 p-4 rounded-xl bg-destructive/10 border border-destructive/20">
        <Lock className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-medium text-destructive mb-1">Avertissement important</p>
          <p className="text-sm text-muted-foreground">
            Cet outil est une <strong>demonstration</strong> utilisant des donnees 100% fictives generees aleatoirement.
            <strong> Aucune recherche reelle n&apos;est effectuee</strong> et aucune donnee personnelle n&apos;est collectee, 
            stockee ou affichee. Les profils affiches sont entierement inventes a des fins educatives.
          </p>
        </div>
      </div>
    </div>
  );
}
