export default function Home() {
  const faqs = [
    {
      q: 'How fast does the failover happen?',
      a: 'Under 60 seconds. We monitor your primary processor via webhooks and API health checks every 30 seconds. The moment we detect a suspension or outage, your backup processor activates and DNS switches automatically.'
    },
    {
      q: 'Which backup processors are supported?',
      a: 'Paddle, PayPal, and Square are pre-configured and ready to go. You connect your accounts once during onboarding and we handle the rest — routing, credentials, and checkout URL switching.'
    },
    {
      q: 'Will my customers notice the switch?',
      a: 'No. We use subdomain switching so your checkout URL stays the same. Customers see a seamless experience while you stay protected behind the scenes.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Payment Resilience
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Instant Backup When{' '}
          <span className="text-[#58a6ff]">Stripe Nukes You</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Pre-configured backup payment processors that activate in under 60 seconds when your primary gets suspended. Never lose revenue to a surprise account ban again.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-lg transition-colors"
        >
          Get Instant Failover — $199/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. Setup in under 10 minutes.</p>

        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[['&lt;60s', 'Failover time'], ['3', 'Backup processors'], ['24/7', 'Health monitoring']].map(([val, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-3xl font-extrabold text-[#58a6ff] mb-1" dangerouslySetInnerHTML={{ __html: val }} />
              <div className="text-sm text-[#8b949e]">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-extrabold text-white mb-1">$199<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stay online</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Automatic failover to Paddle, PayPal, Square',
              'Webhook + API health monitoring every 30s',
              'Instant DNS/subdomain switching',
              'Email + Slack alerts on processor events',
              'Dashboard with processor health history',
              'Onboarding call + white-glove setup'
            ].map(item => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <span className="text-[#58a6ff] mt-0.5 shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-[#6e7681] mt-12">
          &copy; {new Date().getFullYear()} Payment Processor Backup. All rights reserved.
        </p>
      </section>
    </main>
  )
}
