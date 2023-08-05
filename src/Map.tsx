import React from 'react';

import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

export default function Map() {
  return (
    <div className="w-full h-screen bg-pink-300">
      <div className="w-full overflow-hidden bg-blue-300 h-3/4">
        <TransformWrapper
          initialScale={1}
          initialPositionX={200}
          initialPositionY={100}
          limitToBounds={false}
          disablePadding={true}
          minScale={0.05}
        >
          <TransformComponent wrapperClass="w-full h-full">
            <div>
              {/* Insérez ici les éléments que vous voulez sur la carte. */}
              <div className="w-96 h-96 bg-slate-500">
                Mehuiazhijukerhazeihriuezaghuirghrehuirghuihzejhgtrfiuhezuirhgeziuhiu
              </div>
            </div>
          </TransformComponent>
        </TransformWrapper>
      </div>
    </div>
  );
}
