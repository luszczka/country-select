import { AllCountriesResult } from "../../../services/types";
import { CountryCode } from "../PhonePrefix.types";
import { PhonePrefixBig } from "../PhonePrefixBig/PhonePrefixBig";

import styles from "./PhonePrefixList.module.css";

type Props = {
  list: AllCountriesResult[];
  onPrefixSelect: (countryCode: CountryCode) => void;
  setSearchValue: (value: string) => void;
};

export const PhonePrefixList = ({
  list,
  onPrefixSelect,
  setSearchValue,
}: Props) => {
  return (
    <div className={styles.wrapper}>
      {list.map((country) => (
        <PhonePrefixBig
          dialCode={country.dial_code}
          flag={country.emoji}
          code={country.code}
          key={country.dial_code + country.code}
          name={country.name}
          onPrefixSelect={onPrefixSelect}
          setSearchValue={setSearchValue}
        />
      ))}
    </div>
  );
};
