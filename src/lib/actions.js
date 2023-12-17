'use server'
import { revalidatePath } from 'next/cache'
import CategorieModel from './categorieModel'
import dbConnect from './dbConnect'
import { z } from 'zod'

export async function createProduct(prevState, formData) {
  const schema = z.object({
    nomcategorie: z.string().min(3),
    imagecategorie: z.string().min(1),
   })
  const parse = schema.safeParse({
    nomcategorie: formData.get('nomcategorie'),
    imagecategorie: formData.get('imagecategorie'),
  })
  if (!parse.success) {
    console.log(parse.error)
    return { message: 'Form data is not valid' }
  }
  const data = parse.data
  try {
    await dbConnect()
    const product = new CategorieModel(data)
    await product.save()
    revalidatePath('/')
    return { message: `Created product ${data.nomcategorie}` }
  } catch (e) {
    return { message: 'Failed to create product' }
  }
}

export async function deleteProduct(formData) {
  const schema = z.object({
    _id: z.string().min(1),
    nomcategorie: z.string().min(1),
  })
  const data = schema.parse({
    _id: formData.get('_id'),
    nomcategorie: formData.get('nomcategorie'),
  })

  try {
    await dbConnect()
    await CategorieModel.findOneAndDelete({ _id: data._id })
    revalidatePath('/')
    console.log({ message: `Deleted product ${data.nomcategorie}` })
    return { message: `Deleted product ${data.nomcategorie}` }
  } catch (e) {
    return { message: 'Failed to delete product' }
  }
}