import { IChildren } from '@/core/types'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight: ['300', '400', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Clean Arch Next',
}

import '@/styles/global.css'

export default function RootLayout({ children }: IChildren) {
	return (
		<html lang="en">
			<body className={roboto.className}>{children}</body>
		</html>
	)
}
