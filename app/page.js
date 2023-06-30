import Image from 'next/image'
import githubIcon from '../public/github-mark/github-mark.svg'

export default function Home() {
  return (
    <div>

      {/* body section */}
      <section class="text-center py-48">
        <div class="font-semibold text-4xl pb-12"><span class="bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text">Hey Dev!</span> Drop down the repo link to visualise</div>
        <form>
              <div class="flex justify-center">
              <div class="relative">
                <input type="search" id="location-search" class=" shadow-md block p-2.5 min-w-[20rem] md:w-[50rem] z-20 text-xl text-gray-900 bg-white rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="github.com/username/repo" required />
                <button type="submit" class="shadow-md absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-slate-800 rounded-r-lg border border-slate-800 hover:bg-black focus:ring-4 focus:outline-none">
                  <svg aria-hidden="true" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  <span class="sr-only">Search</span>
                </button>
              </div>
              </div>
          </form>
      </section>

      {/* footer section */}
      <footer class="text-center py-5 text-md">
      Developed by Abhishek Patil
    </footer>
    </div>
  )
}
