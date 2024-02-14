import AdminSidebar from "../../components/AdminSidebar";
import { BarChart } from "../../components/Charts";

const BarCharts = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="chart-container">
        <h1>Bar Charts</h1>
        <section>
          <BarChart
            data_1={[200, 444, 343, 556, 778, 455, 990]}
            data_2={[300, 144, 433, 655, 237, 755, 190]}
            title_1="Products"
            title_2="Users"
            bgColor_1={`hsl(260,50%,30%)`}
            bgColor_2={`hsl(360,90%,90%)`}
          />
          <h2>Top Selling Products and Customers</h2>
        </section>
        <section>
          <BarChart
            data_1={[
              200, 444, 343, 556, 778, 455, 990, 1000, 1200, 200, 300, 400,
            ]}
            data_2={[]}
            title_1="Products"
            title_2=""
            bgColor_1={`hsl(180,40%,50%)`}
            bgColor_2=""
            horizontal={true}
            labels={months}
          />
          <h2>Orders throughout this year</h2>
        </section>
      </main>
    </div>
  );
};

export default BarCharts;
