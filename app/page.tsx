import { CurrentDriverStandings } from '@/components/DriverStandings';

async function getCurrentDriverStandings() {
  const response = await fetch('http://ergast.com/api/f1/current/driverStandings.json', {
    cache: 'no-store',
  });
  const driverStandingsResponse = await response.json();

  return driverStandingsResponse.MRData.StandingsTable.StandingsLists[0];
}

export default async function Home() {
  const currentDriverStandings = await getCurrentDriverStandings();

  return (
    <>
      <CurrentDriverStandings currentDriverStandings={currentDriverStandings} />
    </>
  );
}
