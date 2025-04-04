import React from "react";

interface BeerIconProps {
  width?: string;
  height?: string;
  fill?: string;
  stroke?: string;
  fillHeight: number;
  fillOpacity: string;
}

const BeerIcon: React.FC<BeerIconProps> = ({
  width = "100",
  height = "100",
  fill = "#ad841f",
  fillHeight,
  fillOpacity = "0.8",
  stroke = "#333333",
}) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      width={width}
      height={height}
      viewBox="0 0 1000 1000"
      enableBackground="new 0 0 1000 1000"
      xmlSpace="preserve"
    >
      {/* Máscara para el relleno */}
      <defs>
        <mask id="beerMask">
          <rect x="0" y="0" width="1000" height="1000" fill="white" />
          {/* Esta parte se recorta según fillHeight */}
          <rect
            x="0"
            y="0"
            width="1000"
            height={1000 - fillHeight}
            fill="black"
          />
        </mask>
      </defs>

      <defs>
        <svg id="mini-svg" width="100" height="100">
          <svg
            id="etiqueta"
            height="300"
            viewBox="8.4 80.1 550.2 390"
            width="280"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m502.9 322.3c-48.9 46.8-129 77.3-219.4 77.3-89.2 0-168.3-29.6-217.4-75.3"
              fill="#f00"
            />
            <path d="m73 324.9c-37-31.6-59.1-71.6-59.1-115.2 0-88 90.1-161.6 210.7-179.9l111.3-.9c123.8 16.7 217.2 91.3 217.2 180.9 0 43.4-21.9 83.3-58.6 114.8" />
            <g fill="#fdfffc">
              <path d="m137.5 136.5-4.9-4.1c-3-2.5-7.6-1.5-9.3 2l-3.4 7-11.6 13.2h.1c3.7-.3 7.4.5 10.7 2.2l10.2 5.3 7.3 1.8c1.9.5 4 .4 5.9-.2l1.4-.4c2.7-.8 4.9-2.9 5.8-5.6l1.8-5.1c.2-.7.8-1.1 1.5-1.1 1.1-.1 1.9.9 1.8 1.9l-1.1 8.1c-.6 4.3-2.1 8.3-4.5 11.9l-.1.1c-1.5 2.2-3.6 4-6 5.2l-.8.4c-4.1 2-8.7 3-13.2 2.6l-2.6-.2c-3.7-.3-7.2-1.4-10.4-3.3l-6.3-3.8c-5.5-3.3-12.3-3.8-18.2-1.2h-.1l-3 5.3c-.3.5-.9.8-1.5.8h-.1c-1.1 0-1.9-.9-1.7-2v-.1c.8-4.9 2.7-9.5 5.5-13.6l1-1.5c.2-.3.5-.5.8-.7l.1-.1c6-3.5 10-9.5 11.1-16.3v-.1l-6.9-20.6c-1.3-3.8-1.6-7.8-.9-11.7v-.1l.9-2.2c1.8-4.4 4.7-8.3 8.3-11.5l17.5-15.2 6.5 5.6c3.7 3.2 9 3.7 13.2 1.2l4.9-2.9c.9-.5 2.1-.4 2.9.3.9.8 1.1 2.1.4 3.2l-.8 1.3c-4.6 7-12.1 11.5-20.5 12.1l-3.8-.1c-4.2-.1-8.3-1.6-11.5-4.3l-3-2.5v.1c-.5 3.5.1 7 1.7 10.2l4.7 9.5c2.2 4.3 3.1 9.2 2.7 14v.2h3.2v-.1c-.7-5 1.6-10 5.9-12.7l.1-.1c2.7-1.7 5.8-2.6 9-2.7h.1c1.9 0 3.7.5 5.3 1.6l4.7 3.3z" />
              <path d="m155.7 174.9c5.6-2.9 4.6-11.7 17.6-13.2 15.3-1.7 17.5 25 17.3-.9-.2-15-18-15.3-23.1-4.7-.9 2-10.3-8.1-12.1-15.8-3.4-14.8 23.3-30.2 23.3-30.2 6.5 0 6.2 11 20 5.3h3.2c-1 7.5-11.7 13.5-17.7 13.5-6.9 0-14.7-12.3-14.6-7.5.5 17 4.3 19.7 13.1 20.1 6.1.3 10.9-7.2 10.9-7.2 14.4 11.6 12 20.6 11.1 24.9-1.9 8.7-23.4 22.6-23.4 22.6-21.1-14.9-20.4-.9-24.9-3.6zm77.8-87.7v29.4h13.3v9h-13.3v35.2s.6 5.7 6.4 5.4c4.1-.2 4.4-3.4 7.4-3.5v4.1l-18.1 15-6.6-6.3c-3-2.8-6.8-4.6-10.9-5.1h-.1l-.1-2.1s6.4.7 6.4-7v-35.6h-10v-6.4h.1c8.3-1.9 14.8-8.4 16.6-16.7l3.2-15.3h5.7zm25.5 46.6v-4.8c-.1-4.7-5.3-8.2-9.8-2.7-.4.5.1-3.3 0-4.1l13.5-14 .9.5c5.6 2.9 9.8 8 11.6 14v.1h.7c1.3-5.5 4.8-12.4 12.1-14.6 0 0 9.2 13.6 10.6 13.8l-11.9 11.4c-1.6-.3-6.8-11-8.5-9.7-4.4 3.2-4.2 18.1-4.2 20.1l-.2 14.5c0 1.5.6 2.9 1.6 3.9l2.3 2.2c1.6 2 4.6 2.3 6.6.7l8.3-6.8-.2 5.3-18.8 18.3-3.1-2.9c-5.2-4.8-11.4-8.4-18.1-10.7h-.1l.3-.1c3.2-1.6 5.6-4.5 6.4-7.9v-.1zm59.4 20s1.6 9.9 10.2 11.9c8.2 1.9 13.6-5.1 18-7l2.8 3.1c-4.1 1.9-25 20.1-25 20.1-18.4-6.8-24.6-17.5-24.6-37.2s10.2-26.7 31.5-34.9l16.6 26.1zm12.2-13.7c-.1-1.4-11.2-20.9-11.2-20.9-3.6 0-1.5 20.8-2.5 29zm21.7-45.8v-2.8l2.9 1.3c6.2 2.8 13.4 1.4 18.2-3.4l.1-.1 1.2 2v70.9l1.2 2.4c1.3 2.6 4.8 3.1 6.8.9l.7-.8 2.2 1.8-16.6 15.2-.1-.1c-4.5-5-10.1-8.9-16.4-11.2h-.1l.8-.4c2.7-1.3 4.9-3.5 6.3-6.1v-51.5c0-3-.3-5.9-1-8.8l-.1-.4c-.9-3.5-3.1-6.7-6.1-8.9zm117 87.6-1.3-.7c-5-2.7-8-8-7.7-13.7v-.1l-1.9-.2c-3.6 5.1-18 14.7-18 14.7-15.6-8.4-14-24-14-33.5 0-8.2.4-14.6 5.1-20.9 3.9-5.3 13.7-8.6 23.2-16.6 1-.8 1.5.1 2.8-.4l18.8 11.4v41.7c.2 12.7 8.3-.1 7.8 6.8l-2.6 1.5c-2.8 1.6-5.5 3.6-7.8 5.9zm-9.7-52.4c-15.4-2.9-15.3-25-15.4 25.3 0 7.7.4 12.9 5.1 13.5 3.5.4 5.4-.4 10-4.5 1.3-1.1.3-34.3.3-34.3zm-70.9-35.2v-2.8l2.9 1.3c6.2 2.8 13.4 1.4 18.2-3.4l.1-.1 1.2 2v70.9l1.2 2.4c1.3 2.6 4.8 3.1 6.8.9l.7-.8 2.2 1.8-16.6 15.2-.1-.1c-4.5-5-10.1-8.9-16.4-11.2h-.1l.8-.4c2.7-1.3 4.9-3.5 6.3-6.1v-51.5c0-3-.3-5.9-1-8.8l-.1-.4c-.9-3.5-3-6.7-6.1-8.9zm-131.3 103.6v-2.8l2.9 1.3c6.2 2.8 13.4 1.4 18.2-3.4l.1-.1 1.2 2v70.9l1.2 2.4c1.3 2.6 4.8 3.1 6.8.9l.7-.8 2.2 1.8-16.7 15.4-.1-.1c-4.5-5-10.1-8.9-16.4-11.2h-.1l.8-.4c2.7-1.3 4.9-3.5 6.3-6.1v-51.5c0-3-.3-5.9-1-8.8l-.1-.4c-.8-3.7-2.9-6.9-6-9.1zm190.7 87.6-1.3-.7c-5-2.7-8-8-7.7-13.7v-.1l-1.9-.2c-3.6 5.1-18 14.7-18 14.7-15.6-8.4-14-24-14-33.5 0-8.2.4-14.6 5.1-20.9 3.9-5.3 13.7-8.6 23.2-16.6 1-.8 1.5.1 2.8-.4l18.8 11.4v41.7c.2 12.7 8.3-.1 7.8 6.8l-2.6 1.5c-2.8 1.6-5.5 3.6-7.8 5.9zm-9.7-52.4c-15.4-2.9-15.3-25-15.4 25.3 0 7.7.4 12.9 5.1 13.5 3.5.4 5.4-.4 10-4.5 1.3-1.1.3-34.3.3-34.3zm-201.5 52.4-1.3-.7c-5-2.7-8-8-7.7-13.7v-.1l-1.9-.2c-3.6 5.1-18 14.7-18 14.7-15.6-8.4-14-24-14-33.5 0-8.2.4-14.6 5.1-20.9 3.9-5.3 13.7-8.6 23.2-16.6 1-.8 1.5.1 2.8-.4l18.8 11.4v41.7c.2 12.7 8.3-.1 7.8 6.8l-2.6 1.5c-2.8 1.6-5.5 3.6-7.8 5.9zm-9.7-52.4c-15.4-2.9-15.3-25-15.4 25.3 0 7.7.4 12.9 5.1 13.5 3.5.4 5.4-.4 10-4.5 1.3-1.1.3-34.3.3-34.3zm-41.7 35.1c-3.8 8.3-23 17.3-33.9 17.3-15.1 0-26-4.4-33.7-12.8-7.6-8.1-11.7-20.5-11.7-34.4 0-22.6 8.5-43.4 35-49.2 21.7-4.7 33.8 26 44.1 7.6l3.1-.2c1.8 12.5-24 28.9-36.6 17.2-22.2-20.5-38.2-4.8-38.2 15.8 0 19.5 25.9 41.7 41.3 41.7l6.3.3v-18.9h-.1c-7.9 1.4-15.7-2.4-19.5-9.5l-3.2-5.9h.1c5.8 1.3 11.9.8 17.3-1.5l5.9-3.1c1.8-1 3.8-1.6 5.8-1.8h.1c9.5.6 14.7 5.7 18.2 12.8l2.6 5.3-1.6 1-1-1.6c-1.9-3-5.9-3.8-8.9-1.9h-.1c-.9.6-1.4 1.5-1.4 2.6v14.9l.9 1.9c1.1 2.4 4.3 2.9 6.2 1l1.7-1.8zm130.1-74.1c0 4.9-11.3 15.3-11.3 15.3s-12.1-10.2-12-15.1c-.1-5.2 6.9-5.9 12.1-5.9 5.3-.1 11.1.6 11.2 5.7zm-8.1 91.4-5.1-3.7c-3.4-2.5-5.4-6.4-5.3-10.6v-36.9c0-.4-.1-.9-.2-1.3l-.6-1.9c-.6-1.9-2.9-2.8-4.7-1.9l-2.8 2.8-2.6-2.8 17.7-16.4 9.5 8.4v43.5c0 3.3 3.2 5.6 6.3 4.6h.1l2.3-2.3 2.5 1.6z" />
              <path d="m398.1 194.1c0 4.9-11.3 15.3-11.3 15.3s-12.1-10.2-12-15.1c-.1-5.2 6.9-5.9 12.1-5.9 5.3-.1 11.1.6 11.2 5.7zm-8.1 91.4-5.1-3.7c-3.4-2.5-5.4-6.4-5.3-10.6v-36.9c0-.4-.1-.9-.2-1.3l-.6-1.9c-.6-1.9-2.9-2.8-4.7-1.9l-2.8 2.8-2.6-2.8 17.7-16.4 9.5 8.4v43.5c0 3.3 3.2 5.6 6.3 4.6h.1l2.3-2.3 2.5 1.6zm-44.3-59.3s-2.1 38.6 6 42c7 2.9 9.8-2.5 14.2-4.3l2.3 3c-4.1 1.9-21.9 18.6-21.9 18.6-16.7-9.3-17.7-19.4-17.7-39.1 0-3.1.6-6.6 1.4-9.9 1.2-4.4 3.8-8.3 7.5-11.1l15.7-12 4.2 5.3c2.1 2.7 6.2 2.7 8.4 0l1.1-1.4 1.7 2.7-2.1 2.3c-.7.8-1.2 1.8-1.4 2.8l-.2 1.4c-.4 2.1-1.4 4-2.8 5.6-1.5 1.5-3.5 2.4-5.7 2.3h-.5c-2.3-.1-4.5-1.2-5.9-3z" />
            </g>
            <g fill="none" strokeMiterlimit="10">
              <ellipse
                cx="283.5"
                cy="212.6"
                rx="269.6"
                ry="187"
                stroke="#b77e25"
                strokeWidth="11"
              />
              <ellipse
                cx="283.5"
                cy="212.6"
                rx="269.6"
                ry="187"
                stroke="#ffd700"
                strokeWidth="3"
              />
            </g>
          </svg>
        </svg>
      </defs>

      <path
        fill={fill}
        mask="url(#beerMask)"
        d="M647.6,457.8c-1-22.7-11.3-42.8-24.6-60.9c-12.1-16.5-27.6-31.5-36.9-49.9c-2.7-5.4-4.8-11.3-5.1-17.4c0,0-21.3-241.7-21.3-241.7c25.3-9.3,5.9-40.9,1.6-51.3c13.1-16,2.6-19.5-2.8-22c-1.8-0.8-3.7-1.3-5.6-1.5c-41.5-3.1-63-2.6-107.6,0.4c-5.4,0.4-10.4,3.3-13,8c-2.4,4.4-2.5,9.9,7,14.6c4.3,6.4-32.6,40.6,0.7,52.2l-22.6,244c-6.5,41.3-58.5,63.7-63.6,117.1l4.2,483.5c0,0-0.1,22.6,7.2,29.6c32.6,28.5,253.3,24.3,266.3,1.6c9.1-6,11.6-19,12.3-29c1.5-22.4,0.2-45,0.4-67.4c0.1-16.3,0.3-32.7,0.4-49c0.2-19.6,0.3-39.2,0.5-58.8c0.2-21.3,0.4-42.7,0.6-64c0.2-21.5,0.4-43.1,0.6-64.6c0.2-20.2,0.4-40.3,0.5-60.5c0.3-36.3,0.6-72.5,1-108.8C647.7,460.6,647.7,459.2,647.6,457.8z"
      />
      {/* Contorno de la botella (siempre visible) */}
      <path
        fillOpacity={fillOpacity ?? 0.3}
        fill={fill}
        stroke={stroke}
        strokeWidth="15"
        d="M647.6,457.8c-1-22.7-11.3-42.8-24.6-60.9c-12.1-16.5-27.6-31.5-36.9-49.9c-2.7-5.4-4.8-11.3-5.1-17.4c0,0-21.3-241.7-21.3-241.7c25.3-9.3,5.9-40.9,1.6-51.3c13.1-16,2.6-19.5-2.8-22c-1.8-0.8-3.7-1.3-5.6-1.5c-41.5-3.1-63-2.6-107.6,0.4c-5.4,0.4-10.4,3.3-13,8c-2.4,4.4-2.5,9.9,7,14.6c4.3,6.4-32.6,40.6,0.7,52.2l-22.6,244c-6.5,41.3-58.5,63.7-63.6,117.1l4.2,483.5c0,0-0.1,22.6,7.2,29.6c32.6,28.5,253.3,24.3,266.3,1.6c9.1-6,11.6-19,12.3-29c1.5-22.4,0.2-45,0.4-67.4c0.1-16.3,0.3-32.7,0.4-49c0.2-19.6,0.3-39.2,0.5-58.8c0.2-21.3,0.4-42.7,0.6-64c0.2-21.5,0.4-43.1,0.6-64.6c0.2-20.2,0.4-40.3,0.5-60.5c0.3-36.3,0.6-72.5,1-108.8C647.7,460.6,647.7,459.2,647.6,457.8z"
      />
      <use href="#etiqueta" x="360" y="500" />
    </svg>
  );
};

export default BeerIcon;
