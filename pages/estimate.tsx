import { useRouter } from "next/router";

import "../app/globals.css";

export default function Estimate() {
  const router = useRouter();
  const priceQuery = router.query.price;

  const price = Array.isArray(priceQuery) ? priceQuery[0] : priceQuery || "0";

  // 숫자를 미국 달러 형식으로 포맷팅
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(parseFloat(price));

  return (
    <main className="flex min-h-screen flex-col items-center bg-zinc-100 dark:bg-zinc-900 justify-center p-24">
      <div className="bg-zinc-100 dark:bg-zinc-900">
        <h1 className="text-3xl">Price Estimate</h1>
        <h1 className="text-5xl text-amber-500">{formattedPrice}</h1>
      </div>
    </main>
  );
}
