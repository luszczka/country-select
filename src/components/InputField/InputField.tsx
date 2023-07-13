import { ChangeEvent, ReactNode } from "react";
import { TextField, Input } from "react-aria-components";
import clsx from "clsx";

import styles from "./InputField.module.css";

type Props = {
  border?: boolean;
  icon?: ReactNode;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  size?: "small" | "full";
  type: "search" | "tel";
  value: string;
};

export const InputField = ({
  border,
  icon,
  onInputChange,
  size = "full",
  type,
  value,
}: Props) => {
  return (
    <TextField
      aria-label={type}
      className={clsx(styles.wrapper, styles[size])}
      type={type}
    >
      <div className={styles.icon}>{icon ?? null}</div>
      <Input
        className={clsx(styles.input, styles[size], {
          [styles.inputPadding]: icon,
          [styles.border]: border,
        })}
        maxLength={11}
        onChange={onInputChange}
        placeholder={type === "tel" ? "000-000-000" : "Search..."}
        value={value}
      />
    </TextField>
  );
};
