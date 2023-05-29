import { rest } from "msw";

export const handlers = [
  rest.get("API to mock", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ dummyData: 1 }));
  }),
];

// Read documentation for further explanation
