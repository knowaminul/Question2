import React from "react";
import "../App.css";

const Product = () => {
  const products = [
    { name: "Product A", price: 300 },
    { name: "Product B", price: 200 },
    { name: "Product C", price: 700 },
    { name: "Product D", price: 500 },
    { name: "Product E", price: 650 },
    { name: "Product F", price: 800 },
  ];

  return (
    <div className="container">
      <div className="table-wrapper">
        <table className="table table-striped table-hover">
          <thead style={{ background: "#F5F6FA" }}>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.slice(0, 3).map((product) => (
              <tr key={product.name}>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          class="btn btn-primary"
          type="button"
          data-toggle="collapse"
          data-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          View All
        </button>
      </div>
      <div>
        <div class="collapse" id="collapseExample">
          <div class="card card-body">
            <div className="table-wrapper">
              <table className="table table-striped table-hover">
                <thead style={{ background: "#F5F6FA" }}>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.name}>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
