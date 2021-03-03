import { useContext, useState } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from "../styles/components/ButtonsSidebar.module.css"; 


interface ButtonProps {
    children: string;
}


export function ButtonSidebar(props: ButtonProps) {
    const [isActive, setActive] = useState(true)


    return (
      <div className={styles.buttonsSidebar}>

       {isActive === true ? (
             <button className={styles.buttonHouse}>
                  {props.children} 
                  <img src="icons/HouseClick.svg" alt="" />
             </button>
  ) : (
             <button className={styles.buttonHouse}>
               {props.children} 
                <img src="icons/House.svg" alt=""  />
            </button>
  )}

      </div>


    );
}

