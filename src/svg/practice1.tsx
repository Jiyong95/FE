import { ElementRef, LegacyRef, useEffect, useRef } from 'react';
import style from './svg.module.scss';

const Practice1 = () => {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (element) {
      const clickHandler = () => {
        element.classList.toggle(style['aniOn']); //css module이기 때문에 저런식으로 넣어줘야함.
      };

      element.addEventListener('click', clickHandler);

      // Don't forget to clean up the event listener
      return () => {
        element.removeEventListener('click', clickHandler);
      };
    }
  }, []); // No dependencies, so this effect only runs on mount and cleanup runs on unmount

  return (
    <svg
      ref={ref}
      className={style.svg}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 571 625.5'
    >
      <circle
        cx='286.5'
        cy='354.5'
        r='251'
        stroke-width='40'
        fill='none'
        stroke='#000'
        stroke-miterlimit='10'
      />
      <circle className={style.eye} cx='175' cy='380.5' r='42.5' />
      <circle className={style.eye} cx='397' cy='380.5' r='42.5' />
      <path
        d='M422 476.16a181.3 181.3 0 0 1-135.48 60.59H286a181.3 181.3 0 0 1-135.48-60.59'
        stroke-width='30'
        fill='none'
        stroke='#000'
        stroke-miterlimit='10'
      />
      <ellipse
        className={style.hair}
        cx='168.5'
        cy='210.5'
        rx='168.5'
        ry='121.5'
      />
      <ellipse
        className={style.hair}
        cx='428.5'
        cy='198.5'
        rx='142.5'
        ry='123.5'
      />
      <ellipse className={style.hair} cx='245.5' cy='103' rx='151.5' ry='103' />
    </svg>
  );
};

export default Practice1;

/**
 * svg default width : 300px height: 150px
 * - 그린 요소가 svg width, height를 넘지 않음.
 * - viewBox: viewBox를 설정해줘야 svg가 flexibal하게 움직임.
 */
