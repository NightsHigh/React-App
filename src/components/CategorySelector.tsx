import React from 'react'
import styles from '../assets/styles/RandomJoke.module.css'
import type { CategorySelectorProps } from '../types/component.types'

export function CategorySelector({
  categories,
  selectedCategory,
  error,
  onCategoryChange,
}: CategorySelectorProps) {
  return (
    <div className={styles.controls}>
      <label className={styles.label} htmlFor="category-select">
        Vælg kategori
      </label>
      <select
        id="category-select"
        className={styles.select}
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        disabled={!categories.length && !error}
      >
        <option value="">Alle kategorier</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}

