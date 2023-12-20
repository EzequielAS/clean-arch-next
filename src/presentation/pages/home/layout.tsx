/* eslint-disable @next/next/no-img-element */
import { HomeLayoutProps } from "./types"
import { Loader } from "@/presentation/components/Loader"
import Link from "next/link"

import styles from './home.module.css'

export function HomeLayout({ data, error, loading }: HomeLayoutProps) {
  if (loading) {
    return <Loader />
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <div className={styles.container}>
      {data.map(movie => (
        <Link key={movie.id} href={`/movie/${movie.id}`} className={styles.link}>
          <div className={styles.card}>
            <img
              className={styles.image}
              src={movie.backdropPath} 
              alt={movie.title}
            />
          
            <h3 className={styles['movie-title']}>{movie.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  )
}