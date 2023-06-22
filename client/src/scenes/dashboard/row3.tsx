import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/dashboardBox";
import FlexBetween from "@/components/flexBetween";
import { useGetKpisQuery, useGetProductsQuery, useGetTransactionQuery } from "@/state/api";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import { Cell, Pie, PieChart } from "recharts";
import { useMemo} from "react";

const Row3 = () => {

    const { palette } = useTheme()
    const pieColors = [palette.primary[800],palette.primary[500]]

    const { data: kpisData } = useGetKpisQuery()
    const { data: productData } = useGetProductsQuery()
    const { data: transactionData } = useGetTransactionQuery();

    const PieChartData = useMemo(()=>{
        if(kpisData){
            const totalExpenses = kpisData[0].totalExpenses;
            return Object.entries(kpisData[0].expensesByCategory).map(
                ([key , value])=>{
                    return[
                        {
                            name :key,
                            value : value
                        },
                        {
                            name :`${key} of total`,
                            value : totalExpenses - value
                        }
                    ]
                }
            )
        }
    },[kpisData])

    const productCloumns = [
        {
            field: "_id",
            headerName: "id",
            flex: 1
        },
        {
            field: "expense",
            headerName: "Expense",
            flex: .5,
            renderCell: (params: GridCellParams) => `$ ${params.value}`,
        },
        {
            field: "price",
            headerName: "Price",
            flex: .5,
            renderCell: (params: GridCellParams) => `$ ${params.value}`,
        },
    ];


    const transactionCloumns = [
        {
            field: "_id",
            headerName: "id",
            flex: 1
        },
        {
            field: "buyer",
            headerName: "Buyer",
            flex: .67,
        },
        {
            field: "amount",
            headerName: "Amount",
            flex: .35,
            renderCell: (params: GridCellParams) => `$ ${params.value}`,
        },
        {
            field: "productIds",
            headerName: "Count",
            flex: .35,
            renderCell: (params: GridCellParams) => (params.value as Array<string>).length,
        },
    ];

    return (
        <>
            <DashboardBox gridArea="g">
                <BoxHeader title="list of products" sideText={`${productData?.length} products`} />
                <Box mt=".5rem" p="0 .5rem" height="75%"
                    sx={{
                        "& .MuiDataGrid-root": {
                            color: palette.grey[300],
                            border: "none"
                        },
                        "& .MuiDataGrid-cell": {
                            borderBottom: ` 1px solid ${palette.grey[800]}`
                        },
                        "& .MuiDataGrid-columnHeaders": {
                            borderBottom: ` 1px solid ${palette.grey[800]}`
                        },
                        "& .MuiDataGrid-columnSeparator": {
                            visibility: "hidden"
                        },
                    }}>
                    <DataGrid
                        columnHeaderHeight={25}
                        rowHeight={35}
                        hideFooter={true}
                        rows={productData || []}
                        columns={productCloumns} />
                </Box>
            </DashboardBox>
            <DashboardBox gridArea="h">
                <BoxHeader title="recent orders" sideText={`${transactionData?.length} latest transactions`} />
                <Box mt="1rem" p="0 .5rem" height="80%"
                    sx={{
                        "& .MuiDataGrid-root": {
                            color: palette.grey[300],
                            border: "none"
                        },
                        "& .MuiDataGrid-cell": {
                            borderBottom: ` 1px solid ${palette.grey[800]}`
                        },
                        "& .MuiDataGrid-columnHeaders": {
                            borderBottom: ` 1px solid ${palette.grey[800]}`
                        },
                        "& .MuiDataGrid-columnSeparator": {
                            visibility: "hidden"
                        },
                    }}>
                    <DataGrid
                        columnHeaderHeight={25}
                        rowHeight={35}
                        hideFooter={true}
                        rows={transactionData || []}
                        columns={transactionCloumns} />
                </Box>
            </DashboardBox>
            <DashboardBox gridArea="i">
                <BoxHeader title="expence breakdown by category" sideText="+4%" />
                <FlexBetween  gap=".5rem" p="0 1rem" textAlign="center">
                    {PieChartData?.map((data, i) => (
                        <Box mt=".5rem" key={`${data[0].name}-${i}`}>
                            <PieChart width={110} height={70} >
                                <Pie
                                    stroke="none"
                                    data={data}
                                    innerRadius={18}
                                    outerRadius={35}
                                    paddingAngle={2}
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={pieColors[index]} />
                                    ))}
                                </Pie>
                            </PieChart>
                            <Typography variant="h5" mt=".2rem"> {data[0].name}</Typography>
                        </Box>
                    ))}
                </FlexBetween>
            </DashboardBox>
            <DashboardBox gridArea="j">
                <BoxHeader title="overall summery and explanation data" sideText="+15%"/>
                <Box height="15px" margin="1.25rem 1rem .4rem 1rem" bgcolor={palette.primary[800]} borderRadius="1rem">
                    <Box height="15px" bgcolor={palette.primary[600]} borderRadius="1rem" width="40%">

                    </Box>
                </Box>
                <Typography variant="h6" margin="0 1rem" >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, adipisci! Animi distinctio ullam, laborum est labore exercitationem cupiditate molestiae? Repellat autem molestias consectetur! Ipsa natus qui magni inventore harum pariatur.
                </Typography>
            </DashboardBox>
        </>
    )
}

export default Row3;