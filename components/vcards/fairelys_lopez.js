/* This example requires Tailwind CSS v2.0+ */
import Image from 'next/image'
import { MailIcon, PhoneIcon, DownloadIcon, ExternalLinkIcon } from '@heroicons/react/solid'

const people = [
  {
    name: 'Fairelys López',
    title: 'Founder',
    company: 'Bitmotto',
    email: 'fairelys@bitmotto.com',
    telephone: '+507 65330409',
    imageUrl:
      'https://bitmottopublic.ams3.digitaloceanspaces.com/signatures/team/fairelys-lopez.jpeg',
    site: 'https://bitmotto.com/',
    linkedin: {
        url: 'https://www.linkedin.com/in/fairelys/',
        user: 'fairelys'
    },
    vcard: 'https://bitmottopublic.ams3.digitaloceanspaces.com/vcards/fairelys.vcf',
  },
  // More people...
]

export default function WVVCARD() {
  return (
    <div>
        <div className="flex items-center justify-center mb-10 w-full md:w-auto">
            <a href="/">
                <Image
                    src="/logo_light.png"
                    alt="Bitmotto"
                    width="191"
                    height="25"
                    className="h-1 w-auto"
                />
            </a>
        </div>
        <div className="flex justify-center">
            <ul role="list" className="w-full px-2 md:w-3/5 lg:1/3 xl:w-1/4">
            {people.map((person) => (
                <li
                key={person.email}
                className="col-span-1 flex flex-col text-center bg-white shadow divide-y divide-gray-200"
                >
                <div className="flex-1 flex flex-col p-4">
                    <img className="w-36 h-36 flex-shrink-0 mx-auto rounded-full" src={person.imageUrl} alt="" />
                    <h3 className="mt-6 text-gray-900 text-sm font-medium">{person.name}</h3>
                    <dl className="mt-1 flex-grow flex flex-col justify-between">
                        <dt className="sr-only">Title</dt>
                        <dd className="text-gray-500 text-sm">{person.title}</dd>
                    </dl>
                </div>
                <div className="flex flex-col p-4">
                    <dl className="mt-1 flex justify-between px-8">
                        <dt className="text-gray-900 text-sm font-medium">Company</dt>
                        <dd className="text-gray-500 text-sm">{person.company}</dd>
                    </dl>
                </div>
                <div className="flex flex-col p-4">
                    <dl className="mt-1 flex justify-between px-8">
                        <dt className="text-gray-900 text-sm font-medium">Website</dt>
                        <dd className="text-gray-500 text-sm">
                            <span className="flex">
                                <span className="mr-1">{person.site}</span>
                                <a
                                    href={person.site}
                                    target="_blank"
                                >
                                    <ExternalLinkIcon className="w-5 h-5" aria-hidden="true" />
                                </a>
                            </span>
                        </dd>
                    </dl>
                </div>
                <div className="flex flex-col p-4">
                    <dl className="mt-1 flex justify-between px-8">
                        <dt className="text-gray-900 text-sm font-medium">Phone</dt>
                        <dd className="text-gray-500 text-sm">{person.telephone}</dd>
                    </dl>
                </div>
                <div className="flex flex-col p-4">
                    <dl className="mt-1 flex justify-between px-8">
                        <dt className="text-gray-900 text-sm font-medium">Email</dt>
                        <dd className="text-gray-500 text-sm">{person.email}</dd>
                    </dl>
                </div>
                <div className="flex flex-col p-4">
                    <dl className="mt-1 flex justify-between px-8">
                        <dt className="text-gray-900 text-sm font-medium">Linkedin</dt>
                        <dd className="text-gray-500 text-sm">
                            <span className="flex">
                                <span className="mr-1">{person.linkedin.user}</span>
                                <a
                                    href={person.linkedin.url}
                                    target="_blank"
                                >
                                    <ExternalLinkIcon className="w-5 h-5" aria-hidden="true" />
                                </a>
                            </span>
                        </dd>
                    </dl>
                </div>
                <div>
                    <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="w-0 flex-1 flex">
                        <a
                        href={`mailto:${person.email}`}
                        className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                        >
                        <MailIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                        <span className="ml-3">Email</span>
                        </a>
                    </div>
                    <div className="-ml-px w-0 flex-1 flex">
                        <a
                        href={`tel:${person.telephone}`}
                        className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                        >
                        <PhoneIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                        <span className="ml-3">Call</span>
                        </a>
                    </div>
                    </div>
                </div>
                <div>
                    <div className="-mt-px flex divide-x divide-gray-200">
                        <a 
                            href={person.vcard}
                            target="_blank"
                            className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-red-500"
                        >
                            <DownloadIcon className="w-5 h-5" aria-hidden="true" /> <span className="ml-3">Download VCARD</span>
                        </a>
                    </div>
                </div>
                </li>
            ))}
            </ul>
        </div>
    </div>
  )
}