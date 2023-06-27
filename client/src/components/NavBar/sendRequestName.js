const sendRequestName = (input) => {
  if (!input || typeof input !== "string") {
    console.log("error en el input");
    return;
  }
  const URL = "http://localhost:3001/recipes/name";
  const params = { name: input };
  const queryString = new URLSearchParams(params).toString();
  const reqURL = `${URL}?${queryString}`;

  const response = fetch(reqURL) //sending a query request by name
    .then((response) => {
      if(response.status === 500) return {status: 500}
      if(response.status === 200) return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  return response;
};
export default sendRequestName;
