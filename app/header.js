import Image from 'next/image'
import githubIcon from '../public/github-mark/github-mark.svg'
import logo from '../public/gg_logo/fifth_light.png';


export default function head() {
    return (
        <>
            <div class="py-3 pr-3">
                <div class="max-w-[100rem] flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" class="flex items-center">
                        <Image src={logo} class="h-12 w-12 mr-2" alt="gitglance logo"/>
                        <span class="self-center text-4xl font-bold whitespace-nowrap dark:text-white">GitGlance</span>
                    </a>
                    <a href="https://github.com/abhishekpatil4/gitglance" class="sm:hidden border p-0.5 rounded-full border-gray-300 hover:border-gray-400  hover:bg-gray-100 focus:border-gray-300 focus:shadow-[inset_0px_1.1px_1px_rgba(0,0,0,0.6)] focus:bg-gray-100">
                                <Image src={githubIcon} alt="github icon" class="h-7 w-7"/>
                    </a>
                    <div class=" text-lg w-full hidden md:block md:w-auto" >
                        <ul class="font-medium flex flex-col rounded-lg  md:flex-row md:space-x-2 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="https://github.com/abhishekpatil4/gitglance" class="flex px-5 py-0.5 border border-gray-300 rounded-2xl hover:border-gray-200  hover:bg-gray-100 focus:border-gray-300 focus:shadow-[inset_0px_1.1px_1px_rgba(0,0,0,0.6)] focus:bg-gray-100">
                                <Image src={githubIcon} alt="github icon" class="h-5 w-5 mt-1 mr-2"/>
                                <span>Star on GitHub</span>    
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}