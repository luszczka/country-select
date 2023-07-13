import { useState } from "react";
import "./App.css";
import { SimpleModal } from "./components/SimpleModal/SimpleModal";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { QUERY_CLIENT_OPTIONS } from "./services/env";

type FetcherError = {
  code: number;
  message: string;
};

function App() {
  const [queryCache] = useState(
    new QueryCache({
      onError: (error) => {
        const err = error as FetcherError;

        if (err.code === 401) {
          console.log(err);
        }
      },
    })
  );
  const [queryClient] = useState(
    () => new QueryClient({ defaultOptions: QUERY_CLIENT_OPTIONS, queryCache })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <SimpleModal defaultCountryCode="PL" />
      </div>
    </QueryClientProvider>
  );
}

export default App;
