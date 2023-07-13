import { ChangeEvent, useState } from "react";
import { SearchIcon } from "../../../icons/SearchIcon/SearchIcon";
import { AllCountriesResult } from "../../../services/types";
import { InputField } from "../../InputField/InputField";
import { PhonePrefixList } from "../PhonePrefixList/PhonePrefixList";
import { CountryCode } from "../PhonePrefix.types";

type Props = {
  fullList: AllCountriesResult[];
  onPrefixSelect: (countryCode: CountryCode) => void;
};

export const PhonePrefixSearch = ({ fullList, onPrefixSelect }: Props) => {
  const [value, setValue] = useState("");
  const [list, setList] = useState(fullList);
  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    const newList = [...fullList].filter((listItem) => {
      return listItem.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setValue(query);
    setList(newList);
  };

  return (
    <>
      <InputField
        icon={<SearchIcon />}
        onInputChange={onInputChange}
        type="search"
        value={value}
      />
      <PhonePrefixList
        list={list}
        onPrefixSelect={onPrefixSelect}
        setSearchValue={setValue}
      />
    </>
  );
};
