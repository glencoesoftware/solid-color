import { JSX } from 'solid-js'

interface Props {
  direction?: string
}

export default function SliderPointer({ direction }: Props) {
  const styles: Record<string, JSX.CSSProperties> = {
    picker: {
      width: '18px',
      height: '18px',
      'border-radius': '50%',
      transform: direction === 'vertical' ? 'translate(-3px, -9px)' : 'translate(-9px, -1px)',
      'background-color': 'rgb(248, 248, 248)',
      'box-shadow': '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
    },
  }

  return <div style={styles.picker} />
}
