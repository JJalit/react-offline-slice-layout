import React, { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import { exportComponentAsPNG } from 'react-component-export-image';

import data from './data.json';

const Tag = props => {
  return (
    <div style={{ padding: '6px 14px', backgroundColor: 'rgba(238, 238, 238, 0.4)', borderRadius: 20, marginRight: 17, marginTop: 17 }}>
      <span style={{ fontWeight: 400, fontSize: 20, color: props.fontColor, fontFamily: 'Pretendard' }}>{props.text}</span>
    </div>
  );
};

const App = () => {
  const frontRef = React.createRef();
  const backRef = React.createRef();
  const [frontNumber, setFrontNumber] = useState(0);
  const [start, setStart] = useState(false);
  const [tagHeight, setTagHeight] = useState(0);

  useEffect(() => {
    if (start && frontNumber <= data.length) {
      setTimeout(() => {
        console.log(frontNumber);
        exportComponentAsPNG(frontRef, { fileName: data[frontNumber].name + '_앞', html2CanvasOptions: { scale: 4 } });
        exportComponentAsPNG(backRef, { fileName: data[frontNumber].name + '_뒤', html2CanvasOptions: { scale: 4 } });
        setFrontNumber(prev => prev + 1);
      }, 2000);
    }
  }, [backRef, frontNumber, frontRef, start]);

  useEffect(() => {
    setTagHeight(Object.values(document.getElementsByClassName('tag'))[0].clientHeight);
  }, [frontNumber]);

  const onStart = () => setStart(prev => !prev);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'lightgray' }}>
      <div style={{ marginTop: 15 }}>
        <button style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px' }} onClick={onStart}>
          START!
        </button>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div
            ref={frontRef}
            style={{
              width: 492,
              height: 750,
              background: `linear-gradient(180deg, ${data[frontNumber].backgroundColor[0]} 0%, ${data[frontNumber].backgroundColor[1]} 100%)`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginRight: 15,
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <p
                style={{
                  fontWeight: 800,
                  fontSize: 50,
                  color: data[frontNumber].fontColor,
                  marginTop: 110,
                  marginBottom: 5,
                  fontFamily: 'Pretendard',
                }}
              >
                {data[frontNumber].name}
              </p>
              <p style={{ fontWeight: 400, fontSize: 22, color: data[frontNumber].fontColor, fontFamily: 'Pretendard' }}>
                {data[frontNumber].position}
              </p>
              <div
                className="tag"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: tagHeight === 106 ? 40 : 93,
                  width: 300,
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}
              >
                {data[frontNumber].tags.map(tag => (
                  <Tag text={tag} fontColor={data[frontNumber].fontColor} />
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: 14, height: 2, backgroundColor: data[frontNumber].fontColor }} />
              <div style={{ marginBottom: 110, marginTop: 55 }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <div style={{ width: 100 }}>
                    <span style={{ fontWeight: 400, fontSize: 20, color: data[frontNumber].fontColor }}>call me</span>
                  </div>
                  <span style={{ fontWeight: 600, fontSize: 20, color: data[frontNumber].fontColor, fontFamily: 'Pretendard' }}>
                    {data[frontNumber].phoneNumber}
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 15 }}>
                  <div style={{ width: 100 }}>
                    <span style={{ fontWeight: 400, fontSize: 20, color: data[frontNumber].fontColor, fontFamily: 'Pretendard' }}>
                      email
                    </span>
                  </div>
                  <span style={{ fontWeight: 600, fontSize: 20, color: data[frontNumber].fontColor, fontFamily: 'Pretendard' }}>
                    {data[frontNumber].email}
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <div style={{ width: 100 }}>
                    <span style={{ fontWeight: 400, fontSize: 20, color: data[frontNumber].fontColor, fontFamily: 'Pretendard' }}>
                      company
                    </span>
                  </div>
                  <span style={{ fontWeight: 600, fontSize: 20, color: data[frontNumber].fontColor, fontFamily: 'Pretendard' }}>
                    {data[frontNumber].company}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={backRef}
            style={{
              width: 492,
              height: 750,
              background: `linear-gradient(180deg, ${data[frontNumber].backgroundColor[0]} 0%, ${data[frontNumber].backgroundColor[1]} 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <QRCode
              size={256}
              value={`https://myslice.is/@${data[frontNumber].nickname}`}
              fgColor={data[frontNumber].fontColor}
              bgColor="transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
