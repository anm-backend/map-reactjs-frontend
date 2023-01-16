import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../store/slices/studentSlice";
import styles from "./Counter.module.scss";

export default function ShowResult() {
  const { value: count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className={styles.row}>
      <button
        className={styles.button}
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <span className={styles.value}>{count}</span>
      <button
        className={styles.button}
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
    </div>
  );
}
