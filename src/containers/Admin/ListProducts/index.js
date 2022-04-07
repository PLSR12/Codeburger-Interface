import React, { useState, useEffect } from 'react'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import CancelIcon from '@mui/icons-material/Cancel'
import CheckBoxIcon from '@mui/icons-material/CheckBox'

import { Container, EditIconStyles } from './styles'
import api from '../../../services/api'
import formatCurrency from '../../../utils/formatCurrency'

function ListProducts () {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function loadOrders () {
      const { data } = await api.get('products')
      console.log(data)
      setProducts(data)
    }
    loadOrders()
  }, [])

  function isOffer (offerStatus) {
    if (offerStatus) {
      return <CheckBoxIcon style={{ color: '#228822' }} />
    } else {
      return <CancelIcon style={{ color: '#CC1717' }} />
    }
  }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell>Nomes</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell align='center'>Produto em oferta</TableCell>
              <TableCell>Editar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products &&
              products.map(product => (
                <TableRow
                  key={product.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {product.name}
                  </TableCell>
                  <TableCell>{formatCurrency(product.price)}</TableCell>
                  <TableCell align='center'>{isOffer(product.offer)}</TableCell>
                  <TableCell>
                    <EditIconStyles />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>{' '}
    </Container>
  )
}

export default ListProducts
