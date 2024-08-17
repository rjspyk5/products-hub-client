import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { useLoaderData } from "react-router-dom";
import Datepicker from "react-tailwindcss-datepicker";

export const Products = () => {
  const [allProducts, setallProducts] = useState([]);
  const [date, setdate] = useState([[new Date(), new Date()]]);
  const [loading, setloading] = useState(false);

  const [sortingvalue, setsortingvalue] = useState("");
  const [brandFilter, setbrandFilter] = useState([]);
  const [catagoriesFilter, setcatagoriesFilter] = useState([]);

  const handleFilter = async (e) => {
    console.log(e.target.value);
  };

  const handleDateRange = (value) => {
    console.log(value);
  };
  const handleSorting = (e) => {
    setsortingvalue(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:5000/catagoriesandbrand");
      const [resultt] = await result.json();
      setbrandFilter(resultt.brands);
      setcatagoriesFilter(resultt.categories);
    };
    fetchData();
  }, []);

  const { data, isLoading, refetch } = useQuery({
    queryKey: [date],
    queryFn: async () => {
      console.log("test");
    },
  });
  return (
    <div>
      <h1>Products</h1>

      <div className="flex space-x-2">
        {/* left side when dekstop version */}
        {/* Dekstop version filtering desgin */}
        <div className="lg:w-[22%] space-y-4 hidden lg:block *:shadow-md *:bg-base-100 *:rounded-sm">
          <div className="flex py-[14px]  justify-between items-center">
            <p>Filter</p>
            <p>Clear</p>
          </div>

          <div>
            <details open={true} className="collapse collapse-arrow ">
              <summary className="collapse-title font-medium">Brand</summary>
              <div className="collapse-content">
                <form action="">
                  {catagoriesFilter.map((el) => {
                    return (
                      <div key={el} className="form-control">
                        <label className="label cursor-pointer">
                          <input
                            value={el}
                            type="checkbox"
                            className="checkbox"
                            onChange={handleFilter}
                          />
                          <span className="label-text">{el}</span>
                        </label>
                      </div>
                    );
                  })}
                </form>
              </div>
            </details>
          </div>
          <div>
            <details open={true} className="collapse collapse-arrow ">
              <summary className="collapse-title font-medium">Brand</summary>
              <div className="collapse-content">
                <form action="">
                  {brandFilter.map((el) => {
                    return (
                      <div key={el} className="form-control">
                        <label className="label cursor-pointer">
                          <input
                            value={el}
                            type="checkbox"
                            className="checkbox"
                            onChange={handleFilter}
                          />
                          <span className="label-text">{el}</span>
                        </label>
                      </div>
                    );
                  })}
                </form>
              </div>
            </details>
          </div>
          <div className="p-2">
            <h1 className="font-semibold p-2">Date Range</h1>{" "}
            <Datepicker
              placeholder="YYYY-MM-DD to YYYY-MM-DD."
              value={date}
              onChange={handleDateRange}
              primaryColor={"indigo"}
            />
          </div>
        </div>
        {/* Right side when dekstop version */}
        <div className="lg:w-[78%] w-full">
          <div className=" shadow-md p-2 flex flex-col lg:flex-row justify-between lg:items-center gap-2  bg-base-100 rounded-sm">
            {/* Search box */}
            <div className="flex-grow order-2 lg:order-1">
              <label className="input input-bordered   h-9 focus:outline-none rounded-xl min-h-6 flex items-center gap-2">
                <input
                  type="text"
                  className="grow h-9  focus:outline-none rounded-xl min-h-6"
                  placeholder="Search"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
            {/* Filter and Sorting div */}
            <div className="flex order-1 lg:order-2 justify-between items-center">
              {/* Filter div */}
              <div className="lg:hidden flex gap-2 items-center">
                <details className="dropdown p-1">
                  <summary className="btn m-1 min-h-1 h-9 ">
                    <HiOutlineAdjustmentsHorizontal /> Filter
                  </summary>
                  <ul className="menu dropdown-content w-80 sm:w-[400px] md:w-[700px] bg-base-100 rounded-box z-[1] p-2 shadow">
                    <div className="space-y-4   *:shadow-md *:bg-base-100 *:rounded-sm">
                      <div className="flex justify-between">
                        <div className="w-full">
                          <details
                            open={true}
                            className="collapse collapse-arrow "
                          >
                            <summary className="collapse-title font-medium">
                              Brand
                            </summary>
                            <div className="collapse-content">
                              <p>content</p>
                            </div>
                          </details>
                        </div>
                        <div className="w-full">
                          <details
                            open={true}
                            className="collapse collapse-arrow "
                          >
                            <summary className="collapse-title font-medium">
                              Brand
                            </summary>
                            <div className="collapse-content">
                              <div>
                                <h1>start</h1>
                              </div>
                            </div>
                          </details>
                        </div>
                      </div>

                      <div className="p-2">
                        <h1 className="font-semibold p-2">Date Range</h1>{" "}
                        <Datepicker
                          placeholder="YYYY-MM-DD to YYYY-MM-DD."
                          value={date}
                          primaryColor={"indigo"}
                        />
                      </div>
                    </div>
                  </ul>
                </details>
              </div>
              {/* Sorting div */}
              <form>
                <div className="flex gap-2 items-center">
                  <label htmlFor="select">Sort by:</label>
                  <select
                    onChange={handleSorting}
                    value={sortingvalue}
                    id="select"
                    className="select select-bordered    h-9 focus:outline-none rounded-xl min-h-6 "
                  >
                    <option value="">Default</option>
                    <option value="ascendingDate">Newest to oldest</option>
                    <option value="descendingDate">Oldest to newest</option>
                    <option value="ascendingPrice">Low to High</option>
                    <option value="descendingPrice">High to Low</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
