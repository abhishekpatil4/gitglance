import Image from 'next/image'

export default function Home() {
  return (
    <div>

      {/* body section */}
      <section class="text-center py-48">
        <div class="font-semibold text-4xl pb-12">Hey Dev! Drop down the repo link to visualise</div>
        <form>
              <div class="flex justify-center">
              <div class="relative">
                <input type="search" id="location-search" class="block p-2.5 w-[50rem] z-20 text-xl text-gray-900 bg-gray-50 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="https://github.com/abhishekpatil4/gitglance" required />
                <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
