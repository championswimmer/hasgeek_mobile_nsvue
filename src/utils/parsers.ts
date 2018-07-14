

interface TokenHash {
  access_token?: string
  token_type?: string
  scope?: string
  expired_in?: string
}
export function parseTokenHash(url: string): TokenHash {
  if (!url.startsWith('login/redirect')) {
    console.error('Wrong token hash format: ' + url)
    return void 0
  }
  const tokenHash: TokenHash = {}
  url
    .split('#')[1]                            // extract location.hash
    .split('&')                               // split into query params
    .forEach((param: string) => {
      const [key, value] = param.split('=')   // split each param (key=value)
      tokenHash[<keyof TokenHash>key] = value         // add to tokenHash
    })
  return tokenHash
}