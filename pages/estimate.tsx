import { useRouter } from "next/router";

import "../app/globals.css";

export default function Estimate() {
  const router = useRouter();
  const priceQuery = router.query.price;

  const price = Array.isArray(priceQuery) ? priceQuery[0] : priceQuery || "0";

  const formattedPrice = parseFloat(price).toFixed(2);

  return (
    <main className="flex min-h-screen flex-col items-center bg-zinc-200 dark:bg-zinc-900 justify-center p-24">
      <div className="bg-zinc-200 dark:bg-zinc-900">
        <h1 className="text-5xl">PRICE EST: {formattedPrice}</h1>
      </div>
    </main>
  );
}
