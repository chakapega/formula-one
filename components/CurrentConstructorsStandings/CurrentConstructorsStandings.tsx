'use client';

import { Table } from 'flowbite-react';

import { CurrentConstructorStanding, CurrentConstructorStandingsProps } from './types';
import { CurrentConstructorStandingItem } from './CurrentConstructorStandingItem';

export const CurrentConstructorStandings = ({ currentConstructorsStandings }: CurrentConstructorStandingsProps) => {
  return (
    <div className='p-3 w-[540px] inline-flex flex-col items-center'>
      <span className='text-slate-700'>Constructors standings</span>
      <Table>
        <Table.Head className='text-xs normal-case'>
          <Table.HeadCell className='driver-standings-table-padding'>Position</Table.HeadCell>
          <Table.HeadCell className='driver-standings-table-padding'>Points</Table.HeadCell>
          <Table.HeadCell className='driver-standings-table-padding'>Wins</Table.HeadCell>
          <Table.HeadCell className='driver-standings-table-padding'>Constructor</Table.HeadCell>
          <Table.HeadCell className='driver-standings-table-padding'>Nationality</Table.HeadCell>
        </Table.Head>
        <Table.Body className='divide-y'>
          {currentConstructorsStandings.ConstructorStandings.map((constructorStanding: CurrentConstructorStanding) => (
            <CurrentConstructorStandingItem
              constructorStanding={constructorStanding}
              key={constructorStanding.position}
            />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};
