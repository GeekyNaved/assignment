const CustTable = () => {
  return (
    <div className="bg-slate-800 container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
          <h2 className="text-2xl font-bold">Recent Orders</h2>
        </div>
        <div className="overflow-x-auto mt-5">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-3 border-b-2 border-gray-600 text-left text-sm font-bold text-slate-50 tracking-wider"
                >
                  Customer
                </th>
                <th
                  scope="col"
                  className="py-3 border-b-2 border-gray-600 text-left text-sm font-bold text-slate-50 tracking-wider"
                >
                  Order No.
                </th>
                <th
                  scope="col"
                  className="py-3 border-b-2 border-gray-600 text-left text-sm font-bold text-slate-50 tracking-wider"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  className="py-3 border-b-2 border-gray-600 text-left text-sm font-bold text-slate-50 tracking-wider"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-5 border-b border-gray-600 text-xs">John</td>
                <td className="py-5 border-b border-gray-600 text-xs">1234</td>
                <td className="py-5 border-b border-gray-600 text-xs">
                  $124.0
                </td>
                <td className="py-5 border-b border-gray-600 text-xs flex justify-start">
                  <div className="rounded-full px-2 py-1 bg-green-500">
                    Delivered
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-5 border-b border-gray-600 text-sm">Jane</td>
                <td className="py-5 border-b border-gray-600 text-sm">54321</td>
                <td className="py-5 border-b border-gray-600 text-sm">
                  $100.0
                </td>
                <td className="py-5 border-b border-gray-600 text-xs flex justify-start">
                  <div className="rounded-full px-2 py-1 bg-green-500">
                    Delivered
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-5 border-b border-gray-600 text-xs">John</td>
                <td className="py-5 border-b border-gray-600 text-xs">1234</td>
                <td className="py-5 border-b border-gray-600 text-xs">
                  $124.0
                </td>
                <td className="py-5 border-b border-gray-600 text-xs flex justify-start">
                  <div className="rounded-full px-2 py-1 bg-red-500">
                    Cancelled
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-5 border-b border-gray-600 text-sm">Jane</td>
                <td className="py-5 border-b border-gray-600 text-sm">54321</td>
                <td className="py-5 border-b border-gray-600 text-sm">
                  $100.0
                </td>
                <td className="py-5 border-b border-gray-600 text-xs flex justify-start">
                  <div className="rounded-full px-2 py-1 bg-red-500">
                    Pending
                  </div>
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustTable;
