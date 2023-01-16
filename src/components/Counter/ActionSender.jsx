import { useState } from "react";
import {
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
} from "../../store/slices/studentSlice";
import styles from "./Counter.module.scss";
import { useDispatch } from "react-redux";

export default function ActionSender() {
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");
  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div className={styles.row}>
      <input
        className={styles.textbox}
        aria-label="Set increment amount"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <button
        className={styles.button}
        onClick={() => dispatch(incrementByAmount(incrementValue))}
      >
        Add Amount
      </button>
      <button
        className={styles.asyncButton}
        onClick={() => dispatch(incrementAsync(incrementValue))}
      >
        Add Count Student
      </button>
      <button
        className={styles.button}
        onClick={() => dispatch(incrementIfOdd(incrementValue))}
      >
        Add If Odd
      </button>
    </div>
  );
}
