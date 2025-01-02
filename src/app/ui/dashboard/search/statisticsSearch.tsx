"use client";

import React, { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Search: React.FC = () => {

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  const handleSearch = useCallback(
    (term: number | null) => {
      const params = new URLSearchParams(searchParams);
      if (term) {
        params.set("month", term.toString());
      } else {
        params.delete("month");
      }
      replace(`${pathname}?${params.toString()}`);
    },
    [pathname, replace, searchParams]
  );

  const currentMonth = parseInt(searchParams.get("month") || "", 10);

  return (
    <div className="grid grid-cols-4 gap-8 md:grid-cols-12">
      {months.map((month) => (
        <div
          key={month}
          onClick={() => handleSearch(month)}
          className={`w-[38px] h-[38px] rounded flex items-center justify-center cursor-pointer ${
            currentMonth === month
              ? "bg-blue-900 text-white"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          aria-label={`Select month ${month}`}
        >
          {month}
        </div>
      ))}
    </div>
  );
};

export default Search;
