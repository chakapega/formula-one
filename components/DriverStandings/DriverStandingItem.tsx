import React from 'react';
import nationalities from 'i18n-nationality';
import ReactCountryFlag from "react-country-flag"

type Props = {
  driverStandingData: any;
}

export const DriverStandingItem = ({ driverStandingData }: Props) => {
  const { position, points, wins, Driver: { givenName, familyName, nationality, permanentNumber } } = driverStandingData;
  const countryCode = nationalities.getAlpha2Code(nationality, 'en');

  return (
    <div className='flex-row bg-slate-100'>
      <span className='inline-flex justify-center w-16'>{position}</span>
      <span className='inline-flex justify-center w-14 ml-3'>{points}</span>
      <span className='inline-flex justify-center w-10 ml-3'>{wins}</span>
      <span className='inline-flex justify-center w-40 ml-3'>{`${givenName} ${familyName}`}</span>
      <span className='inline-flex justify-center w-16 ml-3'>{permanentNumber}</span>
      <div className='inline-flex justify-center align-middle w-20 h-6 ml-3'>
        <ReactCountryFlag countryCode={countryCode} style={{ width: 24, height: 24 }} svg />
      </div>
    </div>
  )
}
