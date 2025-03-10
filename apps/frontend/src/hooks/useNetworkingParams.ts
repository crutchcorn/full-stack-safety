import { useMemo } from "react";

export const getBaseUrl = (_env: ImportMetaEnv) => {
  // You can return different base URLs depending on your environmental vars
  return `https://example.com`;
};

export const useNetworkingParams = () => {
  const env = import.meta.env;

  const baseUrl = useMemo(() => {
    if (!env) return "";
    return getBaseUrl(env);
  }, [env]);

  return { baseUrl } as const;
};
