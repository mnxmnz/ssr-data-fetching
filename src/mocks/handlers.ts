import { rest } from 'msw';

import BASE_URL from '@/constants/api';

export const handlers = [
  rest.get(`${BASE_URL}/fruits`, (_, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: '🍎 Apple',
        },
        {
          id: 2,
          name: '🍌 Banana',
        },
        {
          id: 3,
          name: '🍊 Orange',
        },
      ]),
    ),
  ),
];
