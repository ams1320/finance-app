import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { GetKpisResponse, GetProductsResponse ,GetTransactionsResponse} from "./types";

export const api = createApi({
    baseQuery:fetchBaseQuery({baseUrl:import.meta.env.VITE_BASE_URL}),
    reducerPath :"main",
    tagTypes :["Kpis","products","Transaction"],
    endpoints:(build)=> ({
        getKpis :build.query<Array<GetKpisResponse>,void>({
            query : ()=> "kpi/Kpis/",
            providesTags:["Kpis"]
        }),
        getProducts :build.query<Array<GetProductsResponse>,void>({
            query : ()=> "product/products/",
            providesTags:["products"]
        }),
        getTransaction :build.query<Array<GetTransactionsResponse>,void>({
            query : ()=> "transaction/transactions/",
            providesTags:["Transaction"]
        }),
    }), 
})

export const {useGetKpisQuery, useGetProductsQuery ,useGetTransactionQuery} = api;