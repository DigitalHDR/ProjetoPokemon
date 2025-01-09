'use client'
import React, { useEffect, useState } from 'react'

const useHeightConfig = ({ item }: any) => {
  const [currentHeight, setCurrentHeight] = useState(0)

  useEffect(() => {
    if (item?.Height) {
      const targetValue = item.Height
      const increment = Math.ceil(targetValue / 100) // Define o incremento
      let value = 0

      const interval = setInterval(() => {
        value += increment
        if (value >= targetValue) {
          value = targetValue
          clearInterval(interval) // Para o intervalo quando atingir o valor
        }
        setCurrentHeight(value)
      }, 100) // Define a velocidade da contagem (10ms)

      return () => clearInterval(interval) // Limpa o intervalo ao desmontar o componente
    }
  }, [item])

  return currentHeight
}

export default useHeightConfig
