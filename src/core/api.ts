import { env } from "~/env.mjs";

export type apiMeta = {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
};

export async function api<T>(url: string): Promise<{ data: T; meta: apiMeta }> {
  const ret = await fetch(`${env.STRAP_API_HOST}${url}`, {
    headers: new Headers({
      Authorization: `Bearer ${env.STRAP_API_TOKEN}`,
    }),
  });
  return ret.json();
}
