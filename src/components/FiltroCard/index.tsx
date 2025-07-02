import * as S from './styles'

export type Props = {
  ativo?: boolean
  contador: number
  legenda: string
}

const FiltroCard = ({ ativo, contador, legenda }: Props) => (
  <S.Card ativo={ativo}>
    <S.Contador>{contador}3</S.Contador>
    <S.Label> {legenda}pendentes</S.Label>
  </S.Card>
)

export default FiltroCard
