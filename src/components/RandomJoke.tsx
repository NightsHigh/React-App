import React, { useEffect, useState } from 'react'
import styles from '../assets/styles/RandomJoke.module.css'
import type { Joke, Theme } from '../types/joke.types'
import { CategorySelector } from './CategorySelector'
import { GetJokeButton } from './GetJokeButton'
import { ThemeToggle } from './ThemeToggle'

export function RandomJoke() {
  const [joke, setJoke] = useState<Joke | null>(null)
  const [categories, setCategories] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [theme, setTheme] = useState<Theme>('light')
  const [error, setError] = useState<string | null>(null)

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  useEffect(() => {
    const className = 'dark-body'
    if (theme === 'dark') {
      document.body.classList.add(className)
    } else {
      document.body.classList.remove(className)
    }

    return () => {
      document.body.classList.remove(className)
    }
  }, [theme])

  const fetchJoke = async (category?: string) => {
    const endpoint = category
      ? `https://official-joke-api.appspot.com/jokes/${category}/random`
      : 'https://official-joke-api.appspot.com/random_joke'

    try {
      const response = await fetch(endpoint)
      const data = await response.json()
      const jokeData = Array.isArray(data) ? data[0] : data
      setJoke({ setup: jokeData?.setup, punchline: jokeData?.punchline })
    } catch (err) {
      console.error('Error fetching joke:', err)
      setJoke(null)
    }
  }

  useEffect(() => {
    fetch('https://official-joke-api.appspot.com/types')
      .then((res) => res.json())
      .then((data) => setCategories(Array.isArray(data) ? data : []))
      .catch(() => setError('Kunne ikke hente kategorier. Prøv igen senere.'))

    fetchJoke()
  }, [])

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    fetchJoke(category || undefined)
  }

  return (
    <div className={`${styles.jokeContainer} ${theme === 'dark' ? styles.dark : styles.light}`}>
      <div className={styles.header}>
        <h1 className={styles.title}>Random Joke</h1>
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </div>

      <CategorySelector
        categories={categories}
        selectedCategory={selectedCategory}
        error={error}
        onCategoryChange={handleCategoryChange}
      />

      <div className={styles.jokeContent}>
        <p className={styles.setup}>{joke?.setup}</p>
        <p className={styles.punchline}>{joke?.punchline}</p>
      </div>

      <div className={styles.jokeActions}>
        <GetJokeButton onClick={() => fetchJoke(selectedCategory || undefined)} />
      </div>
    </div>
  )
}
