import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { Link } from "react-router-dom";

interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "User",
    accessor: "user",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr: DataType[] = [
  {
    user: "Charas",
    amount: 4500,
    discount: 400,
    quantity: 3,
    status: <span className="red">Processing</span>,
    action: <Link to={"/admin/transaction/sajjddf"}>Manage</Link>,
  },
  {
    user: "Keras",
    amount: 500,
    discount: 40,
    quantity: 2,
    status: <span className="green">Shipped</span>,
    action: <Link to={"/admin/transaction/sajjddf"}>Manage</Link>,
  },
  {
    user: "Woras",
    amount: 5500,
    discount: 300,
    quantity: 4,
    status: <span className="purple">Delivered</span>,
    action: <Link to={"/admin/transaction/sajjddf"}>Manage</Link>,
  },
];

const Transactions = () => {
  const [data] = useState<DataType[]>(arr);

  const table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "dashboard-product-box",
      "Transactions",
      true
    ),
    []
  );
  return (
    <div className="admin-container">
      {/* sideber */}
      <AdminSidebar />
      {/* main */}
      <main>{table()}</main>
    </div>
  );
};

export default Transactions;
