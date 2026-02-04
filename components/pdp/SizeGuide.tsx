"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Ruler } from "lucide-react";

type Unit = "cm" | "in";

const sizeData = {
  cm: [
    { size: "S", chest: "96", length: "70", shoulder: "43", sleeve: "63" },
    { size: "M", chest: "100", length: "72", shoulder: "45", sleeve: "64" },
    { size: "L", chest: "106", length: "74", shoulder: "47", sleeve: "65" },
    { size: "XL", chest: "112", length: "76", shoulder: "49", sleeve: "66" },
  ],
  in: [
    { size: "S", chest: "37.8", length: "27.6", shoulder: "16.9", sleeve: "24.8" },
    { size: "M", chest: "39.4", length: "28.3", shoulder: "17.7", sleeve: "25.2" },
    { size: "L", chest: "41.7", length: "29.1", shoulder: "18.5", sleeve: "25.6" },
    { size: "XL", chest: "44.1", length: "29.9", shoulder: "19.3", sleeve: "26.0" },
  ],
};

export function SizeGuide() {
  const [unit, setUnit] = useState<Unit>("cm");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="inline-flex items-center gap-1 text-sm text-gray-500 underline-offset-2 transition-colors hover:text-gray-900 hover:underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded-sm">
          <Ruler className="h-3.5 w-3.5" />
          Size Guide
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Size Guide</DialogTitle>
        </DialogHeader>

        {/* Unit toggle */}
        <div className="flex gap-1 rounded-lg bg-gray-100 p-1">
          {(["cm", "in"] as const).map((u) => (
            <button
              key={u}
              onClick={() => setUnit(u)}
              className={cn(
                "flex-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                unit === u
                  ? "bg-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              {u === "cm" ? "Centimeters" : "Inches"}
            </button>
          ))}
        </div>

        {/* Size table */}
        <div className="overflow-hidden rounded-lg border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-4 py-2.5 text-left font-semibold">Size</th>
                <th className="px-4 py-2.5 text-left font-semibold">Chest</th>
                <th className="px-4 py-2.5 text-left font-semibold">Length</th>
                <th className="px-4 py-2.5 text-left font-semibold">Shoulder</th>
                <th className="px-4 py-2.5 text-left font-semibold">Sleeve</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {sizeData[unit].map((row) => (
                <tr key={row.size}>
                  <td className="px-4 py-2.5 font-medium">{row.size}</td>
                  <td className="px-4 py-2.5 text-gray-600">{row.chest}</td>
                  <td className="px-4 py-2.5 text-gray-600">{row.length}</td>
                  <td className="px-4 py-2.5 text-gray-600">{row.shoulder}</td>
                  <td className="px-4 py-2.5 text-gray-600">{row.sleeve}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-gray-500">
          Measurements are approximate. If you&apos;re between sizes, we recommend
          sizing up for a more relaxed fit.
        </p>
      </DialogContent>
    </Dialog>
  );
}
