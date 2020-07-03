import React from 'react';
import ReactLoading from 'react-loading';

export default (WrappedComponent) => {
  return function wrappedRender(args) {
    console.log({ WrappedComponent, args });
    if (args.loading)
      return (
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <ReactLoading
            type={'spinningBubbles'}
            color={'#ff0000'}
            height={150}
            width={150}
          />
          <div style={{ fontSize: '2rem', marginTop: '2rem' }}>
            {args.title}
          </div>
        </div>
      );
    else return WrappedComponent({ ...args });
  };
};
