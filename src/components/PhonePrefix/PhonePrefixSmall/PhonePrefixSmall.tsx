import { ArrowIcon } from "../../../icons/ArrowIcon/ArrowIcon";
import styles from "./PhonePrefixSmall.module.css";

type Props = {
  dialCode: string;
  flag: string;
};

export const PhonePrefixSmall = ({ dialCode, flag }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.flag}>{flag ?? ""}</div>
      <div>{dialCode ?? ""}</div>
      <div className={styles.icon}>
        <ArrowIcon />
      </div>
    </div>
  );
};
