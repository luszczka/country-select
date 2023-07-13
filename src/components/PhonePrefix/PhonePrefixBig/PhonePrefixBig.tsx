import { CountryCode } from "../PhonePrefix.types";
import styles from "./PhonePrefixBig.module.css";

export type CountriesProps = {
  code: string;
  dialCode: string;
  flag: string;
  name: string;
  onPrefixSelect: (countryCode: CountryCode) => void;
  setSearchValue: (value: string) => void;
};

export const PhonePrefixBig = ({
  code,
  dialCode,
  flag,
  name,
  onPrefixSelect,
  setSearchValue,
}: CountriesProps) => {
  const onPrefixClick = () => {
    onPrefixSelect(code);
    setSearchValue(name);
  };

  return (
    <button onClick={onPrefixClick} className={styles.wrapper}>
      <div className={styles.countryContainer}>
        <div className={styles.flag}>{flag}</div>
        <div className={styles.country}>{name}</div>
      </div>
      <div className={styles.dialCode}>{dialCode}</div>
    </button>
  );
};
