import ContactList from "./ContactList"

export default function DoubleColumn() {
  return (
    <div className="py-16 sm:py-24">
        <div className="grid grid-cols-2 gap-8">
            <div>
                <h3 className="text-lg font-semibold text-gray-900">CAWS Board of Trustees</h3>
                <ContactList />
            </div>
            <div>
                <h3 className="text-lg font-semibold text-gray-900">CAWS Board of Directors</h3>
                <ContactList />
            </div>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-6">
            <div>
                <h3 className="text-lg font-semibold text-gray-900">CAWS Personnel</h3>
                <ContactList />
            </div>
            <div>
                <h3 className="text-lg font-semibold text-gray-900">Newsgram</h3>
                <ContactList />
            </div>
        </div>
    </div>
  )
}
