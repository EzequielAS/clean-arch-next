export const makeApiUrl = (path: string): string => `${process.env.NEXT_PUBLIC_API_URL}${path}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
