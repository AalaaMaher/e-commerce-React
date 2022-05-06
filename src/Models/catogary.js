
let URL = "http://localhost:3000/catogary";
let CatogaryCRUD = {
  getAll: () => {
 return fetch(URL) ;
  },
  addCatogary: (newObject) => {
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
  getCatogaryById: (id) => {
    return fetch(URL + "/"+id);
  },
  deleteCatogaryById:(id) =>
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
  editCatogary:(id,editObject) => {
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

export default CatogaryCRUD;
