const sendRequestName = (input) => {
    if(!input || typeof input !== 'string'){
        console.log('error en el input')
        return;
    }
  const URL = "http://localhost:3001/recipes/name";
  const params = { name: input };
  const queryString = new URLSearchParams(params).toString(); 
  const reqURL =`${URL}?${queryString}`;

  fetch(reqURL) //sending a query request by name
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
module.exports = sendRequestName;
