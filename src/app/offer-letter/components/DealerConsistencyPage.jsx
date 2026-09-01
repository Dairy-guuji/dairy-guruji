import React from "react";

const bonusRows = [
  { sales: "600 bags", price: "30000 ₹ only" },
  { sales: "700 bags", price: "35000 ₹ only" },
  { sales: "800 bags", price: "40000 ₹ only" },
  { sales: "900 bags", price: "45000 ₹ only" },
  { sales: "1000 bags", price: "50000 ₹ only" },
];

export default function DealerConsistencyPage() {
  return (
    <section className="pdf-page mx-auto w-[210mm] min-h-[297mm] bg-[#f3f4f6] p-[10mm] text-[13px] text-text-dark shadow-lg print:mx-0 print:w-full print:min-h-0 print:shadow-none">
      <div className="mx-auto h-full w-full">
        <header>
          <div className="flex items-start justify-between">
            <img
              src="/logo-dairy-guruji.svg"
              alt="Dairy Guruji logo"
              className="h-12 w-auto  bg-white  object-contain "
            />

            <div className="text-right leading-tight">
              <h2 className="text-[25px] font-extrabold uppercase tracking-wide text-primary">
                DAIRY GURUJI
              </h2>
              <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-text-dark/80">
                (Managed by Bijendera Group)
              </p>
            </div>
          </div>

          <div className="mt-3 h-[2px] w-full bg-primary" />

          <div className="mt-4 text-center">
            <h1 className="text-[33px] font-extrabold leading-tight text-primary">
              Dealer Consistency Champion Bonanza
            </h1>
            <p className="mt-1 text-[14px] font-semibold text-text-dark/85">
              By Bijendera Group (Formerly Known as Dairy Guruji)
            </p>
          </div>
        </header>

        <div className="mt-4 space-y-3.5 text-[13px] leading-snug">
          <section>
            <h3 className="border-l-[3px] border-primary pl-2 text-[14px] font-extrabold uppercase tracking-wide text-text-dark">
              Scheme Period
            </h3>
            <p className="mt-1 text-[13px]">April 2026 to Jun 2026</p>
          </section>

          <section>
            <h3 className="border-l-[3px] border-primary pl-2 text-[14px] font-extrabold uppercase tracking-wide text-text-dark">
              Eligible Product
            </h3>
            <p className="mt-1 text-[13px]">Feed 8000+ only</p>
          </section>

          <section>
            <h3 className="border-l-[3px] border-primary pl-2 text-[14px] font-extrabold uppercase tracking-wide text-text-dark">
              Sales Eligibility Criteria
            </h3>
            <ul className="mt-1 list-disc space-y-0.5 pl-5 text-[13px]">
              <li>Minimum Monthly Sales: 200 bags</li>
              <li>Minimum Quarterly Sales: 600 bags</li>
            </ul>
          </section>

          <p className="rounded-md border border-secondary/70 bg-secondary/10 px-2.5 py-1.5 text-[12px]">
            <span className="font-bold">Invoice Condition:</span> Any invoice of Feed
            8000+ below 200 bags will not be counted under this scheme.
          </p>

          <section>
            <h3 className="border-l-[3px] border-primary pl-2 text-[14px] font-extrabold uppercase tracking-wide text-text-dark">
              Scheme Benefits (Quarterly Sales Basis)
            </h3>

            <table className="mt-1.5 w-full border-collapse border border-[#b9c0cb] bg-white text-center text-[12px]">
              <thead>
                <tr className="bg-slate-100 text-[12px]">
                  <th className="border border-[#b9c0cb] px-2 py-1.5 font-extrabold">
                    Total Sales (8000+)
                  </th>
                  <th className="border border-[#b9c0cb] px-2 py-1.5 font-extrabold">
                    Special Scheme Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {bonusRows.map((row) => (
                  <tr key={row.sales}>
                    <td className="border border-[#b9c0cb] px-2 py-1.5">{row.sales}</td>
                    <td className="border border-[#b9c0cb] px-2 py-1.5 font-semibold">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section>
            <h3 className="border-l-[3px] border-primary pl-2 text-[14px] font-extrabold uppercase tracking-wide text-text-dark">
              Extra Purchase Condition
            </h3>
            <p className="mt-1 text-[13px]">
              If you sell more than 600 bags, a bonus of ₹50 per bag will be
              awarded for the bags sold in excess of that limit.
            </p>
          </section>

          <section>
            <h3 className="border-l-[3px] border-primary pl-2 text-[14px] font-extrabold uppercase tracking-wide text-text-dark">
              Terms &amp; Conditions
            </h3>
            <ol className="mt-1 list-decimal space-y-1 pl-5 text-[12.5px]">
              <li>
                Sales must be continuous for all three months (April to Jun 2026).
              </li>
              <li>
                If no order is placed in July 2026, the scheme will be treated as
                null and void.
              </li>
              <li>
                The scheme amount shall be utilized exclusively for purchasing
                company products.
              </li>
              <li>
                Cash withdrawal, transfer, or payout of the scheme amount is
                strictly not permitted under any circumstances.
              </li>
              <li>Management decision will be final and binding in all aspects.</li>
            </ol>
          </section>

          <table className="mt-1.5 w-full border-collapse border border-[#b9c0cb] bg-white text-center text-[12px]">
            <thead>
              <tr className="bg-slate-100 text-[11px] uppercase tracking-[0.08em] text-gray-500">
                <th className="border border-[#b9c0cb] px-2 py-1.5 font-bold">
                  For Bijendera Group
                </th>
                <th className="border border-[#b9c0cb] px-2 py-1.5 font-bold">For Dealer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[#b9c0cb] px-2 py-1.5">
                  Authorized Signatory
                </td>
                <td className="border border-[#b9c0cb] px-2 py-1.5">
                  Dealer Signature &amp; Stamp
                </td>
              </tr>
              <tr>
                <td className="border border-[#b9c0cb] px-2 py-1.5">
                  Signature: ____________
                </td>
                <td className="border border-[#b9c0cb] px-2 py-1.5">
                  Signature: ____________
                </td>
              </tr>
              <tr>
                <td className="border border-[#b9c0cb] px-2 py-1.5">
                  Name: ____________
                </td>
                <td className="border border-[#b9c0cb] px-2 py-1.5">
                  Name: ____________
                </td>
              </tr>
              <tr>
                <td className="border border-[#b9c0cb] px-2 py-1.5">
                  Date: ____________
                </td>
                <td className="border border-[#b9c0cb] px-2 py-1.5">
                  Date: ____________
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
