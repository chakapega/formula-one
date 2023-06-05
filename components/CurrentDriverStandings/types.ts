export type CurrentDriverStanding = {
  position: string;
  points: string;
  wins: string;
  Driver: {
    givenName: string;
    familyName: string;
    nationality: string;
    permanentNumber: string;
  };
};

export type CurrentDriverStandingsType = {
  season: string;
  round: string;
  DriverStandings: CurrentDriverStanding[];
};

export type CurrentDriverStandingsProps = {
  currentDriverStandings: CurrentDriverStandingsType;
};

export type CurrentDriverStandingItemProps = {
  driverStanding: CurrentDriverStanding;
};
