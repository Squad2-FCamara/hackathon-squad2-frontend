import { useState } from "react";
import { ToggleButton } from "react-bootstrap";
import styles from "./styles.module.scss";

export function HoursButton() {
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: '08:00 - 08:40', value: '1' },
        { name: '09:00 - 10:00', value: '2' },
        { name: '14:00 - 16:00', value: '3' },
    ];

    return (
        <>
            {radios.map((radio, idx) => (
                <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant={'outline-dark'}
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                    className={styles.availabilityButton}
                >
                    {radio.name}
                </ToggleButton>
            ))
            }
        </>
    );
}