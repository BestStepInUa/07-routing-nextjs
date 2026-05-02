'use client'

import css from './InterceptionModal.module.css'

type InterceptionModalProps = {
	children: React.ReactNode
}

export default function InterceptionModal({ children }: InterceptionModalProps) {
	return (
		<div className={css.backdrop}>
			<div className={css.modal}>{children}</div>
		</div>
	)
}

