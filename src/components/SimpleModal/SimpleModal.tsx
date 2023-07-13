import { ChangeEvent, useState } from "react";
import clsx from "clsx";
import {
  Button,
  Dialog,
  DialogTrigger,
  Heading,
  Modal,
} from "react-aria-components";

import styles from "./SimpleModal.module.css";

import { PhonePrefix } from "../PhonePrefix/PhonePrefix";
import { CountryCode } from "../PhonePrefix/PhonePrefix.types";
import { maskInput } from "../InputField/InputField.utils";
import { InputField } from "../InputField/InputField";

type Props = {
  defaultCountryCode: CountryCode;
};

export const SimpleModal = ({ defaultCountryCode }: Props) => {
  const savedPhoneNumber = localStorage.getItem("phoneNumber");
  const savedSelectedCountryCode = localStorage.getItem("countryCode");

  const [isOpen, setIsOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(savedPhoneNumber ?? "");
  const [selectedCountryCode, setSelectedCountryCode] = useState(
    savedSelectedCountryCode ?? defaultCountryCode
  );

  console.log(phoneNumber);

  const resetValues = () => {
    setPhoneNumber("");
    setSelectedCountryCode(defaultCountryCode);
  };

  const onOpenModal = () => {
    setIsOpen(true);
  };

  const onCloseModal = () => {
    resetValues();
    setIsOpen(!isOpen);
  };

  const onSave = () => {
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("countryCode", selectedCountryCode);
    setIsOpen(false);
  };

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      return setPhoneNumber("");
    }
    const matchPattern = /[0-9- ]/g.test(
      event.target.value[event.target.value.length - 1]
    );
    if (!matchPattern) {
      return;
    }
    setPhoneNumber((previous) =>
      matchPattern ? maskInput(event.target.value) : previous
    );
  };

  return (
    <DialogTrigger>
      <Button
        className={clsx(styles.button, styles.buttonPrimary)}
        onPress={onOpenModal}
      >
        Change phone number
      </Button>
      <Modal
        className={styles.modal}
        isDismissable
        isOpen={isOpen}
        onOpenChange={setIsOpen}
      >
        <Dialog>
          <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
            <Heading className={styles.heading}>Change phone number</Heading>
            <p className={styles.label}>Provide new phone number</p>
            <div className={styles.inputsWrapper}>
              <PhonePrefix
                selectedCountryCode={selectedCountryCode}
                setSelectedCountryCode={setSelectedCountryCode}
              />
              <InputField
                border
                onInputChange={onInputChange}
                type="tel"
                value={phoneNumber}
              />
            </div>
            <div className={styles.buttonsWrapper}>
              <Button className={styles.button} onPress={onCloseModal}>
                Cancel
              </Button>
              <Button
                className={clsx(styles.button, styles.buttonPrimary)}
                onPress={onSave}
              >
                Save
              </Button>
            </div>
          </form>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
};
