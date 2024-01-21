const API_HOST = import.meta.env.VITE_API_HOST;

export async function getTopics() {
  return fetch(`${API_HOST}/topics/`)
    .then(res => res.json())
}

export async function getQuiz(quizId) {
  return fetch(`${API_HOST}/topics/${quizId}/`)
    .then(res => res.json())
}