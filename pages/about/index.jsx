import { Layout } from '../../components/Layout';
import styles from '../../styles/utils.module.css';

export default function About() {
  return (
    <Layout title="Nosotros">
      <div className={styles.centerDiv}>
        <h1>About</h1>
      </div>
    </Layout>
  );
}
