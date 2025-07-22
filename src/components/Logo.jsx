import { ChefHat } from "lucide-react";
import { logoStyles as styles } from "@/constants/styles";

function Logo() {
  return (
    <div className={styles.container}>
      <ChefHat className={styles.icon} />
      <h1 className={styles.text}>My Cookbook</h1>
    </div>
  );
}

export default Logo;
