'use client'
import React, { useEffect, useState } from 'react'

const useBaseExperience = ({ item }: any) => {
  const [currentBaseExp, setCurrentBaseExp] = useState(0)

  useEffect(() => {
    if (item?.base_experience) {
      const targetValue = item.base_experience
      const increment = Math.ceil(targetValue / 100) // Define o incremento
      let value = 0

      const interval = setInterval(() => {
        value += increment
        if (value >= targetValue) {
          value = targetValue
          clearInterval(interval) // Para o intervalo quando atingir o valor
        }
        setCurrentBaseExp(value)
      }, 60) // Define a velocidade da contagem (10ms)

      return () => clearInterval(interval) // Limpa o intervalo ao desmontar o componente
    }
  }, [item])

  return currentBaseExp
}

export default useBaseExperience
