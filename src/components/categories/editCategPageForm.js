'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { updateCategory} from '@/lib/actionsCategorie'
import { useEffect, useRef } from 'react'
import toast from 'react-hot-toast'

export default function CreateForm({categorie}) { console.log(categorie)

  const [state, formAction] = useFormState(updateCategory, {
    message: '',
  })

  const { pending } = useFormStatus()

  const ref = useRef()

  useEffect(() => { 
  
   if (state.message){
      ref.current?.reset()
      toast(state.message)
    }
  }, [state.message])

  return (
    <div>
     
    
          <h2 className="tex-2xl font-bold pm-4">Update Category</h2>
          
          <form ref={ref} action={formAction}>
          <input
                type="hidden"
                id="_id"
                name="_id"
                value={categorie._id} 
                />
            <div className="form-control w-full max-w-xs py-4">
              <label htmlFor="nomcategorie">Name</label>
              <input
                type="text"
                id="nomcategorie"
                name="nomcategorie"
                className="input input-bordered w-full max-w-xs"
                required
                defaultValue={categorie.nomcategorie} 
              />
            </div>
            <div className="form-control w-full max-w-xs py-4">
              <label htmlFor="image">Image</label>
              <input
                type="text"
                id="imagecategorie"
                name="imagecategorie"
                className="input input-bordered w-full max-w-xs"
                required
                defaultValue={categorie.imagecategorie} 
              />
            </div>
            <button
              className="btn btn-primary mr-3"
              type="submit"
              disabled={pending}
            >
              Update
            </button>
           
          </form>
       
    </div>
  )
}