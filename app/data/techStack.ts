export interface TechItem {
  name: string
  icon: string
}

export interface TechCategoryData {
  title: string
  items: TechItem[]
}

const icon = (file: string) => `/images/tech-stack/${file}`

export const techStack: TechCategoryData[] = [
  {
    title: 'Languages',
    items: [
      { name: 'Java', icon: icon('java.png') },
      { name: 'HTML', icon: icon('html.png') },
      { name: 'CSS', icon: icon('css.png') },
      { name: 'JavaScript', icon: icon('javascript.png') },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Android Studio', icon: icon('androidstud.png') },
      { name: 'VS Code', icon: icon('vscode.png') },
      { name: 'GitHub', icon: icon('github.png') },
      { name: 'Oracle APEX', icon: icon('apex.png') },
      { name: 'PostgreSQL', icon: icon('postgresql.png') },
      { name: 'SSMS', icon: icon('ssms.png') },
      { name: 'MongoDB', icon: icon('mongodb.png') },
      { name: 'Git', icon: icon('git.png') },
    ],
  },
]