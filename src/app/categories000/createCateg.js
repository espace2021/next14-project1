'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { createProduct } from '@/lib/actions'
import { useEffect, useRef } from 'react'
import toast from 'react-hot-toast'

export default function CreateForm() {
  const [state, formAction] = useFormState(createProduct, {
    message: '',
  })
  const { pending } = useFormStatus()
  const ref = useRef()
  useEffect(() => {
    if (state.message.indexOf('Created product') === 0) {
      ;(document.getElementById('my_modal_3')).close()
      ref.current?.reset()
      toast(state.message)
    } else if (state.message) {
      toast(state.message)
    }
  }, [state.message])

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() =>
          (document.getElementById('my_modal_3')).showModal()
        }
      >
        Create Category
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <h2 className="tex-2xl font-bold pm-4">Create Category</h2>
          <form ref={ref} action={formAction}>
            <div className="form-control w-full max-w-xs py-4">
              <label htmlFor="nomcategorie">Name</label>
              <input
                type="text"
                id="nomcategorie"
                name="nomcategorie"
                className="input input-bordered w-full max-w-xs"
                required
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
                defaultValue="https://res.cloudinary.com/iset-sfax/image/upload/v1658754288/images/flash1.jpg.jpg"
              />
            </div>
            <button
              className="btn btn-primary mr-3"
              type="submit"
              disabled={pending}
            >
              Create
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() =>
                (document.getElementById('my_modal_3')).close()
              }
            >
              Back
            </button>
          </form>
        </div>
      </dialog>
    </div>
  )
}