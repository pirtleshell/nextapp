
import Link from 'next/link';
import Layout from '../components/Layout';

const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

const titles = [
  'I am a post',
  'I am a different post',
  'And look! Another!',
];

export default function Index() {
  return (
    <Layout>
      <h1>A list of posts!</h1>
      <ul>
        { titles.map((title, i) => (<PostLink id={title} key={i} />)) }
      </ul>
    </Layout>
  );
}
