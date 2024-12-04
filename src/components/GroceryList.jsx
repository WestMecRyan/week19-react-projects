import styles from "../styles/GroceryList.module.css";

export default function GroceryList({ items }) {
  return (
    <div className={styles.list}>
      {items.map(item => (
        <div key={item.id} className={styles.item}>
          <h2>{item.name}</h2>
          <p>Category: {item.category}</p>
          <p>Price: ${item.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}
