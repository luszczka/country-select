import type { QueryFunction } from "@tanstack/react-query";
import { jsonFetcher } from "./fetcher";
import { AllCountriesResult } from "./types";

export const allCountriesQueryKey = () => {
  return ["all-countries"] as const;
};

export const allCountries: QueryFunction<
  AllCountriesResult[],
  ReturnType<typeof allCountriesQueryKey>
> = ({ queryKey: [,] }) => {
  return jsonFetcher<AllCountriesResult[]>({
    init: { method: "GET" },
  });
};
