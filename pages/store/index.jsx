import { Layout } from '../../components/Layout';
import styles from '../../styles/utils.module.css';

export default function Store() {
  return (
    <Layout title="Tienda">
      <div className={styles.centerDiv}>
        <h1>Store</h1>
      </div>
    </Layout>
  );
}
