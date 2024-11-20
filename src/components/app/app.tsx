import Main from '../../pages/main/main.tsx';


type AppProps = {
  cardCount: number;
}

export default function App({ cardCount }: AppProps) {

  return (
    <Main cardCount={cardCount} />
  );
}

