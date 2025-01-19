import React, { useEffect, useState } from 'react'

interface AnimatedBarProps {
  level: number // O nível de força do Pokémon (de 0 a 100)
}

const AnimatedBar: React.FC<AnimatedBarProps> = ({ level }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let currentProgress = 0
    const interval = setInterval(() => {
      currentProgress += 1
      setProgress((prev) => (prev < level ? currentProgress : level))
      if (currentProgress >= level) {
        clearInterval(interval)
      }
    }, 30) // Velocidade da animação (10ms por incremento)

    return () => clearInterval(interval) // Limpa o intervalo se o componente for desmontado
  }, [level])

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="h-3.5 bg-gray-200 rounded-full overflow-hidden ">
        <div
          className={`h-full rounded-full  ${
            progress > 70
              ? 'bg-green-500'
              : progress > 40
              ? 'bg-yellow-500'
              : 'bg-red-500'
          }`}
          style={{
            width: `${progress}%`,
            transition: 'width 0.1s ease-in-out',
          }}
        />
      </div>
      <p className=" text-center relative bottom-5 text-xl font-medium">
        {progress}
      </p>
    </div>
  )
}

export default AnimatedBar
