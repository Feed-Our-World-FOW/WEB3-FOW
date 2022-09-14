import React from 'react'
import { useRouter } from 'next/router'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';



function FarmName() {

  const router = useRouter()

  const styles = {
    page: `w-screen h-screen flex flex-col justify-between items-center`,
    nav: `w-full h-1/6 flex justify-between items-center bg-slate-300/[.9] shadow-xl border-white-900/75 max-w-screen-sm`,
    left: `h-full flex justify-between items-center w-5/12 ml-3 `,
    row: `w-11/12 h-1/6 bg-slate-300/[.9] shadow-xl border-white-900/75 flex flex-col justify-between items-center p-1 rounded-md max-w-screen-sm`,
    inner: `w-11/12 h-4/6 rounded-2xl mb-1 bg-white`
  }

  return (
    <div className={styles.page}>
      <div className={styles.nav}>
        <div className={styles.left}>
          <Link href="/components/FOW/ProducerPage">
            <div className="">
              <ArrowBackIcon color='primary' fontSize='large' />
            </div>
          </Link>
          <div className="font-semibold">
            {router.query.FarmName}
          </div>
        </div>
        <div className="mr-3">
          <SearchIcon color='primary' fontSize='large' />
        </div>
      </div>
      <Link href="/components/FOW/order/Meat">
        <div className={styles.row}>
          <span className='mr-auto font-semibold text-sm ml-2'>Meat</span>
          <div className={styles.inner}></div>
        </div>
      </Link>
      <Link href="/components/FOW/order/Produce">
        <div className={styles.row}>
          <span className='mr-auto font-semibold text-sm ml-2'>Produce</span>
          <div className={styles.inner}></div>
        </div>
      </Link>
      <div className="bg-slate-300/[.9] shadow-xl border-white-900/75 p-2 rounded-2xl mb-3">
        <span className='text-sm'>Minimum Order $$</span>
      </div>
    </div>
  )
}

export default FarmName