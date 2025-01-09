'use client'
import React, { useEffect, useState } from 'react'

const useSpecialDefense = ({ item }: any) => {
  const [currentSpeedDefense, setCurrentSpeedDefense] = useState(0)

  useEffect(() => {
    if (item?.special_defense) {
      const targetValue = item.special_defense
      const increment = Math.ceil(targetValue / 100) // Define o incremento
      let value = 0

      const interval = setInterval(() => {
        value += increment
        if (value >= targetValue) {
          value = targetValue
          clearInterval(interval) // Para o intervalo quando atingir o valor
        }
        setCurrentSpeedDefense(value)
      }, 40) // Define a velocidade da contagem (10ms)

      return () => clearInterval(interval) // Limpa o intervalo ao desmontar o componente
    }
  }, [item])

  return currentSpeedDefense
}

export default useSpecialDefense
