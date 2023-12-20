'use client'

import { deleteCateg} from '@/lib/actionsCategorie'
import { useFormStatus } from 'react-dom'
import toast from 'react-hot-toast'

export default function DeleteForm({ _id,nomcategorie}) {
  
  const { pending } = useFormStatus()
  return (
    <form
      action={async () => {
        const res = await deleteCateg(_id,nomcategorie)
        toast(res.message)
      }}
    >
      <button type="submit" disabled={pending} className="btn btn-ghost text-warning">
        Delete
      </button>
    </form>
  )
}