import cors from "cors";

const allowedOrigins = (app) => {
  let allowedOrigins;
  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV === "production") {
    allowedOrigins = "https://dynamicportfolio.io";
  } else if (process.env.NODE_ENV === "development") {
    allowedOrigins = "http://localhost:3000";
  }
  app.use(
    cors({
      origin: allowedOrigins,
    })
  );
};
export { allowedOrigins };
