type RowObj = {
  name: string;
  result: typeof Result[keyof typeof Result];
  date: string;
  project: string;
};

const Result = {
  DEFAULT: 'default',
  WINNER: 'winner',
} as const;

const tableDataComplex: RowObj[] = [
  {
    name: 'Choi',
    result: Result.WINNER,
    date: '2023-12-04',
    project: 'Approved',
  },
  {
    name: 'Ji Won',
    result: Result.DEFAULT,
    date: '2023-12-04',
    project: 'Disable',
  },
  {
    name: 'Seon Woo',
    result: Result.WINNER,
    date: '2023-11-27',
    project: 'Error',
  },
  {
    name: 'Cliff',
    result: Result.DEFAULT,
    date: '2023-11-27',
    project: 'Approved',
  },
];

export { Result, tableDataComplex };
export type { RowObj };
