export default function Header() {
  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xl uppercase font-semibold text-[#00594F]">Choosing friends while working the program</p>
        <img src={`${import.meta.env.BASE_URL}img/newsgram.png`} alt="" class="w-full h-auto" />
        <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl">
          Vol. 43 No. 3 C.A. World Service Office - 11460 N. Cave Creek Road, Suite 12, Phoenix, AZ, 85020, USA - 3rd Quarter 2025
        </p>
      </div>
    </div>
  )
}
