import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import styles from "../styles/components/Sidebar.module.css"; 
import { ButtonSidebar } from "./ButtonSidebar";

export function Sidebar() {

    return (
        <div>
      <aside className={styles.sidebar}>
        <img className={styles.image} src="./icons/Logo.svg" alt="logo"/>

        <ButtonSidebar>  </ButtonSidebar>

      </aside>
      </div>
    )
}