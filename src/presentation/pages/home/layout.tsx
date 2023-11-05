/* eslint-disable @next/next/no-img-element */
import { HomeLayoutProps } from "./types"

import styles from './home.module.css'

export function HomeLayout({ data, error, loading }: HomeLayoutProps) {
  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <div className={styles.container}>
      {data.map(movie => (
        <div key={movie.id} className={styles.card}>
          <img
            className={styles.image}
            src={movie.backdropPath} 
            alt={movie.title}
          />
        
          <h3>{movie.title}</h3>
        </div>
      ))}
    </div>
  )
}