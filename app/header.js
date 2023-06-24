import Image from 'next/image'
import githubIcon from '../public/github-mark/github-mark.svg'

export default function head() {
    return (
        <>
            <div class="py-3 pr-3">
                <div class="max-w-full flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" class="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-10 mr-3" alt="Flowbite Logo" />
                        <span class="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">GitGlance</span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div class=" text-lg hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul class="font-medium flex flex-col rounded-lg  md:flex-row md:space-x-2 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#" class="block px-4 py-0.5 border rounded-2xl hover:border-gray-200  hover:bg-gray-100 focus:border-gray-300 focus:shadow-[inset_0px_1.1px_1px_rgba(0,0,0,0.6)] focus:bg-gray-100" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-0.5 border rounded-2xl hover:border-gray-200  hover:bg-gray-100 focus:border-gray-300 focus:shadow-[inset_0px_1.1px_1px_rgba(0,0,0,0.6)] focus:bg-gray-100">About</a>
                            </li>
                            <li>
                                <a href="https://github.com/abhishekpatil4/gitglance" class="flex px-5 py-0.5 border rounded-2xl hover:border-gray-200  hover:bg-gray-100 focus:border-gray-300 focus:shadow-[inset_0px_1.1px_1px_rgba(0,0,0,0.6)] focus:bg-gray-100">
                                <Image src={githubIcon} alt="github icon" class="h-5 w-5 mt-1 mr-2"/>
                                <span href="https://github.com/abhishekpatil4/gitglance">Star on GitHub</span>    
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}