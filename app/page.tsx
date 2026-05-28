export default function GCLandscapersPricingPage() {
  const sections = [
    {
      title: 'Lawn Care',
      services: [
        ['Small Lawn Mow', '$40'],
        ['Medium Lawn Mow', '$55'],
        ['Large Lawn Mow', '$75+'],
        ['Edging', 'Included'],
        ['Weed Eating / String Trimming', 'Included'],
        ['Blowing Sidewalks & Driveways', 'Included'],
      ],
    },
    {
      title: 'Yard Cleanup',
      services: [
        ['Basic Yard Cleanup', '$100'],
        ['Leaf Cleanup', '$120+'],
        ['Overgrown Yard Cleanup', '$200+'],
        ['Weed Removal', '$50+'],
        ['Haul Away / Dump Runs', 'Extra Charge'],
      ],
    },
    {
      title: 'Bushes & Trees',
      services: [
        ['Bush Trimming', '$50+'],
        ['Hedge Trimming', '$75+'],
        ['Small Tree Trimming', 'Quote Needed'],
      ],
    },
    {
      title: 'Sprinklers & Irrigation',
      services: [
        ['Sprinkler Repair', '$75/hr'],
        ['Irrigation Troubleshooting', '$75/hr'],
        ['Sprinkler Head Replacement', 'Plus Parts'],
        ['Valve & Timer Work', 'Quote Needed'],
      ],
    },
    {
      title: 'Other Services',
      services: [
        ['Mulch Installation', 'Quote Needed'],
        ['Rock Installation', 'Quote Needed'],
        ['Sod Installation', 'Quote Needed'],
        ['Fertilizer & Weed Spray', 'Quote Needed'],
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-green-50 text-gray-900">
      <header className="bg-green-700 text-white py-16 px-6 text-center shadow-lg">
        <h1 className="text-5xl font-bold mb-4">The G.C. Landscapers</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Reliable landscaping services for homeowners. Lawn care, yard cleanups, sprinklers, weed removal, and more.
        </p>
        <div className="mt-8">
          <button className="bg-white text-green-700 px-8 py-3 rounded-2xl font-semibold shadow-md hover:scale-105 transition">
            Call or Text for a Quote Today
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section) => (
            <div
              key={section.title}
              className="bg-white rounded-3xl shadow-md p-6 border border-green-100"
            >
              <h2 className="text-2xl font-bold text-green-700 mb-5">
                {section.title}
              </h2>

              <div className="space-y-4">
                {section.services.map(([service, price]) => (
                  <div
                    key={service}
                    className="flex items-center justify-between border-b pb-2"
                  >
                    <span className="font-medium">{service}</span>
                    <span className="font-bold">{price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <section className="mt-14 bg-green-700 text-white rounded-3xl p-8 text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-green-600 rounded-2xl p-5">
              <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
              <p>Simple, honest pricing with no hidden fees.</p>
            </div>

            <div className="bg-green-600 rounded-2xl p-5">
              <h3 className="text-xl font-semibold mb-2">Reliable Service</h3>
              <p>We show up on time and get the job done right.</p>
            </div>

            <div className="bg-green-600 rounded-2xl p-5">
              <h3 className="text-xl font-semibold mb-2">Local & Professional</h3>
              <p>Serving homeowners with quality landscaping care.</p>
            </div>
          </div>
        </section>

        <section className="mt-14 text-center">
          <h2 className="text-3xl font-bold mb-4">Service Minimum</h2>
          <p className="text-xl font-semibold text-green-700">
            Minimum Service Charge: $50
          </p>

          <div className="mt-10 bg-white rounded-3xl shadow-md p-8 border border-green-100 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-green-700">
              Weekly Lawn Service Discounts Available
            </h3>
            <p className="text-lg text-gray-700">
              Ask about recurring lawn maintenance plans and save money with weekly or biweekly service.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8 text-center mt-16">
        <h3 className="text-2xl font-bold mb-2">The G.C. Landscapers</h3>
        <p>Call or text today for a free quote.</p>
      </footer>
    </div>
  );
}
