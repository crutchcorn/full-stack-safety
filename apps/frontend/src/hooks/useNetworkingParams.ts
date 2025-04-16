import { useMemo } from 'react'

const getBaseUrl = (_env: ImportMetaEnv) => {
  // You can return different base URLs depending on your environmental vars
  return `http://localhost:3000`
}

export const useNetworkingParams = () => {
  const env = import.meta.env

  const baseUrl = useMemo(() => {
    if (!env) return ''
    return getBaseUrl(env)
  }, [env])

  return { baseUrl } as const
}
