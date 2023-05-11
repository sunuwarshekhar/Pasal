import React from 'react'
import Product from './Product'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding:20px;
`
const SearchProducts = ({result}) => {
    console.log(result)
       const searchResults = result.map((item) => (
        <Product key={item._id} item={item} />));
        console.log(result._id)

        return(
            <Container>
                {searchResults}
            </Container>
        )

}

export default SearchProducts
