import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

function ProducerPage() {

  const [active, setActive] = useState(false)

  const styles = {
    fullPage: `w-screen h-screen flex flex-col justify-between items-center`,
    nav: `flex w-screen h-1/6 justify-around items-center bg-slate-300/[.9] border-white-900/75 max-w-screen-sm`,
    hamburger: `flex flex-col justify-center items-center`,
    // hamburger: `flex flex-col justify-center items-center transition delay-700 duration-300 ease-in-out origin-left translate-y-full`,
    text: `flex flex-col justify-around`,
    bellowNav: `w-full h-18 flex max-w-screen-sm`,
    mid: `w-full h-32 max-w-screen-sm`,
    farm: `w-11/12 h-1/6 flex justify-around items-center bg-slate-300/[.9] shadow-xl border-white-900/75 rounded-xl max-w-screen-sm`,
    opt: `w-1/3 flex justify-center items-center bg-slate-300/[.9] shadow-2xl border-white-900/75`,
    btn_txt: `text-xs p-1 sm:p-3`,
    btn: `bg-slate-300/[.9] border-white-900/75 h-full w-full`,
    round_bg: `border-2 border-sky-600 w-24 h-24 rounded-full`,
    round: `w-full h-full rounded-full`,
    circle_bg: `w-24 h-full flex flex-col justify-center items-center`,
    left: `w-4/6 h-full flex flex-col justify-center items-start`,
    // hamburgerActive: `relative w-4/5 h-screen mt-auto transition delay-100 duration-700 ease-in-out origin-top-left bg-sky-600 translate-y-0 rounded-xs`

  }


  return (
    <div className={styles.fullPage}>
      <div className={styles.nav}>
        <div className={styles.hamburger}>
          <div className="space-y-1">
            <span className="block w-7 h-1 bg-sky-600 rounded-md"></span>
            <span className="block w-7 h-1 bg-sky-600 rounded-md"></span>
            <span className="block w-4 h-1 bg-sky-600 rounded-md"></span>
          </div>
        </div>
        <div className={styles.text}>
          <span className='text-lg font-semibold text-slate-400'>All Local Producers</span>
          <span className='text-sm font-medium'>1234 ABC dr, Somewhere, CA</span>
        </div>
        <div className='w-8 flex flex-col justify-center items-end'>
          <SearchIcon color='primary' fontSize='large' />
        </div>
      </div>
      <div className={styles.bellowNav}>
        <div className={styles.opt}>
          <Button variant="outlined" className={styles.btn}>
            <span className={styles.btn_txt}>Home Delivery</span>
          </Button>
        </div>
        <div className={styles.opt}>
          <Button variant="outlined" className={styles.btn}>
            <span className={styles.btn_txt}>Take Away</span>
          </Button>
        </div>
        <div className={styles.opt}>
          <Button variant="outlined" className={styles.btn}>
            <span className={styles.btn_txt}>Curbside Pick up</span>
          </Button>
        </div>
      </div>
      <div className={styles.mid}>
        <div className="w-full h-full flex justify-around items-start">
          <div className={styles.circle_bg}>
            <div className={styles.round_bg}>
              <div className={styles.round}></div>
            </div>
            <span>All</span>
          </div>
          <div className={styles.circle_bg}>
            <div className={styles.round_bg}>
              <div className={styles.round}></div>
            </div>
            <span>Produce</span>
          </div>
          <div className={styles.circle_bg}>
            <div className={styles.round_bg}>
              <div className={styles.round}></div>
            </div>
            <span>Meat</span>
          </div>
        </div>
      </div>
      <div className={styles.farm}>
        <div className="">
          <div className={styles.round_bg}>
            <div className={styles.round}></div>
          </div>
        </div>
        <div className={styles.left}>
          <span className="font-semibold text-slate-700">John Doe Farm</span>
          <span className="text-xs font-semibold text-slate-400">Meat</span>
          <span className="text-sm font-semibold text-slate-400">1223 Baker Street, Somewhere, CA 12345</span>
          <span className="text-sm font-semibold text-green-500">Order Online</span>
        </div>
      </div>
      <div className={styles.farm}>
      <div className="">
          <div className={styles.round_bg}>
            <div className={styles.round}></div>
          </div>
        </div>
        <div className={styles.left}>
          <span className="font-semibold text-slate-700">John Doe Farm</span>
          <span className="text-xs font-semibold text-slate-400">Produce</span>
          <span className="text-sm font-semibold text-slate-400">1255 Baker Street, Somewhere, CA 54321</span>
          <span className="text-sm font-semibold text-green-500">Order Online</span>
        </div>
      </div>
      <div className={styles.farm}>
      <div className="">
          <div className={styles.round_bg}>
            <div className={styles.round}></div>
          </div>
        </div>
        <div className={styles.left}>
          <span className="font-semibold text-slate-700">Farmtopia</span>
          <span className="text-xs font-semibold text-slate-400">Meat & produce</span>
          <span className="text-sm font-semibold text-slate-400">2155 Baking Street, Somewhere, CA 67890</span>
          <span className="text-sm font-semibold text-green-500">Order Online</span>
        </div>
      </div>
    </div>
  )
}

export default ProducerPage