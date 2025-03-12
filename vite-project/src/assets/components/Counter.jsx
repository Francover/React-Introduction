import { useState, useEffect } from "react";
import styles from "./Counter.module.sass"

const Counter = () => {
    const [counter, SetCount] = useState(0);

    useEffect(()=>{
        console.log('Está cambiando');
    }, [counter])

    return (
        <div>
            <p>El contador está en: {counter}</p>
            <div className={styles.btnsContainer}>
                <button onClick={() => SetCount(counter + 1)} disabled={counter >=10 }>
                    Incrementar
                </button>
                <button onClick={() => SetCount(counter - 1)} disabled={counter <= -10 }>
                    Decrementar
                </button>
            </div>
        </div>
    )
}

export default Counter;