import { DriverStandingItem } from "./DriverStandingItem";

type Props = {
  currentDriverStandings: any;
}

export function CurrentDriverStandings({ currentDriverStandings }: Props) {
  return <div>
    <div className='flex-row'>
      <span className='inline-flex justify-center w-16'>Position</span>
      <span className='inline-flex justify-center w-14 ml-3'>Points</span>
      <span className='inline-flex justify-center w-10 ml-3'>Wins</span>
      <span className='inline-flex justify-center w-40 ml-3'>Driver</span>
      <span className='inline-flex justify-center w-16 ml-3'>Number</span>
      <span className='inline-flex justify-center w-16 ml-3'>Nationality</span>
    </div>
    {currentDriverStandings.DriverStandings.map((driverStandingData: any) => (
      <DriverStandingItem driverStandingData={driverStandingData} key={driverStandingData.position} />
    ))}
  </div>;
}