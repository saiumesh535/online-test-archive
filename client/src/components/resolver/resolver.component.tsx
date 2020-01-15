import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resolverInit } from './resolver.actions';
import { selectIsResolverLoading } from './resolver.selector';
import RoutingComponent from '../routing/routing.component';

function ResolverComponent() {

    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsResolverLoading)

    useEffect(() => {
        dispatch(resolverInit());
    }, [dispatch]);

    if (isLoading) {
        return (
            <p>Loading....</p>
        )
    }
    return (
        <RoutingComponent />
    )
}

export default ResolverComponent
