import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'


const SalesChart = () => {

    const data = [
        {
            name: "JAN",
            sales: 7400,
            visits: 1400
        },
        {
            name: "FEB",
            sales: 2600,
            visits: 9000
        },
        {
            name: "MAR",
            sales: 2600,
            visits: 398
        },
        {
            name: "MAY",
            sales: 7580,
            visits: 5008
        },
        {
            name: "JUNE",
            sales: 7350,
            visits: 8000
        },
        {
            name: "JULY",
            sales: 2510,
            visits: 2460
        },
        {
            name: "AUG",
            sales: 9000,
            visits: 7400
        },
        {
            name: "SEPT",
            sales: 300,
            visits: 5000
        },
   
        {
            name: "OCT",
            sales: 6000,
            visits: 2400
        },

        {
            name: "NOV",
            sales: 7400,
            visits: 9000
        },
    ]
    

  return (
    <>
      {/* <div className="shadow-lg flex flex-col flex-1 gap-4  px-2 items-center">
        <h1 className="font-bold">Sales Overview</h1>
      
        <div className="mt-3 w-full flex-1 text-xs ">
        <h1 className="font-bold">Sales Overview</h1>
				<ResponsiveContainer width="100%" height="92%">
					<BarChart
						width={500}
						height={300}
						data={data}
						margin={{
							top: 20,
							right: 10,
							left: -10,
							bottom: 0
						}}
					>
						<CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="Income" fill="#0ea5e9" />
						<Bar dataKey="Expense" fill="#ea580c" />
					</BarChart>
				</ResponsiveContainer>
			</div>
      </div> */}

      <div className="h-[21rem] ml-4 bg-white p-4 rounded-md flex flex-col shadow-lg ">
			<strong className="text-sm">Sales Overview</strong>
			<div className="mt-3 w-full flex-1 text-xs ">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						width={500}
						height={300}
						data={data}
						margin={{
							top: 10,
							right: 10,
							left: -10,
							bottom: 0
						}}
                        barCategoryGap={8}
					>
						<CartesianGrid/>
						<XAxis fontWeight={600} dataKey="name"/>
						<YAxis fontWeight={600}/>
						<Tooltip />
						<Legend />
						<Bar dataKey="sales" fill="#0F172A"  radius={[10, 10, 10, 10]}/>
						<Bar dataKey="visits" fill="steelblue"  radius={[10, 10, 10, 10]}/>
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>

    </>
  );
};

export default SalesChart;
