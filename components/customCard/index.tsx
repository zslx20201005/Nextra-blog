import React from 'react'
import { Card } from 'nextra/components'
import Image from 'next/image'

export default function CustomCard({ title, img }) {
  return (
    <Card icon="" image={img} title={title} href="">
      <Image src={img} alt="Hello" width={20} height={80}
        className="rounded-full w-20 h-full bg-cover" />
    </Card>
  )
}
