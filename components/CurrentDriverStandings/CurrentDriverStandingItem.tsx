'use client';

import { Table } from 'flowbite-react';

import './style.css';
import { CurrentDriverStandingItemProps } from './types';

export const CurrentDriverStandingItem = ({ driverStanding }: CurrentDriverStandingItemProps) => {
  const {
    position,
    points,
    wins,
    Driver: { givenName, familyName, nationality, permanentNumber },
  } = driverStanding;

  return (
    <Table.Row className='text-xs bg-gray-50'>
      <Table.Cell className='driver-standings-table-padding'>{position}</Table.Cell>
      <Table.Cell className='driver-standings-table-padding'>{points}</Table.Cell>
      <Table.Cell className='driver-standings-table-padding'>{wins}</Table.Cell>
      <Table.Cell className='driver-standings-table-padding'>{`${givenName} ${familyName}`}</Table.Cell>
      <Table.Cell className='driver-standings-table-padding'>{permanentNumber}</Table.Cell>
      <Table.Cell className='driver-standings-table-padding'>{nationality}</Table.Cell>
    </Table.Row>
  );
};
