'use client'
import React, { useEffect, useState } from 'react'

const useSpeedConfig = ({ item }: any) => {
  const [currentSpeed, setCurrentSpeed] = useState(0)

  useEffect(() => {
    if (item?.speed) {
      const targetValue = item.speed
      const increment = Math.ceil(targetValue / 100) // Define o incremento
      let value = 0

      const interval = setInterval(() => {
        value += increment
        if (value >= targetValue) {
          value = targetValue
          clearInterval(interval) // Para o intervalo quando atingir o valor
        }
        setCurrentSpeed(value)
      }, 30) // Define a velocidade da contagem (10ms)

      return () => clearInterval(interval) // Limpa o intervalo ao desmontar o componente
    }
  }, [item])

  return currentSpeed
}

export default useSpeedConfig
