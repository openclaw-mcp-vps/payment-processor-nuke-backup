import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Payment Processor Backup — Never Go Down When Stripe Nukes You',
  description: 'Pre-configured backup payment processors that activate instantly when your primary gets suspended. Protect your revenue with automatic failover to Paddle, PayPal, or Square.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0b7099f3-b295-4f89-ad4a-6c5b06ebf6be"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
