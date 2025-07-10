export default function Divider({ wording }) {
  return (
    <div className="sticky top-0 left-0 w-full my-4 z-10 bg-white py-4">
      <div aria-hidden="true" className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-white px-3 text-base font-semibold text-gray-900">{wording}</span>
      </div>
    </div>
  )
}
