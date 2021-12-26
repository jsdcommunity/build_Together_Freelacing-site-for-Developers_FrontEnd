import React from "react";
import { Pie } from "react-chartjs-2";
import { red, green } from "@mui/material/colors";

const ordersLabels = ["Active orders", "Cancelled orders"];
const ordersData = [50, 30];

function PieChart() {
   return (
      <Pie
         data={{
            labels: ordersLabels,
            datasets: [
               {
                  label: "Orders details",
                  data: ordersData,
                  backgroundColor: [red[500], green[500]],
                  hoverOffset: 4,
               },
            ],
         }}
         height={300}
         options={{ maintainAspectRatio: false, responsive: true }}
      />
   );
}

export default PieChart;
