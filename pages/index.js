import DefaultLayout from './../features/Layouts/DefaultLayout/DefaultLayout';
import HeroBanner from './../features/Home/components/HeroBanner/HeroBanner';
import FeaturedProperties from '../features/Home/components/FeaturedProperties/FeaturedProperties';

export default function Home() {
  return (
    <DefaultLayout>
      <HeroBanner />
      <FeaturedProperties />
    </DefaultLayout>
  )
}

