import { IChildren } from '@/core/types'
import { Header } from '@/presentation/components/Header'

export function InternalLayout({ children }: IChildren) {
	return (
		<>
			<Header />
			{children}
		</>
	)
}
