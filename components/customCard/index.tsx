import React from 'react'
import { Card } from 'nextra/components'
import Image from 'next/image'

export default function CustomCard({ title, img }) {
  return (
    <Card icon="" image={img} title={title} href="">
      <Image src={img} alt="Hello" width={10} height={80}
        className="rounded-full w-24 h-28 border-solid border-2 border-sky-500 bg-cover" />
    </Card>
  )
}
