export default async function fetcher(
  input: RequestInfo,
  init?: RequestInit
): Promise<any> {
  const res = await fetch(input, init)
  return res.json()
}
