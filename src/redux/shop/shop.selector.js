import { createSelector } from "reselect";


const selectShop = state=>state.shop

export const selectCollections = createSelector(
    [selectShop],
    shop=>shop.collections
);

export const selectCollectionAsArray = createSelector(
    [selectCollections],
    collections => collections?Object.keys(collections).map(key=>collections[key]):[]
);

export const selectCollection = collectionUrlParam =>(
    createSelector(
        [selectCollections],
        collections=>(collections?collections[collectionUrlParam]:[])
        )
);

export const selectIsCollectionsFetching = createSelector(
    [selectShop],
    shop=>shop.isFetching
)

export const isCollectionsIsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)