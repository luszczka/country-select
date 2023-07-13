import type { QueryClientConfig } from "@tanstack/react-query";

export const API_URL =
  "https://mocki.io/v1/5c4db385-1b35-46cd-b7b8-ec99a592a3cc";

export const QUERY_CLIENT_OPTIONS: QueryClientConfig["defaultOptions"] = {
  queries: {
    cacheTime: 60 * 60 * 6, // seconds
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    staleTime: 60 * 60 * 5, // seconds
  },
};
