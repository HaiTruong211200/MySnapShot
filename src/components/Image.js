import styles from "./Image.module.css";

function Image({ url }) {
  return (
    <li className={styles.item}>
      <div className={styles.imagecontainer}>
        <img src={url} style={{ with: 40 }} />
      </div>
    </li>
  );
}

export default Image;
