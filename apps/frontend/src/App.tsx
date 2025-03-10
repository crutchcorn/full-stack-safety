import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PeopleView } from "./views/people/people.view";

const queryClient = new QueryClient();

export function App() {
  return <QueryClientProvider client={queryClient}><PeopleView/></QueryClientProvider>;
}
