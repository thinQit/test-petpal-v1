"use client";

import { Check, Minus } from 'lucide-react'

interface ComparisonRow {
  feature: string
  basic: boolean
  plus: boolean
  premium: boolean
}

interface ComparisonTableProps {
  rows?: ComparisonRow[]
}

export default function ComparisonTable({
  rows = [
    { feature: 'Dog Walking', basic: true, plus: true, premium: true },
    { feature: 'Pet Sitting', basic: false, plus: true, premium: true },
    { feature: 'Grooming Session', basic: false, plus: false, premium: true },
    { feature: 'Vet Visit Assistance', basic: false, plus: false, premium: true },
  ],
}: Partial<ComparisonTableProps>) {
  const Cell = ({ value }: { value: boolean }) =>
    value ? <Check className="mx-auto h-5 w-5 text-[#2EC4B6]" /> : <Minus className="mx-auto h-5 w-5 text-muted-foreground" />

  return (
    <div className="overflow-x-auto rounded-2xl border border-border">
      <table className="min-w-[720px] w-full text-sm">
        <thead className="bg-[#FFF8F0]">
          <tr>
            <th className="sticky left-0 bg-[#FFF8F0] p-4 text-left font-bold">Features</th>
            <th className="p-4">Basic</th>
            <th className="p-4">Plus</th>
            <th className="p-4">Premium</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className="border-t border-border">
              <td className="sticky left-0 bg-background p-4 font-medium">{row.feature}</td>
              <td className="p-4 text-center"><Cell value={row.basic} /></td>
              <td className="p-4 text-center"><Cell value={row.plus} /></td>
              <td className="p-4 text-center"><Cell value={row.premium} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
