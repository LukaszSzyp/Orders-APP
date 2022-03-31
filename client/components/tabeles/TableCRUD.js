import styles from "./TableCRUD.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
function createData(code, name, unit, type, supplier, manufacturer) {
  return { code, name, unit, type, supplier, manufacturer };
}

const rows = [
  createData(
    "L123",
    "łożysko liniowe",
    "szt",
    "SMA12 GUU",
    "centrum CNC",
    "AN"
  ),
];

const TableCRUD = () => {
  return (
    <div className={styles.container}>
      <TableContainer component={Paper} className={styles.table}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Kod</TableCell>
              <TableCell align="center">Nazwa</TableCell>
              <TableCell align="center">Jm</TableCell>
              <TableCell align="center">Rodzaj</TableCell>
              <TableCell align="center">Dostawca</TableCell>
              <TableCell align="center">Producent</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.code}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.code}
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.unit}</TableCell>
                <TableCell align="center">{row.type}</TableCell>
                <TableCell align="center">{row.supplier}</TableCell>
                <TableCell align="center">{row.manufacturer}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableCRUD;
