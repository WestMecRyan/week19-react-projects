import styles from "../styles/EmployeeList.module.css";

export default function EmployeeList({ employees }) {
  return (
    <div className={styles.list}>
      {employees.map(emp => (
        <div key={emp.id} className={styles.item}>
          <h2>{emp.name}</h2>
          <p>Position: {emp.position}</p>
          <p>Birthdate: {emp.birthdate}</p>
          <p>Date Employed: {emp.dateEmployed}</p>
        </div>
      ))}
    </div>
  );
}
