import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import DoubleColumnContent from './DoubleColumnContent.jsx'

export default function Content({ hasDoubleColumn = false}) {
  return (
    <div className="relative isolate overflow-hidden bg-white py-16 sm:py-24">
      <div
        aria-hidden="true"
        className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
      >
      </div>
      <div className="">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-base/7 font-semibold text-[#00594f]">Albina K.</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            The gift of friendship in the fellowship of Cocaine Anonymous
          </h1>
          <p className="mt-6 text-xl/8 text-gray-700">
            This is an example of a standardized written article with no images.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div className="relative lg:order-last lg:col-span-5">
            <figure className="border-l border-indigo-600 pl-8">
              <blockquote className="text-xl/8 font-semibold tracking-tight text-gray-900">
                <p>
                  My sister often tells me “You have a lot of
friends”, she’s right and I never get tired of hearing it
because it wasn’t always that way.
                </p>
              </blockquote>
              <figcaption className="mt-8 flex gap-x-4">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="mt-1 size-10 flex-none rounded-full bg-gray-50"
                />
                <div className="text-sm/6">
                  <div className="font-semibold text-gray-900">Albina K.</div>
                  <div className="text-gray-600">Kew Gardens, New York, USA</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="max-w-xl text-lg/7 text-gray-700 lg:col-span-7">
            <p>
When I walked into the rooms of Cocaine
Anonymous in 1993 I didn’t know what to expect. My
life was in shambles, my spirit was broken, and I was
completely disconnected from the world and from
myself. I had lost almost everything, my dignity, my
self-respect and many of the relationships I once held
dear. But what I didn’t realize at that time was that I
was about to gain something even more valuable than
what I had lost, true, meaningful friendships that
would carry me through the next three decades of my
life in recovery
            </p>
            <p className="mt-4">
From the very beginning of my journey in
sobriety I was fortunate to find what we in C.A.
lovingly call “sober running buddies”. These weren’t
just people I went to meetings with or shared coffee
with afterward, these were individuals who, like me,
were building new lives from the ashes of addiction.
We formed a bond that could only come from walking
through fire together, we laughed, cried, struggled, and
celebrated, always together. We didn’t just talk about
The Steps or sobriety; we lived it out loud side by
side.
            </p>
            <p className="mt-4">
Over the years these running buddies became
more than just friends, they became my family. We
made it a point not just to stay clean but to live life
fully. Some of my most cherished memories are of the
adventures we’ve had throughout New York City.
Every year, like clockwork, we show up for the
Halloween Day Parade, dressed in outrageous
costumes and full of laughter. We gather for the
Thanksgiving Day Parade, sipping hot cocoa and
feeling grateful not just for our sobriety but for each
other. And on July 4th we always find the best spots for
fireworks sitting on lawn chairs on the East River or
Hudson River. Watching the sky light up with bursts of
color, an outward expression of the inner joy we’ve
cultivated in sobriety.
            </p>



          </div>
        </div>
      </div>
      {hasDoubleColumn && <DoubleColumnContent />}
    </div>
  )
}
