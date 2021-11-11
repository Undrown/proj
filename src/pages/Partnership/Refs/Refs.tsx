import styles from "./Refs.module.scss";
import copyButton from './images/copyButton.svg'
import { style } from "@mui/system";

const Refs = () => {
    
    const getPartners = () => {
        return ['partner-1', 'partner-2'];
    }

  return (
    <div className={styles.root}>
      <div className={styles['text-also']}>
      Вы можете участвовать в нашей партнерской программе. Используйте личную ссылку ниже.
      </div>
      <div className={styles['text-secondary']}>
      Ваша партнерская ссылка
      </div>
      <input className={styles['ref-link']} readOnly={true} value={'https://www.cryptomercgant.com/ref/gmwefrgolrr69'}/>
      <img className={styles['copy-button']} src={copyButton}/>
      <div className={styles.partners}>
          <div className={styles['partners-title']}>Мои партнёры</div>
          {getPartners().map((i) => {
              return <div className={styles['partner-item']}>{i}</div>
          })}
          <div className={styles['load-more-button']}>Load more</div>
      </div>
    </div>
  );
};

export default Refs;
