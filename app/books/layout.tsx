import { getBooks } from "../utils";

export const revalidate = 3600;

export default async function Layout() {
  await getBooks(); 
}