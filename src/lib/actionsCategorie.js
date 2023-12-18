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
        console.log(result)
        revalidatePath('/categories')
       if(result.nomcategorie) return { message: `Created category ${result.nomcategorie}` }
       else  return { message: 'Failed to create category' }
    } catch (e) {
  return { message: 'Failed to create category' }
}
}
