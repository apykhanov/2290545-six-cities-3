import { RotateLoader } from 'react-spinners';

export function Loader(): JSX.Element {
  const loaderStyle = {
    display: 'flex',
    paddingTop: '200px',
    justifyContent: 'center',
    color: 'green',
  };

  return (
    <div className="page page--gray page--main">
      {/* header */}

      {/* main */}
      <main className="page__main page__main--index">
        <div className="tabs">
          <section className="locations container" style={loaderStyle}>
            <RotateLoader color={'green'} />
          </section>
        </div>
      </main>
    </div>
  );
}
