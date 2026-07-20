'use client'

import { useEffect, useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from '@/components/ui/carousel'
import { CaseStudy } from '../case-studies/data'
import SuccessStoryCard from './SuccessStoryCard'

export default function SuccessStoriesCarousel({ studies }: { studies: CaseStudy[] }) {
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    if (!api) {
      return
    }

    const intervalId = setInterval(() => {
      api.scrollNext()
    }, 3000)

    return () => clearInterval(intervalId)
  }, [api])

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-6">
        {studies.map((study) => (
          <CarouselItem key={study.slug} className="pl-6 basis-full">
            <SuccessStoryCard study={study} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-12 bg-white text-[#C8860A] border-[#C8860A]/20 hover:bg-[#FDF8F0] hover:text-[#A06A00] h-12 w-12" />
      <CarouselNext className="-right-12 bg-white text-[#C8860A] border-[#C8860A]/20 hover:bg-[#FDF8F0] hover:text-[#A06A00] h-12 w-12" />
    </Carousel>
  )
}
