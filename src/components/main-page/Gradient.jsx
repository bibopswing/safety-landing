"use client";

import React from "react";

const Gradient = ({ animationType = "color"}) => {
  // Общие стили для всех вариантов
  const commonStyles = `
    @keyframes gradientAnimation {
      0% { stop-color: rgba(78, 128, 255, 1); }
  50% { stop-color: rgba(255, 211, 54, 1); }
  100% { stop-color: rgba(78, 128, 255, 1); }
    }
    
    @keyframes moveGradient {
      0%, 100% {
        x1: 1049.72px;
        y1: 314.428px;
        x2: 90.1947px;
        y2: 304.779px;
      }
      50% {
        x1: 1000px;
        y1: 350px;
        x2: 140px;
        y2: 280px;
      }
    }
    
    @keyframes rotateGradient {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  // Стили в зависимости от выбранного типа анимации
  const animationStyles = {
    color: `
      #paint0_linear_887_3195 stop:first-child {
        animation: gradientAnimation 8s ease infinite;
      }
      
      #paint0_linear_887_3195 stop:last-child {
        animation: gradientAnimation 8s ease infinite reverse;
      }
    `,
    move: `
      #paint0_linear_887_3195 {
        animation: moveGradient 10s ease infinite;
      }
    `,
    rotate: `
      .gradient-container {
        animation: rotateGradient 20s linear infinite;
        transform-origin: center;
      }
    `,
  };

  return (
       <svg
        viewBox="0 0 1110 555"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>
          {commonStyles}
          {animationStyles[animationType]}
        </style>

        {animationType === "rotate" ? (
          <g className="gradient-container">
            <GradientPaths />
          </g>
        ) : (
          <GradientPaths />
        )}

        <defs>
          <linearGradient
            id="paint0_linear_887_3195"
            x1="1049.72"
            y1="314.428"
            x2="90.1947"
            y2="304.779"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="rgba(78, 128, 255, 1)" />
            <stop offset="0.5" stopColor="white" />
            <stop offset="1" stopColor="rgba(255, 211, 54, 1)" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_887_3195"
            x1="585.954"
            y1="212.334"
            x2="577.5"
            y2="481.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopOpacity="0" />
            <stop offset="1" stopColor="#0F0F10" />
          </linearGradient>
        </defs>
      </svg>
   
  );
};

// Вынесенные пути для лучшей читаемости
const GradientPaths = () => (
  <>
    <path
      d="M11.1 555C4.96964 555 -0.0115983 550.029 0.111 543.9C1.49323 474.797 15.7722 406.526 42.2469 342.611C70.1383 275.275 111.019 214.092 162.556 162.556C214.092 111.019 275.275 70.1381 342.611 42.2468C409.947 14.3554 482.117 -2.69343e-05 555 0C627.884 2.69344e-05 700.054 14.3556 767.39 42.247C834.725 70.1384 895.908 111.019 947.444 162.556C998.981 214.092 1039.86 275.275 1067.75 342.611C1094.23 406.527 1108.51 474.798 1109.89 543.901C1110.01 550.03 1105.03 555 1098.9 555C1092.77 555 1087.81 550.03 1087.68 543.901C1086.31 477.714 1072.6 412.329 1047.24 351.107C1020.47 286.464 981.222 227.729 931.747 178.254C882.272 128.779 823.536 89.5328 758.894 62.7571C694.252 35.9813 624.969 22.2 555 22.2C485.032 22.2 415.749 35.9812 351.106 62.7569C286.464 89.5326 227.729 128.778 178.254 178.253C128.779 227.728 89.5328 286.464 62.757 351.106C37.398 412.328 23.6947 477.713 22.3156 543.9C22.1879 550.029 17.2304 555 11.1 555Z"
      fill="url(#paint0_linear_887_3195)"
    />
    <path
      d="M11.1 555C4.96964 555 -0.0115983 550.029 0.111 543.9C1.49323 474.797 15.7722 406.526 42.2469 342.611C70.1383 275.275 111.019 214.092 162.556 162.556C214.092 111.019 275.275 70.1381 342.611 42.2468C409.947 14.3554 482.117 -2.69343e-05 555 0C627.884 2.69344e-05 700.054 14.3556 767.39 42.247C834.725 70.1384 895.908 111.019 947.444 162.556C998.981 214.092 1039.86 275.275 1067.75 342.611C1094.23 406.527 1108.51 474.798 1109.89 543.901C1110.01 550.03 1105.03 555 1098.9 555C1092.77 555 1087.81 550.03 1087.68 543.901C1086.31 477.714 1072.6 412.329 1047.24 351.107C1020.47 286.464 981.222 227.729 931.747 178.254C882.272 128.779 823.536 89.5328 758.894 62.7571C694.252 35.9813 624.969 22.2 555 22.2C485.032 22.2 415.749 35.9812 351.106 62.7569C286.464 89.5326 227.729 128.778 178.254 178.253C128.779 227.728 89.5328 286.464 62.757 351.106C37.398 412.328 23.6947 477.713 22.3156 543.9C22.1879 550.029 17.2304 555 11.1 555Z"
      fill="url(#paint1_linear_887_3195)"
    />
  </>
);

export default Gradient;
