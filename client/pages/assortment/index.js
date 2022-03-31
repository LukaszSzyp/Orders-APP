import TableCRUD from "../../components/tabeles/TableCRUD";
import styles from "../../styles/assortment.module.css";
import Button from "@mui/material/Button";
import AssortmentModal from "./../../components/modal/AssortmentModal";
import { AddAssortmentForm } from "../../components/forms/AddAssortmentForm";

const index = () => {
  return (
    <div className={styles.container}>
      <TableCRUD />
      <div className={styles.buttonContainer}>
        <AssortmentModal label="DODAJ" form={<AddAssortmentForm />} />
        <Button variant="contained" sx={{ mr: 2 }}>
          Usuń
        </Button>
      </div>
    </div>
  );
};

export default index;
