import { SearchScreen } from "@/screens/search";
import { SearchPageProps } from "./types";

export default function SearchPage({ params }: SearchPageProps) {
  return (
    <main>
      <SearchScreen params={params} />
    </main>
  )
}