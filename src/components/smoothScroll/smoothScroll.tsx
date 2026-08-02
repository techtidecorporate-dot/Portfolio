import { ReactLenis, type LenisRef } from 'lenis/react'
import { useEffect, useRef } from 'react'

const SmoothScroll = () => {
    const lenisRef = useRef<LenisRef>(null)

    useEffect(() => {
        function update(time: number) {
            lenisRef.current?.lenis?.raf(time)
            rafId = requestAnimationFrame(update)
        }

        let rafId = requestAnimationFrame(update)

        return () => cancelAnimationFrame(rafId)
    }, [])

    return (
        <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
    )
}

export default SmoothScroll