import { useState } from "react";
import { Card, ToggleButton } from "react-bootstrap";
import { useQuery } from "react-query";
import api from "../../services/api";
import { formatHour } from "../../utils/formatHour";
import styles from './styles.module.scss';

export type AvailabilityProfile = {
    user: {
        name: string,
        id: number,
        email: string,
        Profile: Profile
    }
}

export type Profile = {
    ProfileAvailability: [
        {
            availability: {
                id: number,
                day: Date,
                start_time: Date,
                end_time: Date
            }
        }
    ]
}

//quando a pessoa clicar em "agendar mentoria", salvar o id do usuário clicado
//fazer requisição no banco de dados referente àquele id
//trazer os resultados de horários disponíveis


export function AvailabilityFriendProfile() {
    const mentorId = localStorage.getItem('mentorId')
    const { data } = useQuery<AvailabilityProfile>('availabilitiesFriends', async () => {
        const response = await api.get(`/user/availability/${mentorId}`)
        return response.data;
    }, {
        staleTime: 1000 * 60, //cache 1 minute
    })

    const [radioValue, setRadioValue] = useState(0);

    return (
        <div style={{ border: '0' }}>
            <div className={styles.availabilityContainer}>
                <h2 style={{ fontWeight: '700', fontSize: '1rem', marginBottom: '0rem' }}>Escolha o melhor horário</h2>
                <div className={styles.availabilityCardContainer}>
                    {data?.user.Profile.ProfileAvailability.map((item, idx) => {
                        let startTime = formatHour(item.availability.start_time);
                        let endTime = formatHour(item.availability.end_time);

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
                                {`${startTime} - ${endTime}`}
                            </ToggleButton>
                        )
                    })}
                </div>
            </div>
        </div>

// {/* <Card style={{ border: '0' }}>
// <Card.Body className={styles.availabilityContainer}>
//     <Card.Title style={{ fontWeight: '700', fontSize: '1rem' }}>Escolha o melhor horário</Card.Title>
//     <Card.Body className={styles.availabilityCardContainer}>
//         {data?.user.Profile.ProfileAvailability.map((item, idx) => {
//             let startTime = formatHour(item.availability.start_time);
//             let endTime = formatHour(item.availability.end_time);

//             return (
//                 <ToggleButton
//                     key={idx}
//                     id={`radio-${idx}`}
//                     type="radio"
//                     variant={'outline-dark'}
//                     checked={radioValue === item.availability.id}
//                     value={item.availability.id}
//                     onChange={(e) => setRadioValue(Number(e.currentTarget.value))}
//                     className={styles.availabilityButton}
//                 >
//                     {`${startTime} - ${endTime}`}
//                 </ToggleButton>
//             )
//         })}
//     </Card.Body>
// </Card.Body>
// </Card> */}
    )
}