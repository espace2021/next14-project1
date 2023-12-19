'use client'

import { deleteCateg} from '@/lib/actionsCategorie'
import { useFormStatus } from 'react-dom'
import toast from 'react-hot-toast'

export default function DeleteForm({
  _id,
  nomcategorie,
}) {
  const { pending } = useFormStatus()
  return (
    <form
      action={async (formData) => {
        const res = await deleteCateg(formData)
        toast(res.message)
      }}
    >
      <input type="hidden" name="_id" value={_id} />
      <input type="hidden" name="nomcategorie" value={nomcategorie} />
      <button type="submit" disabled={pending} className="btn btn-ghost text-warning">
        Delete
      </button>
    </form>
  )
}