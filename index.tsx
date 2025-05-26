import Head from 'next/head'

export default function Home() {
  return (
    <div className="p-6">
      <Head>
        <title>Mitra Jaya Store - PPOB</title>
      </Head>
      <h1 className="text-2xl font-bold">Selamat datang di Mitra Jaya Store</h1>
      <p className="mt-2">Layanan PPOB: Pulsa, Token PLN, Paket Data, dan lainnya.</p>
      <a href="/topup" className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded">Top-up Saldo</a>
    </div>
  )
}
