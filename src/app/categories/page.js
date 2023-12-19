import ListCategories from "@/components/categories/listCategories"
import { Toaster } from 'react-hot-toast'
import CreateForm from '@/components/categories/createCateg'

async function getData() {
    const res = await fetch('http://localhost:3001/api/categories')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   
  export default async function Page() {
    const data = await getData()
   return (
    <main>
    <h1 className="font-bold py-10 text-2xl">Admin Categories</h1>
    <Toaster />
    <CreateForm /> 
    <ListCategories categories={data} />
    </main>
   );
  }