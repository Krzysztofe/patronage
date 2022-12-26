export const sendHTTPRequest = (url, key) => {
  return fetch(url, {
    headers: {
      'x-access-key': key,
    },
  }).then(resp => {
    if (!resp.ok) {
      return resp.json().then(errorData => {
        const error = new Error('Brak danych');
        error.data = errorData;
        throw error;
      });
    }
    return resp.json();
  });
};
