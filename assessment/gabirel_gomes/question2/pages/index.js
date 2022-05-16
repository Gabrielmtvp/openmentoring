import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='flex items-center justify-center' >
      <select className='w-40 h-10 p-2 bg-black text-white' >
        <option className='bg-black' >Menu</option>
        <option>Element 1</option>
        <option>Element 2</option>
        <option>Element 3</option>
      </select>
    </div>
  )
}
