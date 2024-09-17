import { SUNAT_TOKEN, SUNAT_URI } from "../config"

export const getData = async (ruc) => {
  const response = await fetch(`${SUNAT_URI}/${ruc}?token=${SUNAT_TOKEN}`);
  return await response.json();
}
