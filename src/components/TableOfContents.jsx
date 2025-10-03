import NewsGramContactList from "./NewsGramContactList"

export default function TableOfContents() {
  return (
    <div className="py-16 sm:py-24">
        <div className="bg-[#00594f] px-4 py-3 text-white text-sm rounded my-3 mb-8">
            <strong>Note:</strong> This is not an accurate ToC, it's merely a representation of a Table of Contents.
        </div>
        <div className="grid md:grid-cols-2 gap-8">
            <div className="order-2 sm:order-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-8">NewsGram Editorial Team</h3>
                <NewsGramContactList />
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-8">Table of Contents</h3>

                <div className="my-2 flex justify-between">
                    <div className="max-w-[70%]">
                        Info - C.A. Trusted Servants
                    </div>
                    <div className="text-right">
                        Page 1
                    </div>
                </div>
                <div className="my-2 flex justify-between">
                    <div className="max-w-[70%]">
                        The Gift Of Friendship
                    </div>
                    <div className="text-right">
                        Page 2
                    </div>
                </div>
                <div className="my-2 flex justify-between">
                    <div className="max-w-[70%]">
                         The Freedom Fund (How to Donate to C.A.)
                    </div>
                    <div className="text-right">
                        Page 3
                    </div>
                </div>
                <div className="my-2 flex justify-between">
                    <div className="max-w-[70%]">
                        2026 Convention
                    </div>
                    <div className="text-right">
                        Page 5
                    </div>
                </div>
                <div className="my-2 flex justify-between">
                    <div className="max-w-[70%]">
                        Trustee’s Corner
                    </div>
                    <div className="text-right">
                        Page 6
                    </div>
                </div>
                <div className="my-2 flex justify-between">
                    <div className="max-w-[70%]">
                        IT's corner
                    </div>
                    <div className="text-right">
                        Page 7
                    </div>
                </div>
                <div className="my-2 flex justify-between">
                    <div className="max-w-[70%]">
                        S&B's Corner
                    </div>
                    <div className="text-right">
                        Page 8
                    </div>
                </div>
                <div className="my-2 flex justify-between">
                    <div className="max-w-[70%]">
                        Conference's Corner
                    </div>
                    <div className="text-right">
                        Page 9
                    </div>
                </div>
                {/* <div className="my-2 flex justify-between">
                    <div className="max-w-[70%]">
                        How Hope, Faith & Courage Build
                    </div>
                    <div className="text-right">
                        11 & 12
                    </div>
                </div>
                <div className="my-2 flex justify-between">
                    <div className="max-w-[70%]">
                        Self-Esteem In Recovery
                    </div>
                    <div className="text-right">
                        12
                    </div>
                </div>
                <div className="my-2 flex justify-between">
                    <div className="max-w-[70%]">
                        Theme & Deadline for Next Issue
                    </div>
                    <div className="text-right">
                        13
                    </div>
                </div>
                <div className="my-2 flex justify-between">
                    <div className="max-w-[70%]">
                        Self-Esteem In Recovery
                    </div>
                    <div className="text-right">
                        14 & 15
                    </div>
                </div>
                <div className="my-2 flex justify-between">
                    <div className="max-w-[70%]">
                        Public Information Committee Survey
                    </div>
                    <div className="text-right">
                        16
                    </div>
                </div>
                <div className="my-2 flex justify-between">
                    <div className="max-w-[70%]">
                        Self-Esteem
                    </div>
                    <div className="text-right">
                        17 & 18
                    </div>
                </div>
                <div className="my-2 flex justify-between">
                    <div className="max-w-[70%]">
                        Trustee’s Corner
                    </div>
                    <div className="text-right">
                        19
                    </div>
                </div>
                <div className="my-2 flex justify-between">
                    <div className="max-w-[70%]">
                        UK Distribution of Key Tags
                    </div>
                    <div className="text-right">
                        20
                    </div>
                </div>
                <div className="my-2 flex justify-between">
                    <div className="max-w-[70%]">
                        From Desperation To Confidence
                    </div>
                    <div className="text-right">
                        21
                    </div>
                </div>
                <div className="my-2 flex justify-between">
                    <div className="max-w-[70%]">
                        C.A. Mobile App Info
                    </div>
                    <div className="text-right">
                        22
                    </div>
                </div>
                <div className="my-2 flex justify-between">
                    <div className="max-w-[70%]">
                        Self-Esteem In Recovery
                    </div>
                    <div className="text-right">
                        23 & 24
                    </div>
                </div>
                <div className="my-2 flex justify-between">
                    <div className="max-w-[70%]">
                        Die Heilung Meiner Tiefsten Wunden
                    </div>
                    <div className="text-right">
                        24
                    </div>
                </div>
                <div className="my-2 flex justify-between">
                    <div className="max-w-[70%]">
                        NewsGram Policy
                    </div>
                    <div className="text-right">
                        25
                    </div>
                </div>
                <div className="my-2 flex justify-between">
                    <div className="max-w-[70%]">
                        How To View The NewsGram
                    </div>
                    <div className="text-right">
                        25
                    </div>
                </div>
                <div className="my-2 flex justify-between">
                    <div className="max-w-[70%]">
                        How To Submit An Article etc.
                    </div>
                    <div className="text-right">
                        25
                    </div>
                </div>
                <div className="my-2 flex justify-between">
                    <div className="max-w-[70%]">
                        The Healing Of My Deepest Wounds
                    </div>
                    <div className="text-right">
                        26
                    </div>
                </div>
                <div className="my-2 flex justify-between">
                    <div className="max-w-[70%]">
                        Self-Esteem
                    </div>
                    <div className="text-right">
                        26
                    </div>
                </div>
                <div className="my-2 flex justify-between">
                    <div className="max-w-[70%]">
                        Calendar Of Events
                    </div>
                    <div className="text-right">
                        27
                    </div>
                </div>
                <div className="my-2 flex justify-between">
                    <div className="max-w-[70%]">
                        7th Tradition Donations
                    </div>
                    <div className="text-right">
                        28
                    </div>
                </div> */}
            </div>
        </div>
    </div>
  )
}
