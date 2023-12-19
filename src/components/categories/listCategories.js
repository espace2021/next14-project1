'use client'
import React from 'react'
import { MaterialReactTable} from 'material-react-table';

import DeleteForm from './deleteCateg'

const ListCategories = ({categories}) => {

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
                    <button className="btn btn-ghost text-success"
                        onClick={() => {}}
                        size="md"
                    >
                       Edit
                    </button>
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
    <MaterialReactTable columns={columns} data={categories} />
 )
}

export default ListCategories
