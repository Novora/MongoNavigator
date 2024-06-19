import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"

export function FrontPage() {
  return (
    <div className="flex h-screen text-white">
      <aside className="w-64 bg-[#0f2f3a] p-4">
        <header className="flex items-center justify-between mb-6 bg-green-500 rounded-md px-4 py-2">
          <h1 className="text-2xl font-bold text-black">Navigator</h1>
          <button className="h-6 w-6 text-black">
            <button className="h-6 w-6 text-black">
              <SettingsIcon />
            </button>
          </button>
        </header>
        <Button className="w-full mb-6" variant="default">
          New connection <PlusIcon className="ml-2 h-4 w-4" />
        </Button>
        <nav className="space-y-4">
          <div>
            <h2 className="text-sm font-semibold">Saved connections</h2>
            <ul className="mt-2 space-y-2">
              <li className="flex items-center space-x-2">
                <DatabaseIcon className="h-5 w-5 text-green-500" />
                <div>
                  <p className="text-sm">Local</p>
                  <p className="text-xs text-gray-400">15 Jun 2024, 15:34</p>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <DatabaseIcon className="h-5 w-5 text-green-500" />
                <div>
                  <p className="text-sm">Localhost</p>
                  <p className="text-xs text-gray-400">2 Jun 2024, 11:30</p>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <DatabaseIcon className="h-5 w-5 text-green-500" />
                <div>
                  <p className="text-sm">test</p>
                  <p className="text-xs text-gray-400">19 Jun 2024, 12:31</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold flex items-center">
              <ClockIcon className="h-4 w-4 mr-2" />
              Recents
            </h2>
          </div>
        </nav>
      </aside>
      <main className="flex-1 bg-[#0a1e24] p-8">
        <section className="bg-[#0f2f3a] p-6 rounded-lg">
          <header className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-semibold">New Connection</h2>
              <p className="text-sm text-gray-400">Connect to a MongoDB deployment</p>
            </div>
            <button className="flex items-center space-x-2">
              <StarIcon className="h-5 w-5" />
              <p className="text-sm">FAVORITE</p>
            </button>
          </header>
          <div className="mb-4">
            <label htmlFor="uri" className="block text-sm font-medium">
              URI <InfoIcon className="inline h-4 w-4" />
            </label>
            <div className="flex items-center mt-2">
              <Input id="uri" defaultValue="mongodb://localhost:27017/" className="flex-1 bg-[#0a1e24] text-white" />
              <Switch id="edit-connection-string" className="ml-4" />
              <label htmlFor="edit-connection-string" className="ml-2 text-sm">
                Edit Connection String
              </label>
            </div>
          </div>
          <div className="mb-4">
            <Button variant="ghost" className="w-full text-left text-white flex items-center">
              <ArrowRightIcon className="h-4 w-4 mr-2" />
              Advanced Connection Options
            </Button>
          </div>
          <div className="flex space-x-4">
            <Button variant="ghost" className="border border-green-500 text-green-500">
              Save
            </Button>
            <Button variant="ghost" className="border border-green-500 text-green-500">
              Save &amp; Connect
            </Button>
            <Button variant="ghost" className="border border-green-500 text-green-500">
              Connect
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function DatabaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}


function InfoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}


function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
