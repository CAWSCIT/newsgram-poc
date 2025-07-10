export default function CTA2() {
  return (
    <div className="bg-white py-16 sm:py-24 lg:px-8 sm:flex justify-between gap-16 items-center">
      <div className="mx-auto max-w-7xl pb-24 sm:pb-32 lg:px-8">
        <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
          Public Information Survey
        </h2>
        <div className="mt-10 flex items-center gap-x-6">
          <a
            href="https://pi.ca.org/survey"
            className="rounded-md bg-[#00594f] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Get started
          </a>
          <a href="https://pi.ca.org/fact-file-survey/" className="text-sm/6 font-semibold text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <div>
        <img src={`${import.meta.env.BASE_URL}img/pi-survey-qr-code.png`} alt="" class="w-full h-auto" />
      </div>
    </div>
  )
}
