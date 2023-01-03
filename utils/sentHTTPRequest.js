export const sendHTTPRequest = url => {
  return fetch(url).then(resp => {
    if (!resp.ok) {
      return resp.json().then(errorData => {
        const error = new Error("Brak danych");
        error.data = errorData;
        throw error;
      });
    }
    return resp.json();
  });
};
