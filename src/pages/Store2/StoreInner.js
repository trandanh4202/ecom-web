import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Pagination from '~/components/pagination/Pagination';
import ProductCard from '~/components/Product/ProductCard';
import { getProducts } from '~/features/products/productsSlice';

const StoreInner = (props) => {
    const { currentPageQuery, grid } = props
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products?.products?.products);
    const [paginationModel, setPaginationModel] = useState({
        page: 1,
        pageSize: 8,
    });
    console.log('ello')
    useEffect(() => {
        dispatch(getProducts({ currentPageQuery }));
    }, [dispatch, currentPageQuery]);
    const totalPage = useSelector((state) => state.products?.products?.pagination?.totalPage);

    return (
        <>
            <div className="products-list pb-5">
                <div className="d-flex flex-wrap">
                    {products && products.map((product) => {
                        return ((<ProductCard grid={grid} id={product.id} name={product.name} basePrice={product.basePrice} price={product.price} description={product.description} percentSale={product.percentSale} averageRating={product.averageRating} />))
                    })}
                </div>
                <Pagination
                    currentPage={currentPageQuery}
                    totalPage={totalPage}
                // search={searchQuery}
                // queryParams={queryParams}
                />
            </div>
        </>
    )
}

export default StoreInner