import React from 'react'
import styles from '../assets/styles/RandomJoke.module.css'
import type { GetJokeButtonProps } from '../types/component.types'

export function GetJokeButton({ onClick }: GetJokeButtonProps) {
  return (
    <button className={styles.jokeButton} onClick={onClick}>
      Get New Joke
    </button>
  )
}

