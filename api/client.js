import sanityClient from "@sanity/client";
import dotenv from "dotenv";
dotenv.config();

export default sanityClient({
  projectId: "r90yfh9c",
  dataset: "production",
  useCdn: false,
  apiVersion: "2022-03-09",
  token: process.env.SANITY_API_TOKEN,
});
