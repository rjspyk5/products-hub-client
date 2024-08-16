import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

export const Products = () => {
  const [allProducts, setallProducts] = useState([]);
  const [date, setdate] = useState([[new Date(), new Date()]]);
  const [isLoading, setisLoading] = useState(false);
  const handleFilter = async () => {
    console.log("test");
  };
  return (
    <div>
      <h1>Products</h1>

      <div className="flex space-x-2">
        <div className="lg:w-[20%] space-y-4 hidden lg:block *:shadow-md *:bg-base-100 *:rounded-sm">
          <div className="flex py-[14px]  justify-between items-center">
            <p>Filter</p>
            <p>Clear</p>
          </div>
          <div>
            <details open={true} className="collapse collapse-arrow ">
              <summary className="collapse-title font-medium">
                Catagories
              </summary>
              <div className="collapse-content">
                <p>content</p>
              </div>
            </details>
          </div>
          <div>
            <details open={true} className="collapse collapse-arrow ">
              <summary className="collapse-title font-medium">Brand</summary>
              <div className="collapse-content">
                <p>content</p>
              </div>
            </details>
          </div>
          <div>
            <details open={true} className="collapse collapse-arrow ">
              <summary className="collapse-title font-medium">Brand</summary>
              <div className="collapse-content">
                <div>
                  <Datepicker value={date} primaryColor={"indigo"} />
                </div>
              </div>
            </details>
          </div>
          <div>
            {" "}
            <Datepicker value={date} primaryColor={"indigo"} />
          </div>
        </div>
        <div className="lg:w-[80%] w-full">
          <div className=" shadow-md p-2 flex justify-between items-center gap-2  bg-base-100 rounded-sm">
            <div className="lg:hidden">filter</div>
            <div className="flex-grow ">
              <input className="w-full" type="text" placeholder="Search Here" />
            </div>
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
