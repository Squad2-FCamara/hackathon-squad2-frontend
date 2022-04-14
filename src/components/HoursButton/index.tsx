import { format, parseJSON } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useState } from "react";
import { ToggleButton } from "react-bootstrap";
import { useQuery } from "react-query";
import api from "../../services/api";
import styles from "./styles.module.scss";

type AvailabilityFriendProfile = {
    user: {
        name: string,
        id: number,
        email: string,
        Profile: Profile
    }
}

type Profile = {
    ProfileAvailability: [
        {
            availability: {
                id: number,
                day: Date,
                hour: Date
            }
        }
    ]
}

export function HoursButton() {
    const { data } = useQuery<AvailabilityFriendProfile>('availabilities', async () => {
        const response = await api.get('http://localhost:4000/user/availability/1')
        console.log(response.data)
        return response.data;
    }, {
        staleTime: 1000 * 60, //cache 1 minute
    })

    const [radioValue, setRadioValue] = useState(0);

    return (
        <>
            {data?.user.Profile.ProfileAvailability.map((item, idx) => {
                return (
                    <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant={'outline-dark'}
                        checked={radioValue === item.availability.id}
                        value={item.availability.id}
                        onChange={(e) => setRadioValue(Number(e.currentTarget.value))}
                        className={styles.availabilityButton}
                    >
                        {format(parseJSON(item.availability.hour), "kk:mm", { locale: ptBR })}
                    </ToggleButton>
                )
            })}
        </>
    );
}