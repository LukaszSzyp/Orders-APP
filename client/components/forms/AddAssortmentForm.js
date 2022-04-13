import styles from "./AddAssortmentForm.module.css";
import { useState, useEffect } from "react";
import Axios from "axios";

export const AddAssortmentForm = () => {
  const [name, setName] = useState("");

  const submitAssortment = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/api/insert", {
      name: name,
    }).then(() => {
      alert("successful insert");
    });
  };

  return (
    <>
      <form className={styles.form}>
        <div className={styles.container}>
          <div className={styles.column1}>
            <label for="cod">Kod</label>
            <label for="name">Nazwa</label>
            <label for="description">Opis</label>
            <label for="suplayer">Dostawca</label>
          </div>
          <div className={styles.column2}>
            <div className={styles.inputRow1}>
              <input type="text" id="cod" name="cod" />
              <label for="type">Rodzaj</label>
              <select id="type" name="type">
                <option value="sensor">Czujnik</option>
                <option value="profile">Profil</option>
              </select>
              <label for="unit">JM</label>
              <select id="unit" name="unit">
                <option value="pcs">szt.</option>
                <option value="meter">m</option>
              </select>
            </div>
            <div className={styles.inputRow2}>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className={styles.inputRow3}>
              <textarea name="description" rows="8" cols="30"></textarea>
            </div>
            <div className={styles.inputRow4}>
              <select id="suplayer" name="suplayer">
                <option value="pcs">ElesaGanter</option>
                <option value="meter">Ebmia</option>
              </select>
              <label for="manufacturer">Producent</label>
              <select id="manufacturer" name="manufacturer">
                <option value="pcs">chiny</option>
                <option value="meter">USA</option>
              </select>
            </div>
          </div>
        </div>
      </form>
      <div className={styles.buttonsContainer}>
        <button onClick={submitAssortment}>Dodaj</button>
        <button>Anuluj</button>
      </div>
    </>
  );
};
