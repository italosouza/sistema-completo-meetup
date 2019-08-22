import { format, parseISO, isDate } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export const formatDate = (date, mask = "d 'de' MMMM") => {
  const newDate = isDate(date) ? date : parseISO(date)
  return format(newDate, mask, { locale: ptBR })
}
