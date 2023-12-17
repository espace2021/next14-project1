import Image from 'next/image'
import { Toaster } from 'react-hot-toast'
import CreateForm from './createCateg'
import dbConnect from '@/lib/dbConnect'
import CategorieModel from '@/lib/categorieModel'


export default async function Home() {
  await dbConnect()
  const products = (await CategorieModel.find({}).sort({
    _id: -1,
  })) 
  return (
    <div className="mx-auto max-w-2xl lg:max-w-7xl">
      <div className="flex justify-between items-center">
        <h1 className="font-bold py-10 text-2xl">Admin Categories</h1>
        <Toaster />
        <CreateForm />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan={5}>No Category found</td>
            </tr>
          ) : (
            products.map((product) => (
              <tr key={product._id}>
                <td>
                  <Image
                    src={product.imagecategorie}
                    alt={product.nomcategorie}
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                </td>
                <td>{product.nomcategorie}</td>
               <td>
                 
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}