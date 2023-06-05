export type CurrentConstructorStanding = {
  position: string;
  points: string;
  wins: string;
  Constructor: {
    url: string;
    name: string;
    nationality: string;
  };
};

export type CurrentConstructorStandingsType = {
  season: string;
  round: string;
  ConstructorStandings: CurrentConstructorStanding[];
};

export type CurrentConstructorStandingsProps = {
  currentConstructorsStandings: CurrentConstructorStandingsType;
};

export type CurrentConstructorStandingItemProps = {
  constructorStanding: CurrentConstructorStanding;
};
