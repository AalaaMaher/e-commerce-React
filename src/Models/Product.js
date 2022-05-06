
let URL = "http://localhost:3000/product";

let ProductCRUD = {
  getAll: () => {
 return fetch(URL) ;
  },
  addProduct: (newObject) => {
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
  },
  getProductById: (id) => {
    return fetch(URL + "/"+id);
  },
  deleteProductById:(id) =>
  {
    fetch( URL+ "/"+ id, {
        method: 'DELETE',
      })
      .then((data) => data.json())
      .then((res) => {
        console.log("Delete");
      })
      .catch((error) => {
        console.log("error",error);
      });
  },
  editProduct:(id,editObject) => {
    fetch( URL+ "/"+ id, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(editObject),
      })
        .then((data) => data.json())
        .then((res) => {
          console.log("edited");
        })
        .catch((error) => {
          console.log("error",error);
        });

  }
} ;

export default ProductCRUD;
