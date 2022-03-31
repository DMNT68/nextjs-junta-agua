import { Layout } from '../../components/Layout';
import styles from '../../styles/utils.module.css';

export default function Blog() {
  return (
    <Layout title="Blog">
      <div className={styles.centerDiv}>
        <h1>Blog</h1>
      </div>
    </Layout>
  );
}
