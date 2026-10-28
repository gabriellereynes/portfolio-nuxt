export interface NavLink {
  label: string
  to: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Certifications', to: '/certifications' },
  { label: 'Tech Stack', to: '/tech-stack' },
]