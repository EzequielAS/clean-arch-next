import styles from './styles.module.css'

export function Loader() {
	return (
		<div className={styles['loader-container']}>
			<p className={styles['loader-text']}>Loading...</p>
		</div>
	)
}
