import './productList.css';
import {
  DataGrid,
  gridColumnsTotalWidthSelector,
} from '@material-ui/data-grid';
import { productRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { DeleteOutline } from '@material-ui/icons';
import { useContext } from 'react';
import { MovieContext } from '../../context/movieContext/MovieContext';
import { useEffect } from 'react';
import { getMovies, deleteMovies } from '../../context/movieContext/apiCalls';

export default function ProductList() {
  const [data, setData] = useState(productRows);
  const { movies, dispatch } = useContext(MovieContext);

  useEffect(() => {
    console.log('going to trigger');
    getMovies(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    console.log(`receive id is ${id}`);
    deleteMovies(id, dispatch);
  };

  console.log(movies);

  const columns = [
    { field: '_id', headerName: 'ID', width: 90 },
    {
      field: 'movie',
      headerName: 'Movie',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListUser">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: 'genre', headerName: 'Genre', width: 120 },
    { field: 'year', headerName: 'year', width: 120 },
    { field: 'limit', headerName: 'limit', width: 120 },
    { field: 'isSeries', headerName: 'isSeries', width: 120 },

    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={'/product/' + params.row._id}
              state={{ movie: params.row }}
            >
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={movies}
        disableSelectionOnClick
        columns={columns}
        pageSize={20}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
}
