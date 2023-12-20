'use server'

import { revalidatePath } from 'next/cache'

export async function addCategory(prevState, formData) {
    const nomcategorie= formData.get('nomcategorie')
    const imagecategorie= formData.get('imagecategorie')
    const categorie ={
        nomcategorie,
        imagecategorie
    }

    try {
        const response = await fetch("http://localhost:3001/api/categories", {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(categorie),
        });
        const result = await response.json();
        revalidatePath('/categories')
       if(result.nomcategorie) return { message: `Created category ${result.nomcategorie}` }
       else  return { message: 'Failed to create category' }
    } catch (e) {
  return { message: 'Failed to create category' }
}
}

export async function deleteCateg(_id,nomcategorie) {
   
    try {
        const response = await fetch(`http://localhost:3001/api/categories/${_id}`,{
            method: 'DELETE'
        });
        const result = await response.json();
        console.log(result)
        revalidatePath('/categories')
      return { message: `Deleted category ${nomcategorie}` }
    } catch (e) {
      return { message: 'Failed to delete category' }
    }
  }

  export async function editCateg(_id) {
    try {
        const response = await fetch(`http://localhost:3001/api/categories/${_id}`,{
            method: 'GET'
        });
        const result = await response.json();
        return result 
    } catch (e) {
      return  null 
    }
  }
  
  export async function updateCategory(prevState, formData) {
    const _id= formData.get('_id')
    const nomcategorie= formData.get('nomcategorie')
    const imagecategorie= formData.get('imagecategorie')
    const categorie ={
        _id,
        nomcategorie,
        imagecategorie
    }

    try {
        const response = await fetch(`http://localhost:3001/api/categories/${_id}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(categorie),
        });
        const result = await response.json();
        revalidatePath('/categories')
       if(result.nomcategorie) return { message: `Updated category ${result.nomcategorie}` }
       else  return { message: 'Failed to update category' }
    } catch (e) {
  return { message: 'Failed to update category' }
}
}