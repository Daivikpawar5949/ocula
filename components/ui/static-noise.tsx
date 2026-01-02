"use client"

export function StaticNoise({ opacity = 0.05, className = "" }: { opacity?: number, className?: string }) {
    return (
        <div
            className={`absolute inset-0 pointer-events-none z-0 overflow-hidden ${className}`}
            style={{ opacity }}
        >
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAGFBMVEUAAAA5OTkAAAAAAAAAAABMTExERERmZmZnATESAAAACHRSTlMAMwA5EDduWCPQA11OAAAAlklEQVQ4y6XTwQ3CMAwF0KySQTnVEcoA6IDMEDoAYwB0wEqbOIEDMIEjOAf+i0OaC/0lTypFduw4L2nN7QvR0tYk66d+695H11L7s5xL7c9yL7U/y7vU/iz3UvuzvEvtz3IvtT/Lu9T+LPdS+7O8S+3P8u71P4s91L7s7xL7c9yL7U/y7vU/iz3UvuzvEvtz3IvtT/Lu/4/Pd49yJ3pY20AAAAASUVORK5CYII=")`,
                    backgroundRepeat: 'repeat',
                }}
            />
        </div>
    )
}
