'use client'
import React from 'react'
import { MaterialReactTable} from 'material-react-table';
//import Link from 'next/link';
import DeleteForm from './deleteCateg'
import EditCategForm from './editCategForm'
import { editCateg} from '@/lib/actionsCategorie'
import { useFormStatus } from 'react-dom'

const ListCategories = ({categories}) => {

  const [isEdit,setIsEdit]=React.useState(false)
  const [categorie, setCategorie]=React.useState("")

  const { pending } = useFormStatus()

    const columns = React.useMemo(
        () => [
            {
                accessorKey: 'imagecategorie', 
                header: 'Image',
                Cell: ({ cell }) => (
                       <img
                            src={cell.getValue()}
                            width={100}
                            height={120}
                            className="rounded-lg"
                            alt="Image Category"
                        />
                    )
                 },
          {
            accessorKey: 'nomcategorie', 
            header: 'Name',
            size: 150,
          },
          {
            accessorKey: '_id',
            header: 'Actions',
            size: 100,
            Cell: ({ cell, row }) => (
                <div>
    
   {/*  <Link 
     href={`/categories/${cell.row.original._id}/edit`}
     className="btn btn-ghost text-success">
    Edit 
    </Link>  */}

<form
      action={async () => {
        const res = await editCateg(cell.row.original._id)
        setCategorie(res)
        setIsEdit(true)
      }}
    >
      <button type="submit" disabled={pending} className="btn btn-ghost text-success">
        Edit
      </button>
    </form>  

                    <DeleteForm
                    _id={cell.row.original._id}
                    nomcategorie={cell.row.original.nomcategorie}
                  />
                </div>
            ),
        },
          ],
        [],
      );

  return (
    <>
     <MaterialReactTable columns={columns} data={categories} />
     {isEdit ? <EditCategForm categorie={categorie} />
            :null}
    </>
   
 )
}

export default ListCategories
