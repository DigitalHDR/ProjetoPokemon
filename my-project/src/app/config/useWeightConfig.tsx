'use client'
import React, { useEffect, useState } from 'react'

const useWeightConfig = ({ item }: any) => {
  const [currentWeight, setCurrentWeight] = useState(0)

  useEffect(() => {
    if (item?.Weight) {
      const targetValue = item.Weight
      const increment = Math.ceil(targetValue / 100) // Define o incremento
      let value = 0

      const interval = setInterval(() => {
        value += increment
        if (value >= targetValue) {
          value = targetValue
          clearInterval(interval) // Para o intervalo quando atingir o valor
        }
        setCurrentWeight(value)
      }, 100) // Define a velocidade da contagem (10ms)

      return () => clearInterval(interval) // Limpa o intervalo ao desmontar o componente
    }
  }, [item])

  return currentWeight
}

export default useWeightConfig
