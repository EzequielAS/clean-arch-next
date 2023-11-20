export interface NextFetchConfig {
  cache?: 'no-store' | 'default'
  next?: {
    revalidate?: number
  }
}
