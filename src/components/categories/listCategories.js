'use client'
import React from 'react'
import { MaterialReactTable} from 'material-react-table';

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
                <div >
                    <button className="btn btn-ghost text-success"
                        onClick={() => {}}
                        size="md"
                    >
                       Edit
                    </button>
                    <button className="btn btn-ghost text-warning"
                        onClick={() => {}}
                        size="md"
                    >
                        Delete
                    </button>
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
