import AppNav from "../Components/AppNav";
import Sidebar from "../Components/Sidebar";
import styles from "./AppLayout.module.css";

export default function AppLayout() {
  return (
    <div className={styles.app}>
      <AppNav />
      <Sidebar />
    </div>
  );
}
