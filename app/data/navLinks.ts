import type { Component } from 'vue'
import { House, User, Medal, Code } from '@lucide/vue'

export interface NavLink {
  label: string
  to: string
  icon: Component
}

export const navLinks: NavLink[] = [
  { label: 'Home', to: '/', icon: House },
  { label: 'About', to: '/about', icon: User },
  { label: 'Certifications', to: '/certifications', icon: Medal },
  { label: 'Tech Stack', to: '/tech-stack', icon: Code },
]