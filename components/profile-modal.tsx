"use client"

import * as React from "react"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  Briefcase,
  Copy,
  Check,
  X
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import type { Profile } from "@/lib/mock-profiles"

interface ProfileModalProps {
  profile: Profile | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

const occupationTypeLabels: Record<Profile["occupationType"], string> = {
  student: "Étudiant",
  freelance: "Freelance",
  employee: "Employé",
  entrepreneur: "Entrepreneur",
}

const occupationTypeColors: Record<Profile["occupationType"], string> = {
  student: "bg-blue-500/10 text-blue-500",
  freelance: "bg-emerald-500/10 text-emerald-500",
  employee: "bg-amber-500/10 text-amber-500",
  entrepreneur: "bg-rose-500/10 text-rose-500",
}

export function ProfileModal({ profile, open, onOpenChange }: ProfileModalProps) {
  const [copiedField, setCopiedField] = React.useState<string | null>(null)

  const handleCopy = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedField(field)
      setTimeout(() => setCopiedField(null), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  if (!profile) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="sr-only">
          <DialogTitle>Profil de {profile.firstName}</DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col items-center text-center pt-4">
          <Avatar className="h-24 w-24 ring-4 ring-border/50 ring-offset-4 ring-offset-background">
            <AvatarImage src={profile.avatar} alt={profile.firstName} />
            <AvatarFallback className="bg-primary/10 text-primary text-2xl font-semibold">
              {profile.firstName.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          
          <div className="mt-4 space-y-1">
            <h2 className="text-2xl font-bold text-foreground">{profile.firstName}</h2>
            <p className="text-muted-foreground">@{profile.username}</p>
          </div>

          <div className="flex items-center gap-2 mt-3">
            <Badge 
              variant="secondary" 
              className={`${occupationTypeColors[profile.occupationType]} border-0`}
            >
              {occupationTypeLabels[profile.occupationType]}
            </Badge>
            <span className="text-sm text-muted-foreground">{profile.age} ans</span>
          </div>
        </div>

        <Separator className="my-4" />

        <div className="space-y-4">
          <div className="grid gap-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center h-9 w-9 rounded-full bg-primary/10">
                  <Calendar className="h-4 w-4 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Date de naissance</p>
                  <p className="text-sm font-medium">{profile.birthDate}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center h-9 w-9 rounded-full bg-primary/10">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Ville</p>
                  <p className="text-sm font-medium">{profile.city}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center h-9 w-9 rounded-full bg-primary/10">
                  <Briefcase className="h-4 w-4 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Activité</p>
                  <p className="text-sm font-medium">{profile.occupation}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center h-9 w-9 rounded-full bg-primary/10">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Téléphone</p>
                  <p className="text-sm font-medium">{profile.phone}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => handleCopy(profile.phone, "phone")}
              >
                {copiedField === "phone" ? (
                  <Check className="h-4 w-4 text-emerald-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center h-9 w-9 rounded-full bg-primary/10">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div className="text-left min-w-0">
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium truncate">{profile.email}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 shrink-0"
                onClick={() => handleCopy(profile.email, "email")}
              >
                {copiedField === "email" ? (
                  <Check className="h-4 w-4 text-emerald-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          {(profile.snapchat || profile.instagram) && (
            <>
              <Separator />
              <div className="flex justify-center gap-4">
                {profile.snapchat && (
                  <Button variant="outline" size="sm" className="gap-2">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301a.42.42 0 0 1 .165-.036c.102 0 .21.027.315.087a.63.63 0 0 1 .319.497c.015.194-.07.412-.253.535a2.6 2.6 0 0 1-.165.089l-.004.002c-.106.051-.202.098-.287.141-.283.143-.558.282-.717.496a.59.59 0 0 0-.101.345c0 .18.07.345.3.539.262.22.573.39.867.551.113.062.226.122.332.18l.068.039c.433.235.773.42.973.716.157.23.208.489.208.761 0 .295-.068.591-.21.87-.327.63-1.014 1.056-2.06 1.28-.256.06-.536.09-.838.12l-.065.007c-.084.009-.167.018-.248.029-.06.008-.118.017-.176.027a2.47 2.47 0 0 0-.381.103c-.14.063-.26.153-.395.273a4.51 4.51 0 0 0-.226.222c-.39.396-.82.837-1.59 1.054-.255.068-.532.103-.82.103l-.043-.001a4.07 4.07 0 0 1-.18-.008c-.247-.012-.533-.026-.832-.002-.58.045-1.068.351-1.61.693l-.04.024a8.58 8.58 0 0 1-.422.257c-.356.199-.75.389-1.191.483-.1.022-.203.033-.307.033a2.6 2.6 0 0 1-.31-.02c-.453-.052-.852-.24-1.209-.397a6.8 6.8 0 0 0-.347-.146c-.527-.21-.99-.463-1.455-.715l-.114-.063a5.12 5.12 0 0 0-.357-.183 2.4 2.4 0 0 0-.366-.117c-.067-.016-.134-.03-.202-.045l-.069-.015c-.08-.018-.163-.036-.249-.06-.256-.06-.538-.105-.838-.15l-.135-.018c-.044-.006-.089-.012-.133-.017a3.2 3.2 0 0 1-.244-.039c-.14-.027-.281-.067-.416-.121a1.35 1.35 0 0 1-.418-.238c-.183-.16-.31-.374-.357-.634a1.68 1.68 0 0 1-.017-.236c0-.256.061-.512.21-.744.198-.298.54-.483.973-.72l.065-.036c.108-.058.22-.12.333-.18.294-.161.605-.33.867-.551.23-.194.3-.36.3-.54a.6.6 0 0 0-.101-.344c-.159-.214-.434-.354-.717-.496a12.4 12.4 0 0 0-.287-.141l-.004-.002c-.058-.029-.111-.056-.165-.09-.183-.122-.269-.34-.253-.534a.63.63 0 0 1 .32-.497.56.56 0 0 1 .314-.087.44.44 0 0 1 .165.035c.374.182.733.285 1.034.3.198 0 .326-.045.401-.09a8.7 8.7 0 0 1-.03-.51l-.003-.06c-.104-1.628-.23-3.654.3-4.847C7.86 1.07 11.216.793 12.206.793Z"/>
                    </svg>
                    @{profile.snapchat}
                  </Button>
                )}
                {profile.instagram && (
                  <Button variant="outline" size="sm" className="gap-2">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    @{profile.instagram}
                  </Button>
                )}
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
