import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useQuery } from "@tanstack/react-query";
import { listTransaksi } from "../../services/transaksi/TransactionsServices";
ChartJS.register(ArcElement, Tooltip, Legend);

const TransactionChart = () => {
  const { data, isError, isFetched, isLoading, error, refetch } = useQuery({
    queryFn: listTransaksi,
    queryKey: ["list-transaksi"],
  });

  const totals = data?.reduce(
    (acc, transaksi) => {
      if (transaksi?.type === "income") {
        acc.income += transaksi?.amount;
      } else {
        acc.expense += transaksi?.amount;
      }
      return acc;
    },
    { income: 0, expense: 0 }
  );

  const datas = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        label: "Transactions",
        data: [totals?.income, totals?.expense],
        backgroundColor: ["#36A2EB", "#FF6384"],
        borderColor: ["#36A2EB", "#FF6384"],
        borderWidth: 1,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          padding: 25,
          boxWidth: 12,
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: "Income vs Expense",
        font: {
          size: 18,
          weight: "bold",
        },
        padding: {
          top: 10,
          bottom: 30,
        },
      },
    },
    cutout: "70%",
  };

  return (
    <div className="my-8 p-6 bg-white rounded-lg shadow-xl border border-gray-200">
      <h1 className="text-2xl font-bold text-center mb-6">
        Transaction Overview
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "350px",
        }}
      >
        <Doughnut data={datas} options={options} />
      </div>
    </div>
  );
};

export default TransactionChart;
