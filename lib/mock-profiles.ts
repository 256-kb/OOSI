export interface Profile {
  id: string
  firstName: string
  username: string
  age: number
  birthDate: string
  city: string
  phone: string
  email: string
  snapchat?: string
  instagram?: string
  occupation: string
  occupationType: "student" | "freelance" | "employee" | "entrepreneur"
  avatar: string
}

export const mockProfiles: Profile[] = [
  {
    id: "1",
    firstName: "Lucas",
    username: "lucas_dev",
    age: 24,
    birthDate: "15/03/2002",
    city: "Paris",
    phone: "+33 6 12 34 56 78",
    email: "lucas.dev@gmail.com",
    snapchat: "lucas_snap",
    instagram: "lucas.dev",
    occupation: "EPITECH Paris",
    occupationType: "student",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lucas",
  },
  {
    id: "2",
    firstName: "Emma",
    username: "emma_design",
    age: 27,
    birthDate: "08/11/1998",
    city: "Lyon",
    phone: "+33 6 98 76 54 32",
    email: "emma.design@outlook.fr",
    snapchat: "emma.snap",
    instagram: "emma_design_",
    occupation: "Studio Créatif",
    occupationType: "freelance",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
  },
  {
    id: "3",
    firstName: "Thomas",
    username: "tom_startup",
    age: 31,
    birthDate: "22/07/1994",
    city: "Bordeaux",
    phone: "+33 6 55 44 33 22",
    email: "thomas@techstartup.io",
    instagram: "tom.entrepreneur",
    occupation: "TechStartup.io",
    occupationType: "entrepreneur",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Thomas",
  },
]

export const filterTags = [
  { id: "all", label: "Tous", value: "all" },
  { id: "student", label: "Étudiant", value: "student" },
  { id: "freelance", label: "Freelance", value: "freelance" },
  { id: "employee", label: "Employé", value: "employee" },
  { id: "entrepreneur", label: "Entrepreneur", value: "entrepreneur" },
]
