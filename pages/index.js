import { getProperties } from '@/features/common/api/getProperties'
import FeaturedProperties from '@/features/Home/components/FeaturedProperties/FeaturedProperties'
import HeroBanner from '@/features/Home/components/HeroBanner.js'
import MeetTheTeam from '@/features/Home/components/MeetTheTeam/MeetTheTeam'
import Partners from '@/features/Home/components/Partners/Partners'
import Testimonials from '@/features/Home/components/Testimonials/Testimonials'
import DefaultLayout from '@/features/Layouts/DefaultLayout.js'

export default function Home({featuredProperties}) {
  console.log('featuredProperties:', featuredProperties)
  return (
      <DefaultLayout>
        <HeroBanner />
        <FeaturedProperties featuredProperties={featuredProperties} />
        <MeetTheTeam />
        <Partners />
        <Testimonials />
      </DefaultLayout>
  )
}

export async function getStaticProps() {
  const featuredProperties = await getProperties(5)
  //const {hits} = require('@/features/data/properties')
  return {
    //props: {featuredProperties: hits.slice(0, 5)}
    props: {featuredProperties}
  }
}
