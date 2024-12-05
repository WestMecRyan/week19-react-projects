import styles from "../styles/GroceryList.module.css";
export default function GroceryList({ items }) {
  return (
    <div className={styles.list}>
      {items.map((item) => (
        <div key={item.id} className={styles.item}>
          <h2>{item.name}</h2>
          <p>{item.category}</p>
          <p>&#36;{item.price}</p>
        </div>
      ))}
    </div>
  );
}
