export enum MethodType {
  POST = "POST",
  PATCH = "PATCH",
  GET = "GET",
  PUT = "PUT",
  DELETE = "DELETE"
}

export const createApiCall = async ({
  method = "GET",
  url = "",
  data = {}
}) => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  return fetch(`${url}`, {
    body: method === "GET" ? undefined : JSON.stringify(data),
    cache: "no-cache",
    headers,
    method
  })
    .then(response => response.json())
    .then(result => result);
};
