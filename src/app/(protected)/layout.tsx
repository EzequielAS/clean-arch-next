import { IChildren } from '@/core/types'
import { InternalLayout } from '@/presentation/layouts/internal'

export default function ProtectedLayout({ children }: IChildren) {
	return <InternalLayout>{children}</InternalLayout>
}
