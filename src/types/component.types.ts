import type { Theme } from './joke.types'

export interface CategorySelectorProps {
  categories: string[]
  selectedCategory: string
  error: string | null
  onCategoryChange: (category: string) => void
}

export interface GetJokeButtonProps {
  onClick: () => void
}

export interface ThemeToggleProps {
  theme: Theme
  onToggle: () => void
}

