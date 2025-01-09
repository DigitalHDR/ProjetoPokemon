import React from 'react'
import { Button } from '@material-tailwind/react'

type ButtonProps = {
  href?: string
  children?: React.ReactNode
  className?: string
}


export const ButtonDefault: React.FC<ButtonProps> = ({ href, children, className, ...props }: any) => {
  return (
    <Button className="bg-blue-700" {...props}>
      {children}
    </Button>
  )
}
