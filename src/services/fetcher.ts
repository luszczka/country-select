import { API_URL } from "./env";

type FetcherArgs = {
  init?: RequestInit;
};

export const fetcher = async ({ init }: FetcherArgs) => {
  const url = `${API_URL}`;

  const options = init || {};
  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  const response = await fetch(url, { ...options, headers });

  if (response.status >= 300) {
    const json = await response.json();

    if (json.errors) {
      throw json.errors;
    }

    throw json;
  }

  return response;
};

export const jsonFetcher = async <T>(args: FetcherArgs): Promise<T> => {
  const response = await fetcher(args);
  return response.json();
};
