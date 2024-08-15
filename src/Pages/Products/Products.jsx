export const Products = () => {
  return (
    <div>
      <h1>Products</h1>

      <div className="flex space-x-2">
        <div className="w-1/5 border border-gray-500 shadow p-2">
          <h1>test</h1>
        </div>
        <div className="w-4/5 ">
          <div className="border border-gray-500 shadow p-2 flex justify-end">
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Who shot first?
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
