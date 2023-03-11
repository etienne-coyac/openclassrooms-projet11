import { useEffect, useState } from "react";
import { getHousings } from "../api/client";
import { Housing } from "../types/housing";

/**
 * Custom hook for housing usage
 * Redux usage would be a great improvement
 * @returns housings, loading state, error state & refetch data function
 */
function useHousings() {
  const [housings, setHousings] = useState<Housing[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (housings.length === 0) {
      getData();
    }
  }, []);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await getHousings();
      setHousings(res);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { housings, loading, error, refetch: getData };
}

export default useHousings;
