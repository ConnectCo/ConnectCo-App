const baseUrl = process.env.EXPO_PUBLIC_BASE_URL;

const fetchApi = async (method: string, url: string, data?: BodyInit, options?: RequestInit) => {
  const { headers, ...rest } = options || {};
  const response = await fetch(baseUrl + url, {
    method,
    headers: headers || { "Content-Type": "application/json" },
    body: data ? JSON.stringify(data) : undefined,
    ...rest,
  });
  return response.json();
};

export const mockApi = {
  get: (url: string, options?: RequestInit) => fetchApi("GET", url, undefined, options),
  post: (url: string, data: BodyInit, options?: RequestInit) =>
    fetchApi("POST", url, data, options),
  put: (url: string, data: BodyInit, options?: RequestInit) => fetchApi("PUT", url, data, options),
  patch: (url: string, data: BodyInit, options?: RequestInit) =>
    fetchApi("PATCH", url, data, options),
  delete: (url: string, options?: RequestInit) => fetchApi("DELETE", url, undefined, options),
};
