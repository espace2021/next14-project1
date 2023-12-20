import EditCateg from '@/components/categories/editCategPageForm'
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
 
export default async function Page({params}) {
  const data = await editCateg(params._id)
   return (
    <EditCateg categorie={data} />
  );
}