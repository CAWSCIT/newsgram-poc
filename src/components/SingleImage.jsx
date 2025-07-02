export default function SingleImage({ title, imgSrc }) {

  return (
    <div className="py-16 sm:py-24">
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl text-center">
            {title}
        </h2>
        <img src={imgSrc} alt="" className="w-full h-auto rounded mt-12" />
    </div>
  )
}
