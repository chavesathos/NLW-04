import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/LevelUpModal.module.css";

export function LevelUpModal() {
    const { level, closeLevelUpModal } = useContext(ChallengesContext);
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>

                <strong>Parabéns</strong>
                <p>Voce alcancou um novo nivel.</p>

                <button className={styles.completed} type="button">
                    <img src="/icons/Completei.svg" alt="Compartilhar"/>
                </button>

                <button className={styles.close} type="button" onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="Fechar modal"/>
                </button>
            </div>

            
        </div>
    )
}