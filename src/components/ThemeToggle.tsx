import React from 'react'
import styles from '../assets/styles/RandomJoke.module.css'
import type { ThemeToggleProps } from '../types/component.types'

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      className={styles.themeToggle}
      onClick={onToggle}
      aria-label="Skift tema"
    >
      {theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
    </button>
  )
}

