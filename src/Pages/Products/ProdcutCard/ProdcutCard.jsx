import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

export const ProdcutCard = ({ product }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="h-72 w-full" src={product?.productImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="font-bold text-lg">{product?.productName}</h2>
        <p className="text-lg">
          <span className="font-semibold">Price:</span> ${product?.price}
        </p>
        <p className="flex">
          <span className="font-semibold ">Rating :</span>{" "}
          <Rating style={{ maxWidth: 80 }} value={product?.ratings} readOnly />
        </p>
        <p>
          <span className="font-semibold">Description :</span>{" "}
          {product?.description}
        </p>
        <p>
          <span className="font-semibold">Brand :</span> {product?.brand}
        </p>
        <p>
          <span className="font-semibold">Category :</span> {product?.category}
        </p>
        <p>
          <span className="font-semibold">Creation Date :</span>{" "}
          {product?.productCreationDate}
        </p>
      </div>
    </div>
  );
};
