import Hero from '@/components/Hero';
import News from '@/components/News';
import getData from '@/lib/getData';
import { heroComponentQuery, newsComponentQuery } from '@/queries/queries';

export default async function Home() {

  const query = `
  {
    ${heroComponentQuery('home-hero')}
    ${newsComponentQuery(3)}
  }`

  const pageData = await getData(query);
  const heroComponentData = pageData.data.heroComponent;
  const newsComponentData = pageData.data.posts;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero data={heroComponentData} />
      <News data={newsComponentData} />
    </main>
  );
}
