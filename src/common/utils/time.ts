export function tempoParaSegundos(tempo: string) {
  const [horas = '0', minutos = '0', segundos = '0'] = tempo.split(":");

  const horasEmsegundos = Number(horas) * 3600;
  const minutosEmsugndos = Number(minutos) * 60;
  return horasEmsegundos + minutosEmsugndos + Number(segundos)

}