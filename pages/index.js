
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Index() {
  return (
    <Layout>
      <p>Hello Next.js</p>
      <ul>
        <li>
          <Link href='/about'>
            <a title='About'>About</a>
          </Link>
        </li>
      </ul>
    </Layout>
  );
}
