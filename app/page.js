import Image from 'next/image'


export default function Home() {
  return (
   <div>
    {/* header section */}
    <section>
      GitGlance Home About Github
    </section>

    {/* body section */}
    <section>
      <div>Hey Dev! Drop down the repo link to visualise</div>
      <input type='text' placeholder='https://github.com/abhishekpatil4/gitglance' />
      <button type='submit'>Generate</button>
    </section>

    {/* footer section */}
    <section>
      Developed by Abhishek Patil
    </section>
   </div>
  )
}
