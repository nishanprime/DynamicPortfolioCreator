import cors from "cors";

const allowedOrigins = (app) => {
  app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );
};
export { allowedOrigins };
