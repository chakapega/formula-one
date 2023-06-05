import { CurrentConstructorStandings } from '@/components/CurrentConstructorsStandings/CurrentConstructorsStandings';
import { CurrentConstructorStandingsType } from '@/components/CurrentConstructorsStandings/types';
import { CurrentDriverStandings, CurrentDriverStandingsType } from '@/components/CurrentDriverStandings';

async function getCurrentDriverStandings(): Promise<CurrentDriverStandingsType> {
  const response = await fetch('http://ergast.com/api/f1/current/driverStandings.json', {
    cache: 'no-store',
  });
  const driverStandingsResponse = await response.json();

  return driverStandingsResponse.MRData.StandingsTable.StandingsLists[0];
}

async function getCurrentConstructorsStandings(): Promise<CurrentConstructorStandingsType> {
  const response = await fetch('http://ergast.com/api/f1/current/constructorStandings.json', {
    cache: 'no-store',
  });
  const constructorsStandingsResponse = await response.json();

  return constructorsStandingsResponse.MRData.StandingsTable.StandingsLists[0];
}

export default async function Home() {
  const currentDriverStandings = await getCurrentDriverStandings();
  const currentConstructorsStandings = await getCurrentConstructorsStandings();

  return (
    <>
      <CurrentDriverStandings currentDriverStandings={currentDriverStandings} />
      <CurrentConstructorStandings currentConstructorsStandings={currentConstructorsStandings} />
    </>
  );
}
