
import Link from 'next/link';
import Header from '../components/Header';

export default function Index() {
  return (
    <div>
      <Header />
      <p>Hello Next.js</p>
      <ul>
        <li>
          <Link href='/about'>
            <a title='About'>About</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
