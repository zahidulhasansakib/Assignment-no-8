import axios from "axios";
import { useEffect, useState } from "react";

const useProduct = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios("/productData.json")
      .then((res) => setProduct(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { product, loading, error };
};

export default useProduct;
