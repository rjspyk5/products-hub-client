export const Products = () => {
  return (
    <div>
      <h1>Products</h1>

      <div className="flex space-x-2">
        <div className="lg:w-[20%] space-y-4 hidden lg:block *:shadow-md *:p-2 *:bg-base-100 *:rounded-sm">
          <div className="flex  justify-between items-center">
            <p>Filter</p>
            <p>Clear</p>
          </div>
          <div></div>
        </div>
        <div className="lg:w-[80%] w-full">
          <div className=" shadow-md p-2 flex justify-between lg:justify-end bg-base-100 rounded-sm">
            <div className="lg:hidden">filter</div>
            <form>
              <div className="flex gap-2 items-center">
                <label htmlFor="select">Sort by:</label>
                <select
                  id="select"
                  className="select select-bordered  h-9 focus:outline-none rounded-xl min-h-6 "
                >
                  <option>Default</option>
                  <option value="">Newest to oldest</option>
                  <option value="">Oldest to newest</option>
                  <option value="">Low to High</option>
                  <option value="">High to Low</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
