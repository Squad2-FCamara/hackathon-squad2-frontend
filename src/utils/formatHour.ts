import { format, parseJSON } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatHour(date: Date) {
    return format(parseJSON(date), "kk:mm", { locale: ptBR })
}