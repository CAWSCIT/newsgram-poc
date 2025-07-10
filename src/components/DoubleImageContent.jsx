
export default function DoubleImageContent() {
  return (
    <div className="py-16 sm:py-24">
        <h2 className="mb-12 text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl text-center">
            Trustee Corner<br />
            <small className="font-normal">Gary P. - Trustee at Large Seattle, Washington, USA</small>
        </h2>
        <div className="text-lg text-gray-700">
            <div>
                <p className="mb-4">
For much of my life I struggled with low self-esteem, never truly believing I was enough, my addiction only
reinforced the idea that I was broken, unworthy, and incapable of change.
</p>
<p className="mb-4">
Through the 12 Steps of Cocaine Anonymous I began to see myself in a new light. The Steps weren’t just a
process of recovery they were a process of discovery helping me uncover the person I had always wanted to be.
Working the Fourth Step was a turning point, taking a fearless and searching moral inventory of myself forced
me to confront the patterns, resentments, and fears that had kept me shackled for so long.
</p>
<p className="mb-4">
It was painful at times but as I put pen to paper something incredible happened, I started to see that my selfhatred wasn’t based on reality, it was built on years of guilt, shame, and the lies I told myself.
</p>
<p className="mb-4">
Step Five, sharing my inventory with another person brought an even greater freedom. For the first time I felt
completely seen yet not judged, I had spent so much of my life hiding but now with each truth I spoke another layer
of the false self I had built up began to fall away.
</p>
<div className="grid sm:grid-cols-2 gap-8 my-12">
    <div>
        <div class="w-full h-auto max-h-[400px] overflow-hidden rounded">
            <img
                src={`${import.meta.env.BASE_URL}img/Office.jpg`}
                alt="Example"
                class="w-full h-full object-cover"
            />
        </div>
        <caption className="text-gray-400 text-sm w-full block">A world service office. Example caption here.</caption>
    </div>
    <div>
        <div class="w-full h-auto max-h-[400px] overflow-hidden rounded">
            <img
                src={`${import.meta.env.BASE_URL}img/Front Doors.jpg`}
                alt="Example"
                class="w-full h-full object-cover"
            />
        </div>
        <caption className="text-gray-400 text-sm w-full block">Another caption here. Good for sharing photo credit and accessibility.</caption>
    </div>
</div>
<p className="mb-4">
It reminds me of the story of Michelangelo and the statue of David, when asked how he created such a masterpiece he said that David had always been inside the marble he simply chipped away everything that wasn’t David.
</p>
<p className="mb-4">
That was my experience with the Fourth and Fifth Steps. The work I did in those Steps chipped away everything that wasn’t truly me, fear, resentment, shame and self-doubt until all that remained was the real Gary. The person I had always wanted to be had been there all along buried beneath years of addiction and self-deception.
</p>
<p className="mb-4">
The 12 Steps didn’t just help me stay clean they helped me find my true self, and for the first time in my life I
could stand tall knowing I was enough.
</p>
            </div>
        </div>
    </div>
  )
}
