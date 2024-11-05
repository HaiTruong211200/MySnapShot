import { useNavigate } from "react-router-dom";
import styles from "./Form.module.css";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";

function Form({ searchEntry, setSearchEntry }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let url = `/search/${searchEntry}`;
    navigate(url);
  };

  return (
    <div className={styles.form}>
      <input
        className={styles.search}
        placeholder="Search..."
        value={searchEntry}
        onChange={setSearchEntry}
      />
      <button className={styles.button} onClick={handleSubmit}>
        <SearchTwoToneIcon />
      </button>
    </div>
  );
}

export default Form;
