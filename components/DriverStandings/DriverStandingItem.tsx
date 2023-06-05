'use client';

import { Table } from 'flowbite-react';

import './style.css';

type Props = {
  driverStandingData: any;
};

export const DriverStandingItem = ({ driverStandingData }: Props) => {
  const {
    position,
    points,
    wins,
    Driver: { givenName, familyName, nationality, permanentNumber },
  } = driverStandingData;

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
