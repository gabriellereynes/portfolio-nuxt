export interface Certification {
  issuer: string
  name: string
  badge: string
  image: string
  verifyUrl: string
}

const VERIFY_URL = 'https://www.certiport.com/portal/pages/credentialverification.aspx'

export const certifications: Certification[] = [
  {
    issuer: 'Microsoft Office Specialist',
    name: 'Word Associate',
    badge: '/images/certifications/badgeword.png',
    image: '/images/certifications/certword.png',
    verifyUrl: VERIFY_URL,
  },
  {
    issuer: 'Microsoft Office Specialist',
    name: 'PowerPoint Associate',
    badge: '/images/certifications/badgeppt.png',
    image: '/images/certifications/certppt.png',
    verifyUrl: VERIFY_URL,
  },
]