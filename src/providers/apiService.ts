import { ApiResp } from "../models/apiResponse";

export async function client(endpoint: string, body = null): Promise<ApiResp> {
  const headers = { "Content-Type": "application/json" };
  const url = "https://api.spacexdata.com/v4/" + endpoint;

  const config = {
    method: body ? "POST" : "GET",
    headers: {
      ...headers,
    },
    body,
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  let data;
  try {
    const response = await window.fetch(url, config);
    data = await response.json();
    if (response.ok) {
      return {
        status: response.status,
        data,
        headers: response.headers,
        url: response.url,
      };
    }
    throw new Error(response.statusText);
  } catch (err) {
    return Promise.reject(err.message ? err.message : data);
  }
}

client.get = function (endpoint: string) : Promise<ApiResp>{
  return client(endpoint);
};

client.post = function (endpoint: string, body: object): Promise<ApiResp> {
  return client(endpoint, body);
};
