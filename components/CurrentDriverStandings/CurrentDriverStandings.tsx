'use client';

import { Table } from 'flowbite-react';

import { CurrentDriverStandingItem } from './CurrentDriverStandingItem';
import { CurrentDriverStanding, CurrentDriverStandingsProps } from './types';

export function CurrentDriverStandings({ currentDriverStandings }: CurrentDriverStandingsProps) {
  return (
    <div className='p-3 w-[540px] inline-flex flex-col items-center'>
      <span className='text-slate-700'>Driver standings</span>
      <Table>
        <Table.Head className='text-xs normal-case'>
          <Table.HeadCell className='driver-standings-table-padding'>Position</Table.HeadCell>
          <Table.HeadCell className='driver-standings-table-padding'>Points</Table.HeadCell>
          <Table.HeadCell className='driver-standings-table-padding'>Wins</Table.HeadCell>
          <Table.HeadCell className='driver-standings-table-padding'>Driver</Table.HeadCell>
          <Table.HeadCell className='driver-standings-table-padding'>Number</Table.HeadCell>
          <Table.HeadCell className='driver-standings-table-padding'>Nationality</Table.HeadCell>
        </Table.Head>
        <Table.Body className='divide-y'>
          {currentDriverStandings.DriverStandings.map((driverStanding: CurrentDriverStanding) => (
            <CurrentDriverStandingItem driverStanding={driverStanding} key={driverStanding.position} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
