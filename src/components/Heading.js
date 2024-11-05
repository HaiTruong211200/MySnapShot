import styles from "./Heading.module.css";
import Form from "./Form";
import Navigation from "./Navigation";

function Heading({ searchEntry, setSearchEntry }) {
  return (
    <div>
      <h1>SnapShot</h1>
      <Form searchEntry={searchEntry} setSearchEntry={setSearchEntry} />
      <Navigation />
    </div>
  );
}

export default Heading;
