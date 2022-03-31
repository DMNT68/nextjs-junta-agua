import { FeaturedWork } from '../components/featuredWork';
import { Interest } from '../components/interest';
import { Layout } from '../components/Layout';
import { Products } from '../components/productsAndServices';

export default function Home() {
  return (
    <Layout>
      <FeaturedWork />
      <Products />
      <Interest />
    </Layout>
  );
}
