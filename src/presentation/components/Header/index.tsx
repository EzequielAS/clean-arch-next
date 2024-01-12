import { ROUTES_ENUM } from '@/presentation/constants/routes'
import Link from 'next/link'

import styles from './styles.module.css'

export function Header() {
	return (
		<header className={styles['header-container']}>
			<Link href={ROUTES_ENUM.HOME} className={styles['link-header']}>
				Home
			</Link>
			<Link href={ROUTES_ENUM.SERVER_COOKIE} className={styles['link-header']}>
				Server Cookies
			</Link>
		</header>
	)
}
