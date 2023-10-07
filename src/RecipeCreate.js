import React, { useState } from "react";

function RecipeCreate({createRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const initialFormState= {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }
  
  const [formData,setFormData] = useState({...initialFormState});
  
  
  const handleChange = ({ target }) => {
    const value = target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData)
    setFormData({ ...initialFormState });
  };
  
 /* const [name, setName] = useState("");
    const handleNameChange = (event) => setName(event.target.value);

  const [cuisine, setCuisine] = useState("");
    const handleCuisineChange = (event) => setCuisine(event.target.value);
  
  const [photo, setPhoto] = useState("");
    const handlePhotoChange = (event) => setPhoto(event.target.value);
  
  const [ingredients, setIngredients] = useState("");
    const handleIngredientsChange = (event) => setIngredients(event.target.value);
  
  const [preparation, setPreparation] = useState("");
    const handlePreparationChange = (event) => setPreparation(event.target.value);
  
  
  
  const handleSubmit = (event) =>{
    event.preventDefault();
    createRecipe({name,cuisine,photo,ingredients,preparation})
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  }
  
  */
  
  
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <div>
          <label htmlFor="name"></label>
          
            <input id="name" name="name" required={true} rows={1} onChange={handleChange} value={formData.name} placeholder="Name"/>
          
        </div>
            </td>
            <td>
              <div>
          <label htmlFor="cuisine"></label>
          
            <input id="cuisine" name="cuisine" required={true} rows={1} onChange={handleChange} value={formData.cuisine} placeholder="Cuisine"/>
          
        </div>
            </td>
            <td>
              <div>
          <label htmlFor="photo"></label>
          
            <input id="photo" name="photo" required={true} rows={1} onChange={handleChange} value={formData.photo} type="url" placeholder="URL"/>
          
        </div>
            </td>
            <td>
              <div>
          <label htmlFor="ingredients"></label>
          
            <textarea id="ingredients" name="ingredients" required={true} rows={1} onChange={handleChange} value={formData.ingredients} placeholder = "Ingredients"/>
          
        </div>
            </td>
            <td>
              <div>
          <label htmlFor="preparation"></label>
          
            <textarea id="preparation" name="preparation" required={true} rows={1} onChange={handleChange} value={formData.preparation} placeholder="Preparation"/>
          
        </div>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
