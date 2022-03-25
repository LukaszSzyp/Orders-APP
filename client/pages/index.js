import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <form>
        <label for="login">Login</label>
        <input type="text" id="login" name="login" />
        <label for="password">Hasło</label>
        <input type="password" id="login" name="login" />
        <button className={styles.button}>Zaloguj</button>
      </form>
    </div>
  );
}
