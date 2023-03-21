import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';

import { getFruits, useGetFruits } from '@/apis/api';

function Home() {
  const { data: fruits } = useGetFruits();

  return (
    <main>
      <h1>Fruits</h1>
      {fruits &&
        fruits.map(fruit => {
          return (
            <div key={fruit.id}>
              <h2>{fruit.name}</h2>
            </div>
          );
        })}
    </main>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['fruits'], getFruits);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Home;
