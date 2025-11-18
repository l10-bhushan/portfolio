import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const TECHSTACK = [
  { 
    id: 1,
    name : 'Next.js',
    icon : '/nextjs.svg'
  },
  {
    id : 2,
    name: 'React.js',
    icon : '/reactjs.svg'
  },
  {
    id : 3,
    name : 'Typescript',
    icon: '/typescript.svg'
  },
  {
    id : 4,
    name : 'Node.js',
    icon : '/nodejs.svg'
  },
  {
    id : 5,
    name : 'Supabase',
    icon : '/supabase.svg'
  }
]

export const PAGE = {
  FOOTER : 'footer'
}
