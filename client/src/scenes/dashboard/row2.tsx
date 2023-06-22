import DashboardBox from "@/components/dashboardBox";
import { useGetKpisQuery, useGetProductsQuery } from "@/state/api";
import { ResponsiveContainer, XAxis, YAxis, Tooltip, Line, CartesianGrid, LineChart,  PieChart, Pie, Cell, ScatterChart, Scatter, ZAxis } from "recharts";
import BoxHeader from "@/components/BoxHeader";
import { Box, Typography, useTheme } from "@mui/material";
import { useMemo } from "react";
import FlexBetween from "@/components/flexBetween";

const pieData = [
    { name: "Group A", value: 600 },
    { name: "Group B", value: 400 }
]

const Row2 = () => {
    const { palette } = useTheme()
    const pieColors = [palette.primary[800], palette.primary[300]]
    const { data: productData } = useGetProductsQuery();
    const { data: oprationalData } = useGetKpisQuery();

    const productExpenseData = useMemo(() => {
        return (
            productData && productData.map(({ _id,price,expense }) => {
                return {
                    id:_id,
                    price:price,
                    expense:expense
                }
            })
        )
    }, [productData])

    const oprationalExpenses = useMemo(() => {
        return (
            oprationalData && oprationalData[0].monthlyData.map(({ month, nonOperationalExpenses, operationalExpenses }) => {
                return {
                    name: month.substring(0, 3),
                    "Non Operatioal Expenses": nonOperationalExpenses,
                    "Operatioal Expenses": operationalExpenses
                }
            })
        )
    }, [oprationalData])

    return (
        <>
            <DashboardBox gridArea="d">
                <BoxHeader title="Operational and non-Operational"
                    subtitle="top line represent revenue,bottom line represent expenses"
                    sideText="+4%" />
                <ResponsiveContainer >
                    <LineChart data={oprationalExpenses}
                        margin={{ top: 20, right: 0, left: -10, bottom: 55 }}>
                        <CartesianGrid vertical={false} stroke={palette.grey[800]} />
                        <XAxis
                            dataKey="name"
                            tickLine={false}
                            style={{ fontSize: "10px" }}
                        />
                        <YAxis
                            yAxisId="left"
                            orientation="right"
                            tickLine={false}
                            axisLine={false}
                            style={{ fontSize: "10px" }}
                        />
                        <YAxis
                            yAxisId="right"
                            tickLine={false}
                            axisLine={false}
                            orientation="right"
                            style={{ fontSize: "10px" }}
                        />
                        <Tooltip />
                        <Line
                            type="monotone"
                            yAxisId="left"
                            dataKey="Non Operatioal Expenses"
                            stroke={palette.tertiary[500]}
                        />
                        <Line
                            type="monotone"
                            yAxisId="right"
                            dataKey="Operatioal Expenses"
                            stroke={palette.primary.main}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </DashboardBox>
            <DashboardBox gridArea="e">
                <BoxHeader title="Campings and Targets" sideText="+4%" />
                <FlexBetween mt=".25rem" gap="1.5rem" pr="1rem">
                    <PieChart width={110} height={100} margin={{ top: 0, right: -10, left: 10, bottom: 0 }}>
                        <Pie
                            stroke="none"
                            data={pieData}
                            innerRadius={18}
                            outerRadius={38}
                            paddingAngle={2}
                            dataKey="value"
                        >
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={pieColors[index]} />
                            ))}
                        </Pie>
                    </PieChart>
                    <Box ml="-.7rem" flexBasis="40%" textAlign="center">
                        <Typography variant="h5" >Target Sales</Typography>
                        <Typography m=".3rem 0" variant="h3" color={palette.primary[300]}>83</Typography>
                        <Typography variant="h6">Finance goals of the camping that is desired</Typography>
                    </Box>
                    <Box flexBasis="40%">
                        <Typography variant="h5" >Losses in Revenue</Typography>
                        <Typography variant="h6" >Losses are down 25%</Typography>
                        <Typography variant="h5" mt=".4rem">Profit Margins</Typography>
                        <Typography variant="h6">Margins are up by 30% from last month.</Typography>
                    </Box>
                </FlexBetween>
            </DashboardBox>
            <DashboardBox gridArea="f">
                <BoxHeader title="Product Prices vs Expenses" sideText="+4%" />
                <ResponsiveContainer width="100%" height="100%">
                    <ScatterChart
                        margin={{
                            top: 20,
                            right: 25,
                            bottom: 40,
                            left: -10,
                        }}
                    >
                        <CartesianGrid stroke={palette.grey[800]} />
                        <XAxis type="number" dataKey="price" name="price" axisLine={false} tickLine={false} style={{ fontSize: "10px" }}
                            tickFormatter={(v) => `$${v}`} />
                        <YAxis type="number" dataKey="expense" name="expense" axisLine={false} tickLine={false} style={{ fontSize: "10px" }}
                            tickFormatter={(v) => `$${v}`} />
                        <ZAxis type="number" range={[20]} />
                        <Tooltip formatter={(v) => `$${v}`} />
                        <Scatter name="Product Expense Ratio" data={productExpenseData} fill={palette.tertiary[500]} />
                    </ScatterChart>
                </ResponsiveContainer>
            </DashboardBox>
        </>
    )
}

export default Row2;