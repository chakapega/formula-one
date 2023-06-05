'use client';

import { Table } from 'flowbite-react';

import { CurrentConstructorStandingItemProps } from './types';

export const CurrentConstructorStandingItem = ({ constructorStanding }: CurrentConstructorStandingItemProps) => {
  const {
    position,
    points,
    wins,
    Constructor: { url, name, nationality },
  } = constructorStanding;

  return (
    <Table.Row className='text-xs bg-gray-50'>
      <Table.Cell className='driver-standings-table-padding'>{position}</Table.Cell>
      <Table.Cell className='driver-standings-table-padding'>{points}</Table.Cell>
      <Table.Cell className='driver-standings-table-padding'>{wins}</Table.Cell>
      <Table.Cell className='driver-standings-table-padding'>{name}</Table.Cell>
      <Table.Cell className='driver-standings-table-padding'>{nationality}</Table.Cell>
    </Table.Row>
  );
};
