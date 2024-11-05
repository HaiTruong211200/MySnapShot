import styles from "./Gallery.module.css";
import Image from "./Image";

function Gallery({ images }) {
  return (
    <ul className={styles.container}>
      {images.map((image) => {
        return <Image url={image} />;
      })}
    </ul>
  );
}

export default Gallery;
