let URL = "http://localhost:3000/cart";
let CartCRUD = {
  getAll: () => {
 return fetch(URL) ;
  },
  addCart: (newObject) => {
    fetch(URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newObject),
    })
      .then((data) => data.json())
      .then((res) => {
        console.log("Added");
      })
      .catch((error) => {
        console.log("error",error);
      });
  }
}
export default CartCRUD;