const sendRequestName = (input) => {
  const URL = "http://localhost:3001/recipes/name";
  const params = { name: input };
  const queryString = new URLSearchParams(params).toString(); 
  console.log(`${URL}?${queryString}`);

  fetch(`${URL}?${queryString}`) //sending a query request by name
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
module.exports = sendRequestName;
