import AppNav from "../Components/AppNav/AppNav";
import Sidebar from "../Components/Sidebar/Sidebar";
import styles from "./AppLayout.module.css";

export default function AppLayout() {
  return (
    <div className={styles.app}>
      <AppNav />
      <Sidebar />
    </div>
  );
}
