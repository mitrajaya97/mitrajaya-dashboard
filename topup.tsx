import { useState } from 'react'

export default function Topup() {
  const [amount, setAmount] = useState(10000)

  const handleTopup = async () => {
    alert('Simulasi top-up sebesar Rp ' + amount)
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Top-up Saldo</h1>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="border p-2 mt-2 w-full"
      />
      <button
        onClick={handleTopup}
        className="bg-green-600 text-white px-4 py-2 rounded mt-4"
      >
        Top-up
      </button>
    </div>
  )
}
