"use client";

import { useState } from "react";
import {
  User,
  MapPin,
  Phone,
  Mail,
  Building2,
  Calendar,
  Instagram,
  Copy,
  Check,
  ExternalLink,
  Shield,
  AlertCircle,
  Clock,
  Globe,
  GraduationCap,
  Twitter,
  Linkedin,
  Facebook,
  Github,
  MessageCircle,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Custom Snapchat icon
function SnapchatIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.12-.063-.18-.01-.149.165-.375.42-.419 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-.809-.329-1.212-.72-1.212-1.17 0-.254.135-.479.359-.644.165-.119.389-.179.612-.179.119 0 .254.029.375.074.36.12.704.225 1.048.225.18 0 .314-.03.4-.074-.009-.165-.019-.345-.031-.539l-.003-.06c-.104-1.627-.229-3.654.299-4.848C7.861 1.068 11.216.793 12.206.793" />
    </svg>
  );
}

export interface ProfileData {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  birthDate: string;
  city: string;
  address?: string;
  phone?: string;
  email?: string;
  workplace?: string;
  workplaceType: "school" | "company";
  // Reseaux sociaux
  snapchat?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  facebook?: string;
  tiktok?: string;
  reddit?: string;
  github?: string;
  discord?: string;
  telegram?: string;
  pinterest?: string;
  mastodon?: string;
  bluesky?: string;
  website?: string;
  avatar: string;
  confidenceScore: number;
  dataSources: string[];
  lastUpdated: string;
  tags: string[];
}

interface ProfileResultProps {
  profile: ProfileData;
  onNewSearch: () => void;
  onBack?: () => void;
}

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-8 w-8 shrink-0"
      onClick={handleCopy}
      aria-label={`Copier ${label}`}
    >
      {copied ? (
        <Check className="h-4 w-4 text-primary" />
      ) : (
        <Copy className="h-4 w-4 text-muted-foreground" />
      )}
    </Button>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  copyable = false,
  link,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  copyable?: boolean;
  link?: string;
}) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-border/50 last:border-0">
      <div className="flex items-center gap-3 min-w-0">
        <div className="p-2 rounded-lg bg-secondary/50">
          <Icon className="h-4 w-4 text-muted-foreground" />
        </div>
        <div className="min-w-0">
          <p className="text-xs text-muted-foreground">{label}</p>
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
            >
              {value}
              <ExternalLink className="h-3 w-3" />
            </a>
          ) : (
            <p className="text-sm font-medium text-foreground truncate">{value}</p>
          )}
        </div>
      </div>
      {copyable && <CopyButton value={value} label={label} />}
    </div>
  );
}

export function ProfileResult({ profile, onNewSearch, onBack }: ProfileResultProps) {
  const getConfidenceColor = (score: number) => {
    if (score >= 80) return "text-primary bg-primary/10 border-primary/20";
    if (score >= 60) return "text-yellow-500 bg-yellow-500/10 border-yellow-500/20";
    return "text-destructive bg-destructive/10 border-destructive/20";
  };

  const getConfidenceLabel = (score: number) => {
    if (score >= 80) return "Haute";
    if (score >= 60) return "Moyenne";
    return "Faible";
  };

  return (
    <div className="space-y-6 animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
      {/* Header Card */}
      <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="relative">
              <img
                src={profile.avatar}
                alt={`${profile.firstName} ${profile.lastName}`}
                className="w-24 h-24 md:w-32 md:h-32 rounded-xl object-cover border-2 border-primary/20"
              />
              <div className="absolute -bottom-2 -right-2 p-1.5 bg-card rounded-lg border border-border shadow-sm">
                <Shield className="h-4 w-4 text-primary" />
              </div>
            </div>
          </div>

          {/* Main Info */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  {profile.firstName} {profile.lastName}
                </h2>
                <p className="text-muted-foreground mt-1 flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {profile.city}
                  {profile.address && ` - ${profile.address}`}
                </p>
              </div>

              {/* Confidence Score */}
              <div
                className={cn(
                  "px-4 py-2 rounded-lg border flex items-center gap-2",
                  getConfidenceColor(profile.confidenceScore)
                )}
              >
                <AlertCircle className="h-4 w-4" />
                <div className="text-right">
                  <p className="text-xs opacity-80">Fiabilite</p>
                  <p className="font-bold">
                    {profile.confidenceScore}% - {getConfidenceLabel(profile.confidenceScore)}
                  </p>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {profile.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-secondary/50 text-secondary-foreground"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Last Updated */}
            <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
              <Clock className="h-3 w-3" />
              Derniere mise a jour: {profile.lastUpdated}
            </p>
          </div>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Info */}
        <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <User className="h-5 w-5 text-primary" />
            Informations personnelles
          </h3>
          <div className="space-y-1">
            <InfoRow icon={Calendar} label="Age" value={`${profile.age} ans`} />
            <InfoRow icon={Calendar} label="Date de naissance" value={profile.birthDate} />
            <InfoRow icon={MapPin} label="Ville" value={profile.city} />
            {profile.address && (
              <InfoRow icon={MapPin} label="Adresse" value={profile.address} copyable />
            )}
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Phone className="h-5 w-5 text-primary" />
            Contact
          </h3>
          <div className="space-y-1">
            {profile.phone ? (
              <InfoRow icon={Phone} label="Telephone" value={profile.phone} copyable />
            ) : (
              <div className="flex items-center gap-3 py-3 border-b border-border/50">
                <div className="p-2 rounded-lg bg-secondary/50">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Telephone</p>
                  <p className="text-sm text-muted-foreground italic">Non trouve</p>
                </div>
              </div>
            )}
            {profile.email ? (
              <InfoRow icon={Mail} label="Email" value={profile.email} copyable />
            ) : (
              <div className="flex items-center gap-3 py-3 border-b border-border/50">
                <div className="p-2 rounded-lg bg-secondary/50">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm text-muted-foreground italic">Non trouve</p>
                </div>
              </div>
            )}
            {profile.website && (
              <InfoRow
                icon={Globe}
                label="Site web"
                value={profile.website}
                link={`https://${profile.website}`}
              />
            )}
          </div>
        </div>

        {/* Professional Info */}
        <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            {profile.workplaceType === "school" ? (
              <GraduationCap className="h-5 w-5 text-primary" />
            ) : (
              <Building2 className="h-5 w-5 text-primary" />
            )}
            {profile.workplaceType === "school" ? "Formation" : "Professionnel"}
          </h3>
          <div className="space-y-1">
            {profile.workplace ? (
              <InfoRow
                icon={profile.workplaceType === "school" ? GraduationCap : Building2}
                label={profile.workplaceType === "school" ? "Etablissement" : "Entreprise"}
                value={profile.workplace}
              />
            ) : (
              <div className="flex items-center gap-3 py-3">
                <div className="p-2 rounded-lg bg-secondary/50">
                  {profile.workplaceType === "school" ? (
                    <GraduationCap className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Building2 className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">
                    {profile.workplaceType === "school" ? "Etablissement" : "Entreprise"}
                  </p>
                  <p className="text-sm text-muted-foreground italic">Non trouve</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Social Media */}
        <div className="bg-card border border-border rounded-xl p-6 shadow-lg md:col-span-2">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Instagram className="h-5 w-5 text-primary" />
            Reseaux sociaux
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
            {profile.snapchat && (
              <InfoRow
                icon={SnapchatIcon}
                label="Snapchat"
                value={profile.snapchat}
                link={`https://snapchat.com/add/${profile.snapchat}`}
              />
            )}
            {profile.instagram && (
              <InfoRow
                icon={Instagram}
                label="Instagram"
                value={`@${profile.instagram}`}
                link={`https://instagram.com/${profile.instagram}`}
              />
            )}
            {profile.twitter && (
              <InfoRow
                icon={Twitter}
                label="Twitter / X"
                value={`@${profile.twitter}`}
                link={`https://x.com/${profile.twitter}`}
              />
            )}
            {profile.linkedin && (
              <InfoRow
                icon={Linkedin}
                label="LinkedIn"
                value={profile.linkedin}
                link={`https://linkedin.com/in/${profile.linkedin}`}
              />
            )}
            {profile.facebook && (
              <InfoRow
                icon={Facebook}
                label="Facebook"
                value={profile.facebook}
                link={`https://facebook.com/${profile.facebook}`}
              />
            )}
            {profile.tiktok && (
              <InfoRow
                icon={Globe}
                label="TikTok"
                value={profile.tiktok}
                link={`https://tiktok.com/${profile.tiktok}`}
              />
            )}
            {profile.reddit && (
              <InfoRow
                icon={MessageCircle}
                label="Reddit"
                value={profile.reddit}
                link={`https://reddit.com/${profile.reddit}`}
              />
            )}
            {profile.github && (
              <InfoRow
                icon={Github}
                label="GitHub"
                value={profile.github}
                link={`https://github.com/${profile.github}`}
              />
            )}
            {profile.discord && (
              <InfoRow
                icon={MessageCircle}
                label="Discord"
                value={profile.discord}
              />
            )}
            {profile.telegram && (
              <InfoRow
                icon={Send}
                label="Telegram"
                value={profile.telegram}
                link={`https://t.me/${profile.telegram.replace('@', '')}`}
              />
            )}
            {profile.pinterest && (
              <InfoRow
                icon={Globe}
                label="Pinterest"
                value={profile.pinterest}
                link={`https://pinterest.com/${profile.pinterest}`}
              />
            )}
            {profile.mastodon && (
              <InfoRow
                icon={Globe}
                label="Mastodon"
                value={profile.mastodon}
              />
            )}
            {profile.bluesky && (
              <InfoRow
                icon={Globe}
                label="Bluesky"
                value={profile.bluesky}
                link={`https://bsky.app/profile/${profile.bluesky}`}
              />
            )}
            {!profile.snapchat && !profile.instagram && !profile.twitter && !profile.linkedin && !profile.facebook && !profile.tiktok && !profile.reddit && !profile.github && !profile.discord && !profile.telegram && !profile.pinterest && !profile.mastodon && !profile.bluesky && (
              <p className="text-muted-foreground text-sm py-4 text-center md:col-span-2">
                Aucun reseau social trouve
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Data Sources */}
      <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          Sources de donnees
        </h3>
        <div className="flex flex-wrap gap-2">
          {profile.dataSources.map((source) => (
            <Badge
              key={source}
              variant="outline"
              className="bg-secondary/30 border-border/50"
            >
              {source}
            </Badge>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        {onBack && (
          <Button
            onClick={onBack}
            variant="outline"
            className="flex-1 border-border hover:bg-secondary"
          >
            Retour aux resultats
          </Button>
        )}
        <Button
          onClick={onNewSearch}
          className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
        >
          Nouvelle recherche
        </Button>
        <Button
          variant="outline"
          className="flex-1 border-border hover:bg-secondary"
          onClick={() => window.print()}
        >
          Exporter le rapport
        </Button>
      </div>
    </div>
  );
}
