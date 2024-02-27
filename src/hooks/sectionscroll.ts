import { useActiveSectionContext } from '@/context/action-section-context'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const useSectionInView = (sectionName: string, threshold = 0.75) => {
	const { ref, inView } = useInView({
		threshold,
	})
	const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

	useEffect(() => {
		if (inView && Date.now() - timeOfLastClick > 1000) {
			setActiveSection(sectionName)
		}
	}, [inView, setActiveSection, timeOfLastClick, sectionName])

	return {
		ref,
	}
}

export { useSectionInView }