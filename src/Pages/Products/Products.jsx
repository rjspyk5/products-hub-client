import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import Datepicker from "react-tailwindcss-datepicker";
import { ProdcutCard } from "./ProdcutCard/ProdcutCard";
import { useLoaderData } from "react-router-dom";

export const Products = () => {
  const [allProducts, setallProducts] = useState([]);
  const [date, setdate] = useState([]);
  const [loading, setloading] = useState(false);
  const [sortingvalue, setsortingvalue] = useState("");
  const [brandFilter, setbrandFilter] = useState([]);
  const [catagoriesFilter, setcatagoriesFilter] = useState([]);
  const { productsCount } = useLoaderData();
  const [currentPage, setcurrentPage] = useState(1);
  const size = 6;
  const totalPage = Math.ceil(productsCount / size);
  const pages = productsCount && [...Array(totalPage).keys()];
  const [searchTerm, setsearchTerm] = useState("");

  const handleSearch = (e) => {
    setsearchTerm(e.target.value);
  };

  const handleFilter = async (e, type) => {
    const { value, checked } = e.target;
    if (type === "brand") {
      setbrandFilter((pre) =>
        checked ? [...pre, value] : pre.filter((el) => el !== value)
      );
    } else if (type == "categories") {
      setcatagoriesFilter((pre) =>
        checked ? [...pre, value] : pre.filter((el) => el !== value)
      );
    } else if (type === "sort") {
      setsortingvalue(value);
    }
  };

  const handleDateRange = (value) => {
    setdate([value.startDate, value.endDate]);
  };

  useEffect(() => {
    const fetchData = async () => {
      const resultt = await fetch(
        `http://localhost:5000/products?page=${currentPage}&size=${size}&categories=${catagoriesFilter.join(
          ","
        )}&brand=${brandFilter.join(
          ","
        )}&dateRange=${date}&sort=${sortingvalue}&searchTerm=${searchTerm}`
      );
      const result = await resultt.json();
      setallProducts(result);
    };
    fetchData();
  }, [
    currentPage,
    catagoriesFilter,
    brandFilter,
    date,
    sortingvalue,
    searchTerm,
  ]);

  const { data, isLoading, refetch } = useQuery({
    queryKey: [date],
    queryFn: async () => {
      const result = await fetch("http://localhost:5000/catagoriesandbrand");
      const [resultt] = await result.json();
      return resultt;
    },
  });
  console.log(sortingvalue);
  return (
    <div>
      <div className="flex space-x-2">
        {/* left side when dekstop version */}
        {/* Dekstop version filtering desgin */}
        <div className="lg:w-[22%] space-y-4 hidden lg:block *:shadow-md *:bg-base-100 *:rounded-sm">
          <div>
            <details open={true} className="collapse collapse-arrow ">
              <summary className="collapse-title font-medium">
                Categories
              </summary>
              <div className="collapse-content max-h-52 overflow-y-auto">
                <form action="">
                  {data?.categories.map((el) => {
                    return (
                      <div key={el} className="form-control">
                        <label className="label cursor-pointer">
                          <input
                            value={el}
                            type="checkbox"
                            className="checkbox"
                            onChange={(e) => handleFilter(e, "categories")}
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
              <div className="collapse-content  max-h-52 overflow-y-auto">
                <form action="">
                  {data?.brands.map((el) => {
                    return (
                      <div key={el} className="form-control">
                        <label className="label cursor-pointer">
                          <input
                            value={el}
                            type="checkbox"
                            className="checkbox"
                            onChange={(e) => handleFilter(e, "brand")}
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
          {/* first div */}
          <div className=" shadow-md p-2 flex flex-col lg:flex-row justify-between lg:items-center gap-2  bg-base-100 rounded-sm">
            {/* Search box */}
            <div className="flex-grow order-2 lg:order-1">
              <label className="input input-bordered   h-9 focus:outline-none rounded-xl min-h-6 flex items-center gap-2">
                <input
                  type="text"
                  className="grow h-9  focus:outline-none rounded-xl min-h-6"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={handleSearch}
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
                              Categories
                            </summary>
                            <div className="collapse-content  max-h-48 overflow-y-auto">
                              <form action="">
                                {data?.categories.map((el) => {
                                  return (
                                    <div key={el} className="form-control py-1">
                                      <label className="flex items-center gap-1 cursor-pointer">
                                        <input
                                          value={el}
                                          type="checkbox"
                                          className="checkbox text-sm"
                                          onChange={(e) =>
                                            handleFilter(e, "categories")
                                          }
                                        />
                                        <span className="label-text text-xs">
                                          {el}
                                        </span>
                                      </label>
                                    </div>
                                  );
                                })}
                              </form>
                            </div>
                          </details>
                        </div>
                        <div className="w-full">
                          <details
                            open={true}
                            className="collapse collapse-arrow "
                          >
                            <summary className="collapse-title  font-medium">
                              Brand
                            </summary>
                            <div className="collapse-content  max-h-48 overflow-y-auto">
                              <form action="">
                                {data?.brands.map((el) => {
                                  return (
                                    <div key={el} className="form-control py-1">
                                      <label className=" cursor-pointer flex items-center gap-1">
                                        <input
                                          value={el}
                                          type="checkbox"
                                          className="checkbox "
                                          onChange={(e) =>
                                            handleFilter(e, "brand")
                                          }
                                        />
                                        <span className="label-text text-xs">
                                          {el}
                                        </span>
                                      </label>
                                    </div>
                                  );
                                })}
                              </form>
                            </div>
                          </details>
                        </div>
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
                  </ul>
                </details>
              </div>
              {/* Sorting div */}
              <form>
                <div className="flex gap-2 items-center">
                  <label htmlFor="select">Sort by:</label>
                  <select
                    onChange={(e) => handleFilter(e, "sort")}
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
          {/* products div */}
          <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5 p-3">
            {allProducts.map((el) => {
              return <ProdcutCard product={el} key={el._id} />;
            })}
          </div>
          {/* pagination */}
          <div className="flex justify-center items-center">
            <div className="join">
              <button
                onClick={() =>
                  currentPage > 1 && setcurrentPage(currentPage - 1)
                }
                className="btn join-item"
              >
                Previous
              </button>
              {pages.map((el) => {
                return (
                  <button
                    key={el}
                    onClick={() => setcurrentPage(el + 1)}
                    className={`join-item btn btn-square ${
                      currentPage === el + 1 && "bg-[#f15a25] text-white"
                    }`}
                  >
                    {el + 1}
                  </button>
                );
              })}
              <button
                onClick={() =>
                  currentPage < totalPage && setcurrentPage(currentPage + 1)
                }
                className="btn join-item"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
