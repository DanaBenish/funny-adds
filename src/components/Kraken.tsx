import { useState, useEffect } from "react";
import axios from "axios";

const BitcoinPrice = () => {
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await axios.get(
          "https://api.kraken.com/0/public/Ticker?pair=XBTUSD"
        );
        const result = response.data.result.XXBTZUSD;
        setPrice(result.c[0]); // 'c' contains the current price.
        setLoading(false);
      } catch (error) {
        console.error("Error fetching price:", error);
      }
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 10000); // Update every 10 seconds
    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div>
      <h1>Bitcoin Price</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>
          {price ? `$${parseFloat(price).toFixed(2)}` : "Price not available"}
        </p>
      )}
    </div>
  );
};

export default BitcoinPrice;
