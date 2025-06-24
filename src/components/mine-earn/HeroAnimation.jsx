"use client";
// import styles from "../../assets/styles/modules/mine-earn/heroAnimation.module.scss";
//

import { useEffect } from "react";
import { gsap } from "gsap/gsap-core";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathPlugin, MotionPathHelper);

export default function Animation() {
  const circles = [
    {
      el: "#circle__3",
      path: "#path__3",
      duration: 8,
      start: 0.7,
      end: 0.3,
    },

    {
      el: "#circle__2__left",
      path: "#path__2",
      duration: 9,
      start: 0.8,
      end: 1.1,
    },

    {
      el: "#circle__2__right",
      path: "#path__2",
      duration: 9,
      start: 0.9,
      end: 1.2,
    },

    {
      el: "#circle__1",
      path: "#path__1",
      start: 1.2,
      duration: 9,
      end: 0.8,
    },
  ];

  useEffect(() => {
    circles.forEach(({ el, path, duration, end, start }) => {
      const targetEl = document.querySelector(el);
      const pathEl = document.querySelector(path);

      if (!targetEl || !(pathEl instanceof SVGPathElement)) {
        console.warn("❌ Path hasn`t found or it`s not a SVGPathElement");
        return;
      }

      gsap.to(targetEl, {
        duration,
        ease: "none",
        repeat: -1,
        yoyo: true,
        motionPath: {
          path: pathEl,
          align: pathEl,

          // fromCurrent: true,
          start: start,
          alignOrigin: [0.5, 0.5],

          end: end,
        },
      });
    });
  }, []);

  return (
     <svg viewBox="0 0 1440 715" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <g
          clipPath="url(#paint0_angular_1342_7585_clip_path)"
          data-figma-skip-parse="true"
        >
          <g transform="matrix(0.0697312 0.377162 -0.363471 0.0672 695.879 656.9)">
            <foreignObject
              x="-1872.27"
              y="-1872.27"
              width="3744.53"
              height="3744.53"
            >
              <div
                xmlns="http://www.w3.org/1999/xhtml"
                style={{
                  background:
                    "conic-gradient(from 90deg,rgba(15, 15, 16, 1) 0deg,rgba(15, 15, 16, 1) 97.7251deg,rgba(75, 109, 198, 1) 199.705deg,rgba(15, 15, 16, 1) 281.753deg,rgba(15, 15, 16, 1) 360deg)",
                  height: "100%",
                  width: "100%",
                  opacity: 1,
                }}
              />
            </foreignObject>
          </g>
        </g>
        <path
          id="path__3"
          d="M720 284.123C635.051 284.123 550.934 300.855 472.451 333.363C393.968 365.872 322.657 413.521 262.589 473.589C202.521 533.657 154.872 604.968 122.364 683.451C118.087 693.776 114.083 704.198 110.355 714.707C114.083 704.198 118.087 693.776 122.364 683.451C154.872 604.968 202.521 533.657 262.589 473.589C322.657 413.521 393.968 365.872 472.451 333.363C550.934 300.855 635.051 284.123 720 284.123C804.95 284.123 889.067 300.855 967.55 333.364C1046.03 365.872 1117.34 413.521 1177.41 473.589C1237.48 533.657 1285.13 604.968 1317.64 683.451C1321.91 693.776 1325.92 704.198 1329.65 714.707C1325.92 704.198 1321.91 693.776 1317.64 683.451C1285.13 604.968 1237.48 533.657 1177.41 473.589C1117.34 413.521 1046.03 365.872 967.55 333.364C889.067 300.855 804.95 284.123 720 284.123Z"
          // d="M123.174 683.786L122.364 683.451L123.174 683.786ZM1316.83 683.787L1316.02 684.122L1316.83 683.787ZM123.174 683.786L123.984 684.122C156.405 605.852 203.924 534.734 263.83 474.829L263.209 474.209L262.589 473.589C202.521 533.657 154.872 604.968 122.364 683.451L123.174 683.786ZM263.209 474.209L263.83 474.829C323.735 414.924 394.853 367.405 473.123 334.984L472.787 334.174L472.451 333.363C393.968 365.872 322.657 413.521 262.589 473.589L263.209 474.209ZM472.787 334.174L473.123 334.984C551.392 302.564 635.282 285.877 720 285.877V285V284.123C635.051 284.123 550.934 300.855 472.451 333.363L472.787 334.174ZM720 285V285.877C804.719 285.877 888.608 302.564 966.878 334.984L967.214 334.174L967.55 333.364C889.067 300.855 804.95 284.123 720 284.123V285ZM967.214 334.174L966.878 334.984C1045.15 367.405 1116.27 414.924 1176.17 474.829L1176.79 474.209L1177.41 473.589C1117.34 413.521 1046.03 365.872 967.55 333.364L967.214 334.174ZM1176.79 474.209L1176.17 474.829C1236.08 534.735 1283.6 605.853 1316.02 684.122L1316.83 683.787L1317.64 683.451C1285.13 604.968 1237.48 533.657 1177.41 473.589L1176.79 474.209ZM1316.83 683.787L1316.02 684.122C1320.28 694.419 1324.27 704.813 1327.99 715.293L1328.82 715L1329.65 714.707C1325.92 704.198 1321.91 693.776 1317.64 683.451L1316.83 683.787ZM111.182 715L112.008 715.293C115.727 704.813 119.719 694.419 123.984 684.122L123.174 683.786L122.364 683.451C118.087 693.776 114.083 704.198 110.355 714.707L111.182 715Z"
          data-figma-gradient-fill='{"type":"GRADIENT_ANGULAR","stops":[{"color":{"r":0.058823529630899429,"g":0.058823529630899429,"b":0.062745101749897003,"a":1.0},"position":0.27145862579345703},{"color":{"r":0.29476779699325562,"g":0.43054094910621643,"b":0.77867710590362549,"a":1.0},"position":0.55473554134368896},{"color":{"r":0.058823529630899429,"g":0.058823529630899429,"b":0.062745101749897003,"a":1.0},"position":0.78264701366424561}],"stopsVar":[{"color":{"r":0.058823529630899429,"g":0.058823529630899429,"b":0.062745101749897003,"a":1.0},"position":0.27145862579345703},{"color":{"r":0.29476779699325562,"g":0.43054094910621643,"b":0.77867710590362549,"a":1.0},"position":0.55473554134368896},{"color":{"r":0.058823529630899429,"g":0.058823529630899429,"b":0.062745101749897003,"a":1.0},"position":0.78264701366424561}],"transform":{"m00":139.46244812011719,"m01":-726.9426269531250,"m02":989.61920166015625,"m10":754.3244628906250,"m11":134.40000915527344,"m12":212.53732299804688},"opacity":1.0,"blendMode":"NORMAL","visible":true}'
        />
        <g id="circle__3" filter="url(#filter0_di_1342_7585)">
          <rect
            x={895}
            y={274}
            width={100}
            height={100}
            rx={50}
            fill="#0F0F10"
          />
          <rect
            x="895.5"
            y="274.5"
            width={99}
            height={99}
            rx="49.5"
            stroke="#4462B1"
            strokeOpacity="0.12"
          />
          <g opacity="0.4">
            <path
              d="M941.667 326.333C941.667 327.627 942.667 328.667 943.894 328.667H946.4C947.467 328.667 948.334 327.76 948.334 326.627C948.334 325.413 947.8 324.973 947.014 324.693L943 323.293C942.214 323.013 941.68 322.587 941.68 321.36C941.68 320.24 942.547 319.32 943.614 319.32H946.12C947.347 319.32 948.347 320.36 948.347 321.653"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M945 318V330"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M958.334 324C958.334 331.36 952.36 337.333 945 337.333C937.64 337.333 931.667 331.36 931.667 324C931.667 316.64 937.64 310.667 945 310.667"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M951.667 312V317.333H957"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M958.334 310.667L951.667 317.333"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <g
          clipPath="url(#paint1_angular_1342_7585_clip_path)"
          data-figma-skip-parse="true"
        >
          <g transform="matrix(0.0795001 0.43 -0.414391 0.0766142 692 611)">
            <foreignObject
              x="-1901.35"
              y="-1901.35"
              width="3802.69"
              height="3802.69"
            >
              <div
                xmlns="http://www.w3.org/1999/xhtml"
                style={{
                  background:
                    "conic-gradient(from 90deg,rgba(15, 15, 16, 1) 0deg,rgba(15, 15, 16, 1) 97.7251deg,rgba(75, 109, 198, 1) 199.705deg,rgba(15, 15, 16, 1) 281.753deg,rgba(15, 15, 16, 1) 360deg)",
                  height: "100%",
                  width: "100%",
                  opacity: 1,
                }}
              />
            </foreignObject>
          </g>
        </g>
        <path
          id="path__2"
          // d="M719.5 187V188C1053.39 188 1335.31 410.48 1425.11 715.283L1426.07 715L1427.03 714.717C1336.99 409.087 1054.3 186 719.5 186V187ZM12.9287 715L13.8879 715.283C103.689 410.48 385.615 188 719.5 188V187V186C384.704 186 102.014 409.087 11.9695 714.717L12.9287 715Z"
          d="M719.5 186C1053.39 186 1335.31 409.48 1425.11 714.283C1336.99 408.087 1054.3 185 719.5 185C384.704 185 102.014 408.087 11.9695 713.717C103.689 409.48 385.615 187 719.5 187Z"
          data-figma-gradient-fill='{"type":"GRADIENT_ANGULAR","stops":[{"color":{"r":0.058823529630899429,"g":0.058823529630899429,"b":0.062745101749897003,"a":1.0},"position":0.27145862579345703},{"color":{"r":0.29476779699325562,"g":0.43054094910621643,"b":0.77867710590362549,"a":1.0},"position":0.55473554134368896},{"color":{"r":0.058823529630899429,"g":0.058823529630899429,"b":0.062745101749897003,"a":1.0},"position":0.78264701366424561}],"stopsVar":[{"color":{"r":0.058823529630899429,"g":0.058823529630899429,"b":0.062745101749897003,"a":1.0},"position":0.27145862579345703},{"color":{"r":0.29476779699325562,"g":0.43054094910621643,"b":0.77867710590362549,"a":1.0},"position":0.55473554134368896},{"color":{"r":0.058823529630899429,"g":0.058823529630899429,"b":0.062745101749897003,"a":1.0},"position":0.78264701366424561}],"transform":{"m00":159.00015258789062,"m01":-828.78210449218750,"m02":1026.8909912109375,"m10":859.99987792968750,"m11":153.22846984863281,"m12":104.38584136962891},"opacity":1.0,"blendMode":"NORMAL","visible":true}'
        />
        <g id="circle__2__left" filter="url(#filter1_di_1342_7585)">
          <rect
            x={209}
            y={306}
            width={100}
            height={100}
            rx={50}
            fill="#0F0F10"
          />
          <rect
            x="209.5"
            y="306.5"
            width={99}
            height={99}
            rx="49.5"
            stroke="#4462B1"
            strokeOpacity="0.12"
          />
          <g opacity="0.4">
            <path
              d="M247.227 349.921L259 356.734L270.693 349.961"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M259 368.813V356.72"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M256.24 343.307L249.12 347.253C247.507 348.147 246.187 350.387 246.187 352.227V359.76C246.187 361.6 247.507 363.84 249.12 364.733L256.24 368.693C257.76 369.533 260.253 369.533 261.773 368.693L268.893 364.733C270.507 363.84 271.827 361.6 271.827 359.76V352.227C271.827 350.387 270.507 348.147 268.893 347.253L261.773 343.293C260.24 342.453 257.76 342.453 256.24 343.307Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <g id="circle__2__right" filter="url(#filter2_di_1342_7585)">
          <rect
            x={564}
            y={148}
            width={100}
            height={100}
            rx={50}
            fill="#0F0F10"
          />
          <rect
            x="564.5"
            y="148.5"
            width={99}
            height={99}
            rx="49.5"
            stroke="#4462B1"
            strokeOpacity="0.12"
          />
          <path
            d="M615.734 192.813L617.494 196.333C617.734 196.813 618.374 197.293 618.907 197.373L622.094 197.907C624.134 198.253 624.614 199.72 623.147 201.187L620.667 203.667C620.254 204.08 620.014 204.893 620.147 205.48L620.854 208.56C621.414 210.987 620.12 211.933 617.974 210.667L614.987 208.893C614.44 208.573 613.56 208.573 613.014 208.893L610.027 210.667C607.88 211.933 606.587 210.987 607.147 208.56L607.854 205.48C607.987 204.907 607.747 204.093 607.334 203.667L604.854 201.187C603.387 199.72 603.867 198.24 605.907 197.907L609.094 197.373C609.627 197.28 610.267 196.813 610.507 196.333L612.267 192.813C613.214 190.907 614.787 190.907 615.734 192.813Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.4"
            d="M606 194V184.667"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.4"
            d="M622 194V184.667"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.4"
            d="M614 187.333V184.667"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <g
          clipPath="url(#paint2_angular_1342_7585_clip_path)"
          data-figma-skip-parse="true"
        >
          <g transform="matrix(0.0884593 0.478459 -0.461091 0.0852483 688.901 575.783)">
            <foreignObject
              x="-1763.9"
              y="-1763.9"
              width="3527.8"
              height="3527.8"
            >
              <div
                xmlns="http://www.w3.org/1999/xhtml"
                style={{
                  background:
                    "conic-gradient(from 90deg,rgba(15, 15, 16, 1) 0deg,rgba(15, 15, 16, 1) 97.7251deg,rgba(75, 109, 198, 1) 199.705deg,rgba(15, 15, 16, 1) 281.753deg,rgba(15, 15, 16, 1) 360deg)",
                  height: "100%",
                  width: "100%",
                  opacity: 1,
                }}
              />
            </foreignObject>
          </g>
        </g>
        <path
          id="path__1"
          d="M719.5 102.887C1030.29 102.887 1300.61 276.349 1439.18 531.531C1302.19 275.599 1031.13 101.887 719.5 101.887C408.68 101.887 138.221 274.693 -1.04373 529.466C139.8 276.446 409.525 104 719.5 104Z"
          data-figma-gradient-fill='{"type":"GRADIENT_ANGULAR","stops":[{"color":{"r":0.058823529630899429,"g":0.058823529630899429,"b":0.062745101749897003,"a":1.0},"position":0.27145862579345703},{"color":{"r":0.29476779699325562,"g":0.43054094910621643,"b":0.77867710590362549,"a":1.0},"position":0.55473554134368896},{"color":{"r":0.058823529630899429,"g":0.058823529630899429,"b":0.062745101749897003,"a":1.0},"position":0.78264701366424561}],"stopsVar":[{"color":{"r":0.058823529630899429,"g":0.058823529630899429,"b":0.062745101749897003,"a":1.0},"position":0.27145862579345703},{"color":{"r":0.29476779699325562,"g":0.43054094910621643,"b":0.77867710590362549,"a":1.0},"position":0.55473554134368896},{"color":{"r":0.058823529630899429,"g":0.058823529630899429,"b":0.062745101749897003,"a":1.0},"position":0.78264701366424561}],"transform":{"m00":176.91868591308594,"m01":-922.18182373046875,"m02":1061.5324707031250,"m10":956.9177246093750,"m11":170.49656677246094,"m12":12.075632095336914},"opacity":1.0,"blendMode":"NORMAL","visible":true}'
        />
        <g id="circle__1" filter="url(#filter3_di_1342_7585)">
          <rect
            x={1180}
            y={235}
            width={100}
            height={100}
            rx={50}
            fill="#0F0F10"
          />
          <rect
            x="1180.5"
            y="235.5"
            width={99}
            height={99}
            rx="49.5"
            stroke="#4462B1"
            strokeOpacity="0.12"
          />
          <path
            opacity="0.4"
            d="M1243.33 280.333C1243.33 285.12 1239.45 289 1234.67 289C1234.44 289 1234.2 288.987 1233.97 288.973C1233.64 284.747 1230.25 281.36 1226.03 281.027C1226.01 280.8 1226 280.56 1226 280.333C1226 275.547 1229.88 271.667 1234.67 271.667C1239.45 271.667 1243.33 275.547 1243.33 280.333Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1234 289.667C1234 294.453 1230.12 298.333 1225.33 298.333C1220.55 298.333 1216.67 294.453 1216.67 289.667C1216.67 284.88 1220.55 281 1225.33 281C1225.56 281 1225.8 281.013 1226.03 281.027C1230.25 281.36 1233.64 284.747 1233.97 288.973C1233.99 289.2 1234 289.44 1234 289.667Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.4"
            d="M1224.16 288.493L1225.33 286.333L1226.51 288.493L1228.67 289.667L1226.51 290.84L1225.33 293L1224.16 290.84L1222 289.667L1224.16 288.493Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <defs>
        <clipPath id="paint0_angular_1342_7585_clip_path">
          <path d="M123.174 683.786L122.364 683.451L123.174 683.786ZM1316.83 683.787L1316.02 684.122L1316.83 683.787ZM123.174 683.786L123.984 684.122C156.405 605.852 203.924 534.734 263.83 474.829L263.209 474.209L262.589 473.589C202.521 533.657 154.872 604.968 122.364 683.451L123.174 683.786ZM263.209 474.209L263.83 474.829C323.735 414.924 394.853 367.405 473.123 334.984L472.787 334.174L472.451 333.363C393.968 365.872 322.657 413.521 262.589 473.589L263.209 474.209ZM472.787 334.174L473.123 334.984C551.392 302.564 635.282 285.877 720 285.877V285V284.123C635.051 284.123 550.934 300.855 472.451 333.363L472.787 334.174ZM720 285V285.877C804.719 285.877 888.608 302.564 966.878 334.984L967.214 334.174L967.55 333.364C889.067 300.855 804.95 284.123 720 284.123V285ZM967.214 334.174L966.878 334.984C1045.15 367.405 1116.27 414.924 1176.17 474.829L1176.79 474.209L1177.41 473.589C1117.34 413.521 1046.03 365.872 967.55 333.364L967.214 334.174ZM1176.79 474.209L1176.17 474.829C1236.08 534.735 1283.6 605.853 1316.02 684.122L1316.83 683.787L1317.64 683.451C1285.13 604.968 1237.48 533.657 1177.41 473.589L1176.79 474.209ZM1316.83 683.787L1316.02 684.122C1320.28 694.419 1324.27 704.813 1327.99 715.293L1328.82 715L1329.65 714.707C1325.92 704.198 1321.91 693.776 1317.64 683.451L1316.83 683.787ZM111.182 715L112.008 715.293C115.727 704.813 119.719 694.419 123.984 684.122L123.174 683.786L122.364 683.451C118.087 693.776 114.083 704.198 110.355 714.707L111.182 715Z" />
        </clipPath>
        <filter
          id="filter0_di_1342_7585"
          x="851.5"
          y="236.5"
          width={187}
          height={187}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius={3}
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_1342_7585"
          />
          <feOffset dy={6} />
          <feGaussianBlur stdDeviation="23.25" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0946653 0 0 0 0 0.152604 0 0 0 0 0.29926 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1342_7585"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1342_7585"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius={1}
            operator="erode"
            in="SourceAlpha"
            result="effect2_innerShadow_1342_7585"
          />
          <feOffset dx={2} dy={2} />
          <feGaussianBlur stdDeviation="15.8" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.345779 0 0 0 0 0.517666 0 0 0 0 0.95966 0 0 0 0.75 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_1342_7585"
          />
        </filter>
        <clipPath id="paint1_angular_1342_7585_clip_path">
          <path d="M719.5 187V188C1053.39 188 1335.31 410.48 1425.11 715.283L1426.07 715L1427.03 714.717C1336.99 409.087 1054.3 186 719.5 186V187ZM12.9287 715L13.8879 715.283C103.689 410.48 385.615 188 719.5 188V187V186C384.704 186 102.014 409.087 11.9695 714.717L12.9287 715Z" />
        </clipPath>
        <filter
          id="filter1_di_1342_7585"
          x="165.5"
          y="268.5"
          width={187}
          height={187}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius={3}
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_1342_7585"
          />
          <feOffset dy={6} />
          <feGaussianBlur stdDeviation="23.25" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0946653 0 0 0 0 0.152604 0 0 0 0 0.29926 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1342_7585"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1342_7585"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius={1}
            operator="erode"
            in="SourceAlpha"
            result="effect2_innerShadow_1342_7585"
          />
          <feOffset dx={2} dy={2} />
          <feGaussianBlur stdDeviation="15.8" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.345779 0 0 0 0 0.517666 0 0 0 0 0.95966 0 0 0 0.75 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_1342_7585"
          />
        </filter>
        <filter
          id="filter2_di_1342_7585"
          x="520.5"
          y="110.5"
          width={187}
          height={187}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius={3}
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_1342_7585"
          />
          <feOffset dy={6} />
          <feGaussianBlur stdDeviation="23.25" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0946653 0 0 0 0 0.152604 0 0 0 0 0.29926 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1342_7585"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1342_7585"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius={1}
            operator="erode"
            in="SourceAlpha"
            result="effect2_innerShadow_1342_7585"
          />
          <feOffset dx={2} dy={2} />
          <feGaussianBlur stdDeviation="15.8" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.345779 0 0 0 0 0.517666 0 0 0 0 0.95966 0 0 0 0.75 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_1342_7585"
          />
        </filter>
        <clipPath id="paint2_angular_1342_7585_clip_path">
          <path d="M719.5 104V105.113C1030.29 105.113 1300.61 278.349 1439.18 533.531L1440.16 533L1441.14 532.469C1302.19 276.599 1031.13 102.887 719.5 102.887V104ZM-0.0673828 531L0.908967 531.534C139.8 277.446 409.525 105.113 719.5 105.113V104V102.887C408.68 102.887 138.221 275.693 -1.04373 530.466L-0.0673828 531Z" />
        </clipPath>
        <filter
          id="filter3_di_1342_7585"
          x="1136.5"
          y="197.5"
          width={187}
          height={187}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius={3}
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_1342_7585"
          />
          <feOffset dy={6} />
          <feGaussianBlur stdDeviation="23.25" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0946653 0 0 0 0 0.152604 0 0 0 0 0.29926 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1342_7585"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1342_7585"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius={1}
            operator="erode"
            in="SourceAlpha"
            result="effect2_innerShadow_1342_7585"
          />
          <feOffset dx={2} dy={2} />
          <feGaussianBlur stdDeviation="15.8" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.345779 0 0 0 0 0.517666 0 0 0 0 0.95966 0 0 0 0.75 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_1342_7585"
          />
        </filter>
        <clipPath id="clip0_1342_7585">
          <rect
            width={1440}
            height={640}
            fill="white"
            transform="translate(0 75)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
