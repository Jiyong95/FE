import { ElementRef, LegacyRef, useEffect, useRef } from 'react';
import style from './practice2.module.scss';

const Practice2 = () => {
  return (
    <svg className={style.svg} xmlns='http://www.w3.org/2000/svg'>
      {/* <rect x='10' y='20' width={200} height={100} /> */}
      <path d='M 300 200 L 500 100 H 50' />
    </svg>
  );
};

export default Practice2;

/**
 * svg default width : 300px height: 150px
 * - 그린 요소가 svg width, height를 넘지 않음.
 * - viewBox: viewBox를 설정해줘야 svg가 flexibal하게 움직임.
 */
