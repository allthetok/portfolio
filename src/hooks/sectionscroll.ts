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
		// if (document.documentElement.scrollTop >= 3200 && document.documentElement.scrollTop <= 6000) {
		// 	setActiveSection('Projects')
		// }
		// console.log(document.documentElement.scrollTop)
		// if (document.documentElement.scrollTop)
	}, [inView, setActiveSection, timeOfLastClick, sectionName])

	// useEffect(() => {
	// 	if (document.documentElement.scrollTop >= 3200 && document.documentElement.scrollTop <= 6000) {
	// 		setActiveSection('Projects')
	// 	}
	// }, [document.documentElement.scrollTop])

	return {
		ref,
	}
}

export { useSectionInView }