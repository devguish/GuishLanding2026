interface TextoProps {
  contenido: string;
  tamaño?: 'pequeno' | 'mediano' | 'grande';
  alineacion?: 'izquierda' | 'centro' | 'derecha';
}

export default function Texto({ 
  contenido, 
  tamaño = 'mediano',
  alineacion = 'izquierda'
}: TextoProps) {
  const tamaños = {
    pequeno: 'text-base',
    mediano: 'text-lg',
    grande: 'text-2xl'
  };

  const alineaciones = {
    izquierda: 'text-left',
    centro: 'text-center',
    derecha: 'text-right'
  };

  return (
    <p className={`${tamaños[tamaño]} ${alineaciones[alineacion]} text-foreground`}>
      {contenido}
    </p>
  );
}

