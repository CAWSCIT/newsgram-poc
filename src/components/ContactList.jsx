const trustees = [
  {
    region: "Southwest Region",
    name: "Barry H.",
    role: "Chair",
    location: "Oklahoma City, Oklahoma, USA",
    email: "swrt@ca.org",
        imageUrl:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    region: "Trustee at Large 1",
    name: "Gary P.",
    role: "Vice-Chair",
    location: "Seattle, Washington, USA",
    email: "tal1@ca.org",
        imageUrl:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    region: "Midwest Region",
    name: "Tina R.",
    role: "Secretary",
    location: "Milwaukee, Wisconsin, USA",
    email: "mwrt@ca.org",
        imageUrl:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    region: "World Service Office Trustee",
    name: "Robert B.",
    role: "Assistant Secretary",
    location: "Houston, Texas, USA",
    email: "wsot@ca.org",
        imageUrl:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    region: "Atlantic North Region",
    name: "Richard B.",
    role: "",
    location: "New York, New York, USA",
    email: "anrt@ca.org",
        imageUrl:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    region: "Atlantic South Region",
    name: "Chris M.",
    role: "",
    location: "Fort Myers, Florida, USA",
    email: "asrt@ca.org",
        imageUrl:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    region: "European Region",
    name: "Stuart J.",
    role: "",
    location: "Glasgow, Scotland, UK",
    email: "ert@ca.org",
        imageUrl:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    region: "Mainland European Region",
    name: "Johan T.",
    role: "",
    location: "Stockholm, Sweden",
    email: "mert@ca.org",
        imageUrl:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    region: "Pacific North Region",
    name: "Ruby C.",
    role: "",
    location: "Roy, Utah, USA",
    email: "pnrt@ca.org",
        imageUrl:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    region: "Pacific South Region",
    name: "Aurora L.",
    role: "",
    location: "Fontana, California, USA",
    email: "psrt@ca.org",
        imageUrl:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    region: "World Service Trustee",
    name: "Joni E.",
    role: "",
    location: "San Diego, California, USA",
    email: "wst@ca.org",
        imageUrl:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }
]

const directors = [
  {
    role: "Chair",
    name: "Randy G.",
    location: "Phoenix, Arizona, USA"
  },
  {
    role: "Vice-Chair",
    name: "Yves W.",
    location: "Montreal, Quebec, Canada"
  },
  {
    role: "Secretary",
    name: "Kimberly C.",
    location: "Toronto, Ontario, Canada"
  },
  {
    role: "Treasurer",
    name: "Jonathan H.",
    location: "Phoenix, Arizona, USA"
  },
  {
    role: "Director-at-Large",
    name: "Jason S.",
    location: "Phoenix, Arizona, USA"
  },
  {
    role: "Director-at-Large",
    name: "Wesley B.",
    location: "Croton-on-Hudson, NY, USA"
  },
  {
    role: "Director-at-Large",
    name: "Morten V.",
    location: "Hvidovre, Denmark, Copenhagen"
  },
  {
    role: "Director of Conventions and Conferences",
    name: "Jesse G.",
    location: "Kyle, Texas, USA"
  },
  {
    role: "Director of Operations",
    name: "Tai B.",
    location: "Phoenix, Arizona, USA"
  },
  {
    role: "World Service Trustee",
    name: "Joni E.",
    location: "San Diego, California, USA"
  },
  {
    role: "WSO Trustee",
    name: "Robert B.",
    location: "Houston, Texas, USA"
  }
]

const wsoStaff = [
  {
    role: "Director of Operations",
    name: "Tai B.",
    location: "Phoenix, AZ",
    email: "doo@ca.org"
  },
  {
    role: "WSO Asst. Manager",
    name: "Dawn S.",
    location: "Phoenix, AZ",
    email: "ast.mgr@ca.org"
  },
  {
    role: "Customer Service Representative",
    name: "Ashley P.",
    location: "Phoenix, AZ",
    email: "customerservice@ca.org"
  }
]

export default function ContactList({peopleType = 'trustees'}) {
  let people;
  if(peopleType === 'trustees') {
    people = trustees;
  } else if(peopleType === 'directors') {
    people = directors;
  } else if(peopleType === 'wsoStaff') {
    people = wsoStaff;
  }
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {people.map((person) => (
        <li key={person.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            {/* <img alt="" src={person.imageUrl} className="size-12 flex-none rounded-full bg-gray-50" /> */}
            <div className="min-w-0 flex-auto">
              <p className="text-sm/6 font-semibold text-gray-900">{person.name}</p>
              <p className="mt-1 truncate text-xs/5 text-gray-500">{person.email}</p>
            </div>
          </div>
          <div className="shrink-0 sm:flex sm:flex-col sm:items- text-right">
            <p className="text-sm/6 text-gray-900">{person.role}</p>
            <p className="text-xs/5 text-gray-500">{person.location}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
