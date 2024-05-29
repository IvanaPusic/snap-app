import hero from './assets/desktop.svg';
import logo from './assets/logo.svg';
import menu from './assets/menu.svg';
import partners from './assets/partners.svg';

function App() {
  return (
    <>
    {/* Header */}
     <header>
      <nav className='p-[1rem] pb-[4rem] flex justify-between'>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <button>
          <img src={menu} alt="menu" />
        </button>
      </nav>
     </header>
     {/* Main content */}
     <main className='lg:flex flex-row-reverse gap-5 lg:h-screen'>
      <div className='w-full lg:pr-[130px] lg:w-[50%]'>
        <img src={hero} alt="hero" className='inline-block w-full'/>
      </div>
      <div className='px-[1rem] pt-[2.984375rem] flex flex-col justify-center align-middle lg:pl-[165px] lg:w-[50%] '>
        <h1 className = 'text-[#151515] pb-[1rem] mx-auto font-bold text-[2.25rem] leading-[2.625rem] lg:leading-[80px] lg:tracking-[-1.11px] tracking-[-0.5px] lg:text-left lg:m-0 lg:text-[80px] lg:max-w-[540px]'>Make remote work</h1>
        <p className=' lg:text-[18px] lg:leading-[28px] lg:max-w-[445px] text-base min-w-[348px] mx-auto  text-[#686868] text-center pb-[1.5rem] lg:text-left lg:m-0'>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
        <button className='bg-[#151515] mx-auto rounded-lg text-[#FAFAFA] w-[136px] h-[48px] lg:m-0'>Learn more</button>
        <div className='mx-auto pt-[48px] pb-[94px] lg:m-0 lg:pt-[108px]'>
        <img src={partners} alt="partners" className='inline-block mx-auto' />
        </div>
      </div>
     </main>
    </>
  )
}

export default App
