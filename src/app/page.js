import { API_URL } from "./config";

async function getGames() {
  const res = await fetch(`${ API_URL }/videogames?populate[platforms][fields][0]=name&populate[cover][fields][0]=url`);
  if (!res.ok) {
    throw new Error('Something went wrong');
  }
  const { data } = await res.json();
  return data;
}

export default async function Home() {
  const games = await getGames();
  console.log(games);
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {
        games.map(game => (
          {game}
        ))
      }
    </main>
  )
}
