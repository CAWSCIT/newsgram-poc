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
          <p className="text-base/7 font-semibold text-indigo-600">Romford, Essex, England</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            From darkness to light, a recovery story (written only)
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam laboriosam consequatur saepe. Repellat itaque dolores neque, impedit reprehenderit eum culpa voluptates harum sapiente nesciunt ratione.
                </p>
              </blockquote>
              <figcaption className="mt-8 flex gap-x-4">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="mt-1 size-10 flex-none rounded-full bg-gray-50"
                />
                <div className="text-sm/6">
                  <div className="font-semibold text-gray-900">Vinny P.</div>
                  <div className="text-gray-600">Romford, Essex, England</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="max-w-xl text-lg/7 text-gray-700 lg:col-span-7">
            <p>
              I was an addict for 30+ years. From a young age
I experienced situations that I thought were normal but
in fact haunted me and turned me into a person I didn’t
realise I was becoming.
            </p>
            <p className="mt-4">
My childhood friends distanced themselves from
me due to my erratic behaviour in school. I was
gradually more and more dishonest, reckless, violent
and impulsive. I was a compulsive liar in denial about
how I felt and how my actions affected others.
            </p>
            <p className="mt-4">
Feelings and emotions were a nuisance, so I
suppressed them with all sorts of substances including
alcohol and over-the-counter medication.
            </p>
            <p className="mt-4">
For years I thought the problem was how or
what I used, I convinced myself that if I just switched
substances, controlled my intake, or found the right
mix, I could manage.
            </p>
            <p className="mt-4">
But the real problem wasn’t the using it was that
I thought using was a solution, I was trapped in a cycle
of self-destruction desperately trying to silence the
chaos in my mind.
            </p>
            <p className="mt-4">
This destructive mindset and behaviour from a
young age led me to crime, disconnection from my
immediate family, divorce, bankruptcy, a driving ban,
prison, suicide attempts, and life support machines.
            </p>
            <p className="mt-4">
Every rock bottom had a basement, and I found
them all, no matter how far I fell I always found a new
low.
            </p>
            <p className="mt-4">
Just before I had my trip to the ICU unit for life
support, I was lucky to be given a second chance when
I met my now wife, though her support wasn’t enough
and I drove my new family bonkers too.
            </p>
            <p className="mt-4">
In the final moments of that day when I pushed
them too far I lost them. And as much as I wanted to
think it would be ok, they love me so they will take me
back, I can return and do as I see fit, they shut me out.
No matter what I said or how I pleaded, threatened or
tried to manipulate, they would not budge.
            </p>
            <p className="mt-4">
I was forced to accept that the problem was me
and not everyone around me and I was sent to rehab. I
genuinely thought rehab and all these support groups
were a bunch of low life’s and I didn’t belong there. I
was thinking of a plan to get this trip to rehab over and
done with so the family could shut up and I would be
back like nothing ever happened.
            </p>
            <p className="mt-4">
              After going through the rehab process I realised
I was not alone, there were other addicts in similar
situations with life experiences just like mine, and they
are just like anyone else, normal people with their own
troubles and issues.
              </p>
            <p className="mt-4">
              Whilst in rehab I listened to people's stories and
this opened my eyes to this disease that resides in my
mind, and that I have a long road to recovery and
finding my own self again.
</p>
            <p className="mt-4">
              To face every day I needed support that would
help me get through one day at a time as I battle this
disease, I was out in the real world now, not the guardianship of the rehab.
</p>


          </div>
        </div>
      </div>
      {hasDoubleColumn && <DoubleColumnContent />}
    </div>
  )
}
