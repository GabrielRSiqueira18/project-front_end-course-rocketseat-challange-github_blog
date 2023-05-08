import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDate(date: Date) {
  return formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
    includeSeconds: false,

    
  }).replace("cerca de", "").replace("há", "Há")
}