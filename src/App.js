import React from 'react';
import QRCode from 'react-qr-code';
import Pdf from 'react-to-pdf';

const Tag = props => {
  return (
    <div style={{ padding: '6px 14px', backgroundColor: 'rgba(238, 238, 238, 0.4)', borderRadius: 20, marginRight: 15, marginTop: 15 }}>
      <span style={{ fontWeight: 400, fontSize: 20, color: 'white' }}>{props.text}</span>
    </div>
  );
};

const App = () => {
  const name = '이재하';
  const nickname = 'jjalit';
  const ref = React.createRef();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div
        ref={ref}
        style={{ width: 492, height: 750, backgroundColor: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <p style={{ fontWeight: 800, fontSize: 50, color: 'white', marginTop: 125, marginBottom: 10 }}>이재하</p>
        <p style={{ fontWeight: 400, fontSize: 28, color: 'white' }}>Dev Lead</p>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: 40, width: 300, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Tag text="사업가" />
          <Tag text="창업가" />
          <Tag text="몽상가" />
          <Tag text="개발자" />
          <Tag text="마이크웍" />
        </div>
        <div style={{ width: 14, height: 3, backgroundColor: 'white', marginBottom: 55, marginTop: 150 }} />
        <div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <div style={{ width: 100 }}>
              <span style={{ fontWeight: 400, fontSize: 20, color: 'white' }}>call me</span>
            </div>
            <span style={{ fontWeight: 600, fontSize: 20, color: 'white' }}>010-5421-6518</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 18, marginBottom: 18 }}>
            <div style={{ width: 100 }}>
              <span style={{ fontWeight: 400, fontSize: 20, color: 'white' }}>email</span>
            </div>
            <span style={{ fontWeight: 600, fontSize: 20, color: 'white' }}>jhlee@creatornomic.io</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <div style={{ width: 100 }}>
              <span style={{ fontWeight: 400, fontSize: 20, color: 'white' }}>company</span>
            </div>
            <span style={{ fontWeight: 600, fontSize: 20, color: 'white' }}>Creatornomic Inc.</span>
          </div>
        </div>
      </div>
      <Pdf targetRef={ref} filename={`${name}.pdf`} options={{ format: [173.85, 264.9] }} scale={1.3}>
        {({ toPdf }) => (
          <button onClick={toPdf} style={{ backgroundColor: 'blue', color: 'white', borderRadius: 5, padding: '10px 20px' }}>
            Generate Pdf
          </button>
        )}
      </Pdf>
      <div
        style={{
          width: 492,
          height: 750,
          backgroundColor: 'black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <QRCode size={256} value={`https://myslice.is/@${nickname}`} fgColor="white" bgColor="black" />
      </div>
    </div>
  );
};

export default App;
