import style from './Relogio.module.scss';

interface Props {
  tempo: number | undefined,
}

export default function Relogio({ tempo = 0 }: Props) {
  const minutos = Math.floor(tempo / 60);
  const segundos = tempo % 60;
  const [minutoDesena, minutoUnidade] = String(minutos).padStart(2, '0');
  const [segundoDesena, segundoUnidade] = String(segundos).padStart(2, '0');
  return (
    <>
      <span className=
        {style.relogioNumero}>{minutoDesena}</span>
      <span className=
        {style.relogioNumero}>{minutoUnidade}</span>
      <span className=
        {style.relogioDivisao}>:</span>
      <span className=
        {style.relogioNumero}>{segundoDesena}</span>
      <span className=
        {style.relogioNumero}>{segundoUnidade}</span>
    </>
  )
}