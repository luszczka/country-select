import { Button, Dialog, DialogTrigger, Popover } from "react-aria-components";
import { useQuery } from "@tanstack/react-query";

import styles from "./PhonePrefix.module.css";
import { allCountries, allCountriesQueryKey } from "../../services/api";
import { PhonePrefixSmall } from "./PhonePrefixSmall/PhonePrefixSmall";
import { PhonePrefixSearch } from "./PhonePrefixSearch/PhonePrefixSearch";
import { CountryCode } from "./PhonePrefix.types";

type Props = {
  selectedCountryCode: CountryCode;
  setSelectedCountryCode: (countryCode: CountryCode) => void;
};

export const PhonePrefix = ({
  selectedCountryCode,
  setSelectedCountryCode,
}: Props) => {
  const { data } = useQuery(allCountriesQueryKey(), allCountries);

  const onPrefixSelect = (countryCode: CountryCode) => {
    setSelectedCountryCode(countryCode);
  };

  if (!data) {
    return (
      <div className={styles.loader}>
        <div className={styles.dot} />
      </div>
    );
  }

  const selectedItem = data.find(
    (single) => single.code === selectedCountryCode
  );

  return (
    <DialogTrigger>
      <Button className={styles.button}>
        {selectedItem && (
          <PhonePrefixSmall
            dialCode={selectedItem.dial_code}
            flag={selectedItem.emoji}
          />
        )}
      </Button>
      <Popover placement="bottom left" className={styles.popover}>
        <Dialog>
          <PhonePrefixSearch fullList={data} onPrefixSelect={onPrefixSelect} />
        </Dialog>
      </Popover>
    </DialogTrigger>
  );
};
