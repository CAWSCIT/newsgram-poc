const donations = [
  { id: 1, area: 'Arizona', group: 'Birds of a Feather', amount: '$168.47' },
  { id: 2, area: '', group: 'A Common Birds Solution', amount: '$26.00' },
  { id: 3, area: 'Colorado', group: 'Nirvana', amount: '$5,008.12' },
  { id: 4, area: '...', group: '...', amount: '...' },
  { id: 5, area: '...', group: '...', amount: '...' },
]

export default function DonationSchedule() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h1 className="text-lg font-semibold text-gray-900">7th Tradition Donations (thank you!)</h1>
      <p className="mt-2 text-sm text-gray-700">
       7th Tradition Donations October - December 2024
Group or Category
      </p>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Area
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Group
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">
                    Amount
                  </th>
                  <th scope="col" className="relative py-3.5 pr-4 pl-3 sm:pr-0">

                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {donations.map((person) => (
                  <tr key={person.id}>
                    <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0">
                      {person.area}
                    </td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{person.group}</td>
                    <td className="relative py-4 pr-4 pl-3 text-right text-sm font-medium whitespace-nowrap sm:pr-0">
                        {person.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
