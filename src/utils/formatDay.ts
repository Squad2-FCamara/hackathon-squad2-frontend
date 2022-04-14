import { format, parseJSON } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDay(date: Date) {
    return format(parseJSON(date), "dd MMMM yyyy", { locale: ptBR })
}