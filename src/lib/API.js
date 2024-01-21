const API_HOST = import.meta.env.VITE_API_HOST;

export async function getTopics() {
  return fetch(`${API_HOST}/topics/`)
    .then(res => res.json())
}