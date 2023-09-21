import { useState } from "react";

function Table(props) {

  const [data, setData] = useState(null);

  const [warehouseID, setWarehouseID] = useState(null);
  const [warehouseName, setWarehouseName] = useState(null);
  const [warehouseAddress, setWarehouseAddress] = useState(null);
  const [warehousePostalCode, setWarehousePostalCode] = useState(null);
  const [warehouseCity, setWarehouseCity] = useState(null);
  const [warehouseCountry, setWarehouseCountry] = useState(null);
  const [timestamp, setTimestamp] = useState(null);

  async function reload() {

    setData(null);
  }

  return (
    <div className="consumer">
      <button onClick={reload()}>Reload</button>

      <span>
        {warehouseID}
      </span>
      <span>
        {warehouseName}
      </span>
      <span>
        {warehouseAddress}
      </span>
      <span>
        {warehousePostalCode}
      </span>
      <span>
        {warehouseCity}
      </span>
      <span>
        {warehouseCountry}
      </span>
      <span>
        {timestamp}
      </span>
      
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Unit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.amount}</td>
              <td>{item.unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
}

export default Table;