// 404.js
import Link from 'next/link'

export default function FourOhFour() {
  return <>
  <div className='center text-center self-center'>
  <h1>Page cannot be found</h1>
    <p>
        <Link href="/">
            <a>Go to home</a>
        </Link>
    </p>
  </div>
  </>
}