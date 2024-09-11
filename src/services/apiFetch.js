import { BASE_URI } from "../config"

async function apiFetch(endpoint, { method, headers, body } = {}) {
  if(body){
    headers = {
      "Content-Type": "application/json",
      ...headers
    }
  }

  const config = {
    method: method || (body ? "POST" : "GET"),
    headers,
    body: body ? JSON.stringify(body) : null
  }

  const response = await fetch(`${BASE_URI}/${endpoint}`, config);

  let data;
  if(!response.ok) {
    try {
      data = await response.json();
    }catch(error) {
      console.error(error);

      throw new Error(response.statusText);
    }

    throw new Error(JSON.stringify(data.message));
  }

  try {
    data = await response.json();
  }catch(error) {
    data = response.statusText;
  }

  return data;
}

export default apiFetch;
