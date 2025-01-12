import Spinner from '../spinner/spinner.tsx';
import Styles from './full-page-loader.module.css';

export default function FullPageLoader() {
  return <div className={Styles.flex}><Spinner/></div> ;
}

