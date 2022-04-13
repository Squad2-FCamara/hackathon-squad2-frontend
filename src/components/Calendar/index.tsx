import { ptBR } from 'date-fns/locale';
import { useState } from 'react';
import { ClassNames, DayPicker } from 'react-day-picker';
import styles from 'react-day-picker/dist/style.module.css';
import style from './styles.module.scss'

export function Calendar() {
    const today = new Date();
    const [selectedDay, setSelectedDay] = useState<Date | undefined>(today);
    console.log(selectedDay)

    const classNames: ClassNames = {
        ...styles,
        months: style.calendarContainer,
        caption: style.monthTitleContainer,
        caption_label: style.monthTitle,
        nav_button: style.controller,
        table: style.weeksContainer,
        day_today: style.dayToday,
        day_outside: style.daysOtherMonths,
        day_selected: style.daySelected,
        button: style.dayButtons
    };

    return (
        <DayPicker
            mode="single"
            required
            selected={selectedDay}
            onSelect={setSelectedDay}
            showOutsideDays
            fixedWeeks
            locale={ptBR}
            classNames={classNames}
        />
    );
}