'use client'

import { useRouter } from 'next/navigation'
import css from './InterceptionModal.module.css'

type Props = {
	children: React.ReactNode
}

export default function InterceptionModal({ children }: Props) {
	const router = useRouter()

	return (
		<div className={css.backdrop}>
			<div className={css.modal}>
				{children}
				<button type='button' className={css.cancelButton} onClick={() => router.back()}>
					Close
				</button>
			</div>
		</div>
	)
}

