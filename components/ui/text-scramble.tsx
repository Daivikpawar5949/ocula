"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"

interface TextScrambleProps {
    children: string
    className?: string
    duration?: number
    speed?: number
    characterSet?: string
    as?: React.ElementType
}

const DEFAULT_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+"

export function TextScramble({
    children,
    className = "",
    duration = 0.8,
    speed = 0.05,
    characterSet = DEFAULT_CHARS,
    as: Component = "h2"
}: TextScrambleProps) {
    const [text, setText] = useState(children)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.5 })
    const [isScrambling, setIsScrambling] = useState(false)

    useEffect(() => {
        if (isInView && !isScrambling) {
            setIsScrambling(true)
            let iteration = 0
            const maxIterations = children.length

            const interval = setInterval(() => {
                setText(() =>
                    children
                        .split("")
                        .map((_char, index) => {
                            if (index < iteration) {
                                return children[index]
                            }
                            return characterSet[Math.floor(Math.random() * characterSet.length)]
                        })
                        .join("")
                )

                if (iteration >= maxIterations) {
                    clearInterval(interval)
                    setIsScrambling(false)
                    setText(children)
                }

                iteration += speed * 10
            }, duration * 40)

            return () => clearInterval(interval)
        }
        return undefined // Explicit return for when if condition is false
    }, [isInView, children, characterSet, duration, speed, isScrambling])

    return (
        <Component ref={ref} className={className}>
            {text}
        </Component>
    )
}
