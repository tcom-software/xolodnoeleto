import React from "react";

const SvgTypes = {
  close: {
    svgProps: {
      id: "Capa_1",
      viewBox: "0 0 512.001 512.001",
    },
    inSide: (
      <path
        d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717
		L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859
		c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287
		l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285
		L284.286,256.002z"
      />
    ),
  },
  hamburgerMenu: {
    svgProps: {
      id: "Layer_1",
      viewBox: "0 0 32 32",
    },
    inSide: (
      <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
    ),
  },
  pracent: {
    svgProps: {
      id: "Layer_1",
      viewBox: "0 0 512 512",
    },
    inSide: (
      <>
        <path
          d="M504.936,7.136c-9.38-9.392-24.6-9.392-33.98,0L7.204,470.888c-9.388,9.384-9.388,24.592,0,33.976
			c4.692,4.696,10.844,7.044,16.992,7.044s12.3-2.348,16.988-7.044L504.936,41.112C514.324,31.728,514.324,16.52,504.936,7.136z"
        />
        <path
          d="M114.144,0.256C51.208,0.256,0,51.468,0,114.404s51.208,114.144,114.144,114.144c62.94,0,114.144-51.212,114.144-114.148
			S177.08,0.256,114.144,0.256z M114.144,180.484c-36.44,0-66.084-29.648-66.084-66.084c0-36.436,29.648-66.084,66.084-66.084
			c36.44,0,66.084,29.648,66.084,66.084C180.228,150.836,150.584,180.484,114.144,180.484z"
        />

        <path
          d="M397.856,283.596c-62.936,0-114.144,51.208-114.144,114.144s51.208,114.144,114.144,114.144S512,460.68,512,397.74
			S460.792,283.596,397.856,283.596z M397.856,463.82c-36.44,0-66.084-29.648-66.084-66.084c0-36.436,29.648-66.084,66.084-66.084
			c36.436,0,66.084,29.648,66.084,66.084S434.296,463.82,397.856,463.82z"
        />
      </>
    ),
  },
  plus: {
    svgProps: {
      id: "Layer_1",
      version: "1.1",
      viewBox: "0 0 32 32",
    },
    inSide: (
      <path d="M28,14H18V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v10H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h10v10c0,1.104,0.896,2,2,2  s2-0.896,2-2V18h10c1.104,0,2-0.896,2-2S29.104,14,28,14z" />
    ),
  },
  minus: {
    svgProps: {
      id: "Layer_1",
      version: "1.1",
      viewBox: "0 0 256 256",
    },
    inSide: (
      <path d="M208,134.4H48c-3.534,0-6.4-2.866-6.4-6.4s2.866-6.4,6.4-6.4h160c3.534,0,6.4,2.866,6.4,6.4S211.534,134.4,208,134.4z" />
    ),
  },
  search: {
    svgProps: {
      id: "Layer_1",
      version: "1.1",
      viewBox: "0 0 512 512",
    },
    inSide: (
      <path d="M344.5,298c15-23.6,23.8-51.6,23.8-81.7c0-84.1-68.1-152.3-152.1-152.3C132.1,64,64,132.2,64,216.3  c0,84.1,68.1,152.3,152.1,152.3c30.5,0,58.9-9,82.7-24.4l6.9-4.8L414.3,448l33.7-34.3L339.5,305.1L344.5,298z M301.4,131.2  c22.7,22.7,35.2,52.9,35.2,85c0,32.1-12.5,62.3-35.2,85c-22.7,22.7-52.9,35.2-85,35.2c-32.1,0-62.3-12.5-85-35.2  c-22.7-22.7-35.2-52.9-35.2-85c0-32.1,12.5-62.3,35.2-85c22.7-22.7,52.9-35.2,85-35.2C248.5,96,278.7,108.5,301.4,131.2z" />
    ),
  },
  compare: {
    svgProps: {
      version: "1.1",
      viewBox: "0 0 22 15",
    },
    inSide: (
      <>
        <path
          d="M1.07631 9.98254L4.98256 6.0763C5.08429 5.97457 5.24909 5.97457 5.35079 6.0763C5.45253 6.17803 5.45253 6.34283 5.35079 6.44454L1.88908 9.90625H13.2396C13.3835 9.90625 13.5 10.0227 13.5 10.1667C13.5 10.3106 13.3835 10.4271 13.2396 10.4271H1.88908L5.35079 13.8888C5.45253 13.9905 5.45253 14.1553 5.35079 14.257C5.29994 14.3079 5.23329 14.3333 5.16666 14.3333C5.10004 14.3333 5.03341 14.3079 4.98253 14.257L1.07629 10.3508C0.97458 10.2491 0.97458 10.0843 1.07631 9.98254Z"
          fill="#03A9F4"
          stroke="#03A9F4"
        />
        <path
          d="M20.9237 4.98254L17.0174 1.0763C16.9157 0.974567 16.7509 0.974567 16.6492 1.0763C16.5475 1.17803 16.5475 1.34283 16.6492 1.44454L20.1109 4.90625H8.76042C8.61648 4.90625 8.5 5.02273 8.5 5.16667C8.5 5.31062 8.61648 5.4271 8.76042 5.4271H20.1109L16.6492 8.88879C16.5475 8.99052 16.5475 9.15532 16.6492 9.25702C16.7001 9.30788 16.7667 9.33332 16.8333 9.33332C16.9 9.33332 16.9666 9.30788 17.0175 9.25702L20.9237 5.35078C21.0254 5.24907 21.0254 5.08428 20.9237 4.98254Z"
          fill="#03A9F4"
          stroke="#03A9F4"
        />
      </>
    ),
  },
  favorite: {
    svgProps: {
      id: "Layer_1",
      version: "1.1",
      viewBox: "0 0 48 48", // 48 48
    },
    inSide: (
      <path d="M38,46.9l-14-9.7l-14,9.7V5c0-1.7,1.3-3,3-3h22c1.7,0,3,1.3,3,3V46.9z M24,34.8l12,8.3V5c0-0.6-0.4-1-1-1H13   c-0.6,0-1,0.4-1,1v38.1L24,34.8z" />
    ),
  },
  arrowLeft: {
    svgProps: {
      id: "Capa_1",
      version: "1.1",
      viewBox: "0 0 451.847 451.847",
    },
    inSide: (
      <path
        d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0
		c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744
		c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z"
      />
    ),
  },
  arrowRight: {
    svgProps: {
      id: "Layer_1",
      version: "1.1",
      viewBox: "0 0 492.004 492.004",
    },
    inSide: (
      <path
        d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
			c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
			c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
			c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"
      />
    ),
  },
  arrowUp: {
    svgProps: {
      id: "Layer_1",
      version: "1.1",
      viewBox: "0 0 492.002 492.002",
    },
    inSide: (
      <path
        d="M484.136,328.473L264.988,109.329c-5.064-5.064-11.816-7.844-19.172-7.844c-7.208,0-13.964,2.78-19.02,7.844
			L7.852,328.265C2.788,333.333,0,340.089,0,347.297c0,7.208,2.784,13.968,7.852,19.032l16.124,16.124
			c5.064,5.064,11.824,7.86,19.032,7.86s13.964-2.796,19.032-7.86l183.852-183.852l184.056,184.064
			c5.064,5.06,11.82,7.852,19.032,7.852c7.208,0,13.96-2.792,19.028-7.852l16.128-16.132
			C494.624,356.041,494.624,338.965,484.136,328.473z"
      />
    ),
  },
  arrowDown: {
    svgProps: {
      id: "Capa_1",
      version: "1.1",
      viewBox: "0 0 451.847 451.847",
    },
    inSide: (
      <path
        d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
		c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
		c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"
      />
    ),
  },
  phone: {
    svgProps: {
      id: "Layer_1",
      version: "1.1",
      viewBox: "0 0 40 40",
    },
    inSide: (
      <>
        <path
          d="M20,2c9.925,0,18,8.075,18,18s-8.075,18-18,18c-9.925,0-18-8.075-18-18S10.075,2,20,2 M20,0      C8.955,0,0,8.954,0,20c0,11.047,8.955,20,20,20c11.047,0,20-8.953,20-20C40,8.954,31.047,0,20,0L20,0z"
          fill="black"
        />
        <path
          clipRule="evenodd"
          d="M14.371,9.793c1.207-0.228,1.998,1.133,2.6,2.072   c0.586,0.912,1.307,1.982,1.016,3.169c-0.162,0.666-0.764,1.029-1.219,1.422c-0.449,0.388-1.133,0.744-1.299,1.34   c-0.271,0.967,0.322,1.982,0.689,2.56c0.834,1.306,1.842,2.483,3.129,3.534c0.623,0.51,1.488,1.191,2.355,1.016   c1.295-0.262,1.637-1.859,3.047-2.072c1.342-0.203,2.25,0.77,3.008,1.422c0.73,0.631,1.908,1.439,1.828,2.52   c-0.047,0.621-0.545,1.006-0.977,1.381c-0.439,0.383-0.824,0.813-1.258,1.096c-1.051,0.686-2.34,1.022-3.82,0.976   c-1.451-0.045-2.607-0.538-3.656-1.097c-2.051-1.094-3.672-2.633-5.199-4.348c-1.502-1.686-2.889-3.682-3.656-5.889   c-0.957-2.756-0.451-5.587,1.098-7.353c0.262-0.3,0.676-0.613,1.055-0.935C13.49,10.284,13.84,9.893,14.371,9.793z"
          fill="black"
          fillRule="evenodd"
        />
      </>
    ),
  },
  basket: {
    svgProps: {
      id: "Layer_1",
      version: "1.1",
      viewBox: "0 0 23 20",
    },
    inSide: (
      <>
        <path
          d="M0.542763 1.11842C-0.180921 1.11842 -0.180921 0 0.542763 0H1.99013C3.04276 0 3.96382 0.723684 4.16118 1.77632L4.35855 2.76316H20.7401C22.1875 2.76316 23.2401 4.14474 22.8454 5.52632L20.9375 13.3553C20.6743 14.3421 19.8191 15.0658 18.7664 15.0658H7.51645C6.46382 15.0658 5.54276 14.2763 5.3454 13.2237L3.04276 2.03947C2.97697 1.44737 2.51645 1.11842 1.99013 1.11842H0.542763ZM4.55592 3.88158L6.39803 13.0263C6.52961 13.5526 6.99013 13.9474 7.51645 13.9474H18.7664C19.2928 13.9474 19.6875 13.6184 19.8191 13.0921L21.7928 5.26316C21.9901 4.60526 21.4638 3.88158 20.7401 3.88158H4.55592Z"
          fill="#03A9F4"
        />
        <path
          d="M8.96379 15.921C10.0822 15.921 10.9375 16.8421 10.9375 17.9605C10.9375 19.0789 10.0822 20 8.96379 20C7.77958 20 6.92432 19.0789 6.92432 17.9605C6.92432 16.8421 7.77958 15.921 8.96379 15.921ZM8.96379 17.0394C8.43747 17.0394 8.04274 17.5 8.04274 17.9605C8.04274 18.4868 8.43747 18.8815 8.96379 18.8815C9.42432 18.8815 9.88484 18.4868 9.88484 17.9605C9.88484 17.5 9.42432 17.0394 8.96379 17.0394Z"
          fill="#03A9F4"
        />
        <path
          d="M17.3191 15.921C18.4376 15.921 19.3586 16.8421 19.3586 17.9605C19.3586 19.0789 18.4376 20 17.3191 20C16.2007 20 15.2797 19.0789 15.2797 17.9605C15.2797 16.8421 16.2007 15.921 17.3191 15.921ZM17.3191 17.0394C16.7928 17.0394 16.3981 17.4342 16.3981 17.9605C16.3981 18.4868 16.7928 18.8815 17.3191 18.8815C17.8455 18.8815 18.2402 18.4868 18.2402 17.9605C18.2402 17.5 17.8455 17.0394 17.3191 17.0394Z"
          fill="#03A9F4"
        />
      </>
    ),
  },
  box: {
    svgProps: {
      id: "Capa_1",
      version: "1.1",
      viewBox: "0 0 96.154 96.154",
    },
    inSide: (
      <>
        <path
          d="M95.594,75.183L49.642,17.578c-0.76-0.951-2.367-0.951-3.127,0L0.559,75.187c-0.546,0.689-0.708,1.717-0.414,2.61
		c0.061,0.187,0.13,0.33,0.187,0.437c0.349,0.649,1.025,1.056,1.763,1.056h91.967c0.737,0,1.414-0.405,1.763-1.056
		c0.06-0.109,0.126-0.254,0.184-0.427C96.305,76.903,96.143,75.874,95.594,75.183z"
        />
      </>
    ),
  },
  star: {
    svgProps: {
      id: "",
      version: "1.1",
      viewBox: "0 0 512 512",
    },
    inSide: (
      <polygon
        points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431
			255.898,401.21 416.035,502.431 369.263,318.842 		"
      />
    ),
  },
  filledStar: {
    svgProps: {
      id: "Capa_1",
      version: "1.1",
      viewBox: "0 0 512 512",
    },
    inSide: (
      <path
        d="M512,197.819l-185.933-12.228L256,9.571l-70.067,176.021L0,197.82l142.658,120.93L95.856,502.429L256,401.214
			l160.144,101.215l-46.8-183.671L512,197.819z M256,365.724l-112.464,71.08l32.827-128.831L75.829,222.888l130.971-8.603
			L256,90.687l49.2,123.599l131.124,8.602l-100.689,85.077l32.829,128.839L256,365.724z"
      />
    ),
  },

  hands: {
    svgProps: {
      id: "",
      version: "1.1",
      viewBox: "0 0 50 50",
    },

    inSide: (
      <>
        <path
          d="M49.577 12.876C49.577 12.4374 49.2152 12.0768 48.7752 12.0768C40.8644 12.0768 36.4347 14.0065 35.9555 14.2307C35.7502 14.3282 35.5937 14.5036 35.5351 14.7278C35.4764 14.9227 35.496 15.1176 35.584 15.3028L35.848 15.8486L35.2808 15.6342C33.7847 15.0689 31.5357 14.1917 29.2866 13.1879C25.8152 11.6382 23.4782 11.8916 20.662 14.104L20.5935 14.1527H11.8809L11.92 13.8798C11.9689 13.5387 11.9982 13.2268 12.0276 12.9442C12.0471 12.7005 11.9591 12.4666 11.7831 12.3009C10.4043 10.9949 5.2315 10.264 0.85073 10.0008C0.616045 9.99107 0.410697 10.069 0.254241 10.2152C0.0880065 10.3614 0 10.5758 0 10.8V29.5129C0 29.9515 0.361804 30.3121 0.801837 30.3121H7.06008C7.40232 30.3121 7.71524 30.0879 7.8228 29.7663C7.84236 29.6981 7.93036 29.4349 8.06726 29.0061L8.19438 28.6162L8.47796 28.9086C8.65397 29.0841 8.82999 29.279 9.02556 29.4739L9.27002 29.7273C10.1892 30.6825 11.1377 31.6766 11.7733 32.2029C15.6456 35.4387 20.3099 38.9278 21.2291 39.5321C21.9723 40.0194 23.5662 40.7017 24.7983 40.7017C25.7566 40.7017 26.4997 40.4872 27.0082 40.0682L27.1158 39.9707L27.2527 40.0194C27.9372 40.2826 28.7195 40.2728 29.4431 39.9902C30.3134 39.6491 31.0565 38.9668 31.4868 38.1091L31.5748 37.9435L31.7606 37.9824C32.5428 38.1481 33.4327 38.0214 34.215 37.6218C34.9777 37.2417 35.5546 36.6375 35.8382 35.9357L35.9067 35.77L36.0827 35.7798C36.8649 35.8188 37.657 35.5361 38.3024 34.9806C39.1727 34.2399 39.5638 33.1483 39.3487 32.0567L39.3194 31.9008L41.3728 30.5265L41.4706 30.8384C41.588 31.2185 41.6857 31.5401 41.7542 31.7838C41.852 32.1249 42.1649 32.3686 42.5267 32.3686H48.7849C49.225 32.3686 49.5868 32.008 49.5868 31.5694V12.876H49.577ZM6.53204 28.5383L6.47337 28.704H1.5939V11.6479L1.85792 11.6674C4.99681 11.9111 8.80065 12.4764 10.2283 13.1684L10.3848 13.2463L10.3652 13.412C9.80784 17.9928 7.28498 26.1504 6.53204 28.5383ZM37.2561 33.7818C36.7769 34.1911 36.1316 34.3178 35.7306 34.0839L35.7013 34.0644C34.8701 33.4017 31.3108 29.7566 29.5408 27.9145C29.3942 27.7586 29.1986 27.6709 28.9835 27.6709C28.7781 27.6709 28.5728 27.7488 28.4163 27.895C28.2599 28.0412 28.1719 28.2361 28.1719 28.4506C28.1719 28.665 28.2501 28.8697 28.3968 29.0158C29.1302 29.7761 32.8362 33.6161 34.3323 34.9806L34.4399 35.078L34.4008 35.2242C34.2541 35.7603 33.7749 36.0722 33.5011 36.2086C32.7384 36.5887 31.9366 36.5108 31.6041 36.2086C31.5846 36.1891 31.565 36.1794 31.5552 36.1599C30.284 35.1463 27.1451 31.813 26.4313 31.0431C26.1379 30.7214 25.6294 30.702 25.297 30.9943C25.1405 31.1405 25.0525 31.3355 25.0427 31.5499C25.033 31.7643 25.1112 31.969 25.2481 32.1249L25.2676 32.1444C25.7957 32.7097 28.4848 35.5849 30.0591 36.9786L30.1862 37.0955L30.1276 37.2515C29.9027 37.8168 29.4333 38.2846 28.8759 38.499C28.3283 38.7037 27.8296 38.6257 27.4287 38.2748L27.4091 38.2553C25.9032 36.9883 22.8524 33.7525 22.2559 33.119C22.1092 32.9631 21.9136 32.8754 21.6985 32.8656C21.4834 32.8559 21.2878 32.9339 21.1313 33.0801C20.8086 33.3822 20.7891 33.889 21.0922 34.2106C21.7083 34.8734 23.8595 37.154 25.473 38.6549L25.8446 39.0058L25.3361 39.074C25.1796 39.0935 25.0036 39.1033 24.8081 39.1033C24.0551 39.1033 22.7741 38.6257 22.119 38.1871C21.3758 37.6998 16.7603 34.2594 12.8098 30.9651C12.2427 30.4875 11.2746 29.4837 10.4141 28.587C9.79806 27.9535 9.22113 27.3492 8.83976 26.9984L8.7322 26.8912L8.78109 26.745C9.69049 23.7528 10.9128 19.4547 11.5973 15.9363L11.6364 15.7414H18.8236L18.4129 16.1605C17.0341 17.5445 15.1567 20.3221 15.6358 22.3201C15.8314 23.1291 16.4083 23.7334 17.2688 24.016C19.5374 24.7665 21.5616 24.0745 23.1262 22.0083L23.1848 21.9303L23.2826 21.9108C23.9182 21.8133 24.2702 21.6671 24.7885 21.4332C24.9645 21.3553 25.209 21.248 25.5317 21.1213L25.6783 21.0629L25.7957 21.1701C26.9984 22.3006 28.6706 23.6359 30.284 24.9419C33.374 27.4369 36.8747 30.2536 37.6766 31.9202C38.097 32.9144 37.5299 33.5576 37.2561 33.7818ZM38.6055 30.4778L38.4686 30.2926C37.0507 28.4018 34.0976 26.0237 31.2423 23.7236C29.3453 22.1934 27.5558 20.751 26.402 19.6009C26.1868 19.3865 25.8544 19.3085 25.5708 19.4157C24.9058 19.6594 24.4951 19.8446 24.1529 19.9908L24.104 20.0103C23.5662 20.2539 23.3706 20.3416 22.6274 20.4099C22.3928 20.4294 22.1776 20.5561 22.0407 20.7607C20.2806 23.3727 18.364 22.7392 17.7382 22.5248C17.3177 22.3884 17.2102 22.1642 17.1613 21.9693C16.8972 20.8679 18.1978 18.6165 19.5277 17.2813C21.1411 15.6732 22.5101 14.5036 23.928 14.0455C25.2872 13.6069 26.6953 13.7824 28.6314 14.6498C32.1419 16.2092 35.6915 17.5055 36.6987 17.8661L36.7965 17.9051L36.8356 18.0025C38.0873 21.0239 39.7594 25.7216 40.7959 28.8014L40.8546 28.9769L38.6055 30.4778ZM47.9831 30.7897H43.1232L43.0743 30.6142C42.0769 27.3687 39.1433 18.9869 37.5494 15.6049L37.4321 15.3613L37.6863 15.2736C39.2998 14.7278 42.7418 13.8019 47.7289 13.6849L47.9831 13.6752V30.7897Z"
          fill="#03A9F4"
        />
      </>
    ),
  },
  boxes: {
    svgProps: {
      id: "",
      version: "1.1",
      viewBox: "0 0 36 36",
    },
    inSide: (
      <>
        <path
          d="M22.3714 7.15884C22.1571 6.94281 21.8096 6.94281 21.5954 7.15891L16.7154 12.0795L14.1768 9.51969C13.9624 9.30359 13.615 9.30359 13.4007 9.51969C13.1864 9.7358 13.1864 10.0861 13.4007 10.3022L16.3274 13.2532C16.4345 13.3613 16.575 13.4153 16.7154 13.4153C16.8558 13.4153 16.9963 13.3613 17.1034 13.2532L22.3713 7.9414C22.5856 7.72523 22.5856 7.37495 22.3714 7.15884Z"
          fill="#03A9F4"
          stroke="#03A9F4"
          strokeWidth="0.5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.15991 3.47571C9.15991 2.10841 10.2683 1 11.6356 1H24.1792C25.5465 1 26.6549 2.10841 26.6549 3.47571V16.0193C26.6549 17.3866 25.5465 18.495 24.1792 18.495H11.6356C10.2683 18.495 9.15991 17.3866 9.15991 16.0193V3.47571ZM11.6356 1.99029C10.8152 1.99029 10.1502 2.65533 10.1502 3.47571V16.0193C10.1502 16.8397 10.8152 17.5048 11.6356 17.5048H24.1792C24.9996 17.5048 25.6647 16.8397 25.6647 16.0193V3.47571C25.6647 2.65533 24.9996 1.99029 24.1792 1.99029H11.6356Z"
          fill="#03A9F4"
          stroke="#03A9F4"
          strokeWidth="0.8"
        />
        <path
          d="M30.7689 23.6634C30.5546 23.4473 30.2071 23.4473 29.9928 23.6634L25.1128 28.5842L22.5742 26.0243C22.3599 25.8082 22.0124 25.8082 21.7982 26.0243C21.5839 26.2405 21.5839 26.5908 21.7982 26.8069L24.7249 29.7581C24.832 29.8662 24.9725 29.9201 25.1128 29.9201C25.2532 29.9201 25.3938 29.8662 25.5008 29.7581L30.7688 24.446C30.9831 24.2298 30.9831 23.8795 30.7689 23.6634Z"
          fill="#03A9F4"
          stroke="#03A9F4"
          strokeWidth="0.5"
        />
        <path
          d="M14.4005 23.6634C14.1862 23.4473 13.8387 23.4473 13.6245 23.6634L8.74445 28.5842L6.20581 26.0243C5.99149 25.8082 5.64403 25.8082 5.42978 26.0243C5.21546 26.2405 5.21546 26.5908 5.42978 26.8069L8.35647 29.7581C8.4636 29.8662 8.60406 29.9201 8.74445 29.9201C8.88485 29.9201 9.02538 29.8662 9.13243 29.7581L14.4004 24.446C14.6147 24.2298 14.6147 23.8795 14.4005 23.6634Z"
          fill="#03A9F4"
          stroke="#03A9F4"
          strokeWidth="0.5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.5049 19.9806C17.5049 18.6133 18.6133 17.5049 19.9806 17.5049H32.5242C33.8915 17.5049 34.9999 18.6133 34.9999 19.9806V32.5242C34.9999 33.8915 33.8915 34.9999 32.5242 34.9999H19.9806C18.6133 34.9999 17.5049 33.8915 17.5049 32.5242V19.9806ZM19.9806 18.4952C19.1602 18.4952 18.4952 19.1602 18.4952 19.9806V32.5242C18.4952 33.3446 19.1602 34.0096 19.9806 34.0096H32.5242C33.3446 34.0096 34.0096 33.3446 34.0096 32.5242V19.9806C34.0096 19.1602 33.3446 18.4952 32.5242 18.4952H19.9806Z"
          fill="#03A9F4"
          stroke="#03A9F4"
          strokeWidth="0.8"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 19.9804C1 18.6131 2.10841 17.5046 3.47571 17.5046H16.0193C17.3866 17.5046 18.495 18.6131 18.495 19.9804V32.524C18.495 33.8913 17.3866 34.9997 16.0193 34.9997H3.47571C2.10841 34.9997 1 33.8913 1 32.524V19.9804ZM3.47571 18.4949C2.65533 18.4949 1.99029 19.16 1.99029 19.9804V32.524C1.99029 33.3443 2.65533 34.0094 3.47571 34.0094H16.0193C16.8397 34.0094 17.5048 33.3443 17.5048 32.524V19.9804C17.5048 19.16 16.8397 18.4949 16.0193 18.4949H3.47571Z"
          fill="#03A9F4"
          stroke="#03A9F4"
          strokeWidth="0.8"
        />
      </>
    ),
  },
  delivery: {
    svgProps: {
      id: "",
      version: "1.1",
      viewBox: "0 0 51 33",
    },
    inSide: (
      <>
        <path
          d="M47.3241 20.1546V19.3173H48.984V20.9919H48.1541C47.6969 20.9919 47.3241 20.6167 47.3241 20.1546ZM47.1561 14.3642L45.892 9.26565C46.2405 9.16762 46.4959 8.84564 46.4959 8.46362V7.62856C46.4959 5.78824 45.011 4.29045 43.185 4.29045H37.3861V2.61798C37.3861 1.69856 36.6443 0.95 35.7315 0.95H5.91723C5.00441 0.95 4.26263 1.69856 4.26263 2.61798V16.8144C4.26263 17.2739 4.63222 17.6473 5.08907 17.6473C5.54583 17.6473 5.91551 17.274 5.91551 16.8144V2.61798C5.91551 2.61639 5.91667 2.61583 5.91723 2.61583H35.7314C35.732 2.61583 35.7331 2.61639 35.7331 2.61798V16.8146C35.7331 17.2741 36.1027 17.6475 36.5596 17.6475C37.0163 17.6475 37.386 17.2742 37.386 16.8146V15.977H46.4924C46.4937 15.9772 46.4952 15.9772 46.497 15.9772L46.4991 15.9771C46.4993 15.9771 46.4994 15.9771 46.4996 15.9771C47.5798 15.9781 48.5011 16.6776 48.8423 17.6517H46.4976C46.0408 17.6517 45.6711 18.0249 45.6711 18.4846V20.1547C45.6711 21.5346 46.7844 22.6578 48.1539 22.6578H48.9839V26.0024H47.0393C46.3562 24.059 44.5161 22.6621 42.3567 22.6621C40.1973 22.6621 38.3571 24.059 37.6741 26.0024H37.3858V20.1546C37.3858 19.6951 37.0162 19.3217 36.5594 19.3217C36.1026 19.3217 35.7329 19.695 35.7329 20.1546V26.0022H19.7097C19.0267 24.0588 17.1866 22.6619 15.0272 22.6619C12.8678 22.6619 11.0276 24.0588 10.3446 26.0022H5.91723C5.91667 26.0022 5.91551 26.0016 5.91551 26.0001V24.3277H9.22996C9.68671 24.3277 10.0564 23.9544 10.0564 23.4948C10.0564 23.0351 9.68681 22.6619 9.22996 22.6619H1.77644C1.31969 22.6619 0.95 23.0351 0.95 23.4948C0.95 23.9544 1.31959 24.3277 1.77644 24.3277H4.26273V26.0001C4.26273 26.9195 5.00451 27.668 5.91733 27.668H10.0599C10.0599 27.6688 10.0599 27.6695 10.0599 27.6702C10.0599 30.4314 12.2879 32.6784 15.0272 32.6784C17.7665 32.6784 19.9944 30.4314 19.9944 27.6702C19.9944 27.6695 19.9944 27.6688 19.9944 27.668H37.3894C37.3894 27.6688 37.3894 27.6695 37.3894 27.6702C37.3894 30.4314 39.6174 32.6784 42.3567 32.6784C45.096 32.6784 47.3239 30.4314 47.3239 27.6702C47.3239 27.6695 47.3239 27.6688 47.3239 27.668H49.8103C50.267 27.668 50.6367 27.2948 50.6367 26.8351V18.4844C50.6368 16.4094 49.127 14.6832 47.1561 14.3642ZM37.3861 5.95618H43.185C44.0989 5.95618 44.8432 6.70607 44.8432 7.62856V7.63071H37.3861V5.95618ZM37.3861 14.3113V9.29644H44.196L45.4394 14.3113H37.3861ZM15.0272 31.0129C13.2 31.0129 11.7127 29.5139 11.7127 27.6704C11.7127 25.8269 13.2 24.3279 15.0272 24.3279C16.8543 24.3279 18.3416 25.8269 18.3416 27.6704C18.3416 29.5139 16.8543 31.0129 15.0272 31.0129ZM42.3569 31.0129C40.5297 31.0129 39.0424 29.5139 39.0424 27.6704C39.0424 25.8269 40.5297 24.3279 42.3569 24.3279C44.184 24.3279 45.6713 25.8269 45.6713 27.6704C45.6713 29.5139 44.184 31.0129 42.3569 31.0129Z"
          fill="#03A9F4"
          stroke="#03A9F4"
          strokeWidth="0.1"
        />
        <path
          d="M15.0272 26.0022C14.1144 26.0022 13.3726 26.7508 13.3726 27.6702C13.3726 28.5896 14.1144 29.3381 15.0272 29.3381C15.94 29.3381 16.6818 28.5896 16.6818 27.6702C16.6818 26.7508 15.94 26.0022 15.0272 26.0022Z"
          fill="#03A9F4"
          stroke="#03A9F4"
          strokeWidth="0.1"
        />
        <path
          d="M42.3578 26.0022C41.445 26.0022 40.7032 26.7508 40.7032 27.6702C40.7032 28.5896 41.445 29.3381 42.3578 29.3381C43.2706 29.3381 44.0124 28.5896 44.0124 27.6702C44.0124 26.7508 43.2706 26.0022 42.3578 26.0022Z"
          fill="#03A9F4"
          stroke="#03A9F4"
          strokeWidth="0.1"
        />
        <path
          d="M33.2463 22.6624H21.6519C21.1952 22.6624 20.8255 23.0356 20.8255 23.4951C20.8255 23.9547 21.1951 24.3278 21.6519 24.3278H33.2463C33.7031 24.3278 34.0728 23.9547 34.0728 23.4951C34.0728 23.0356 33.7032 22.6624 33.2463 22.6624Z"
          fill="#03A9F4"
          stroke="#03A9F4"
          strokeWidth="0.1"
        />
        <path
          d="M13.37 19.3216H3.43196C2.9752 19.3216 2.60552 19.6949 2.60552 20.1545C2.60552 20.6142 2.9751 20.9875 3.43196 20.9875H13.37C13.8268 20.9875 14.1965 20.6142 14.1965 20.1545C14.1965 19.6949 13.8268 19.3216 13.37 19.3216Z"
          fill="#03A9F4"
          stroke="#03A9F4"
          strokeWidth="0.1"
        />
        <path
          d="M28.0352 8.71014L28.0352 8.71015C28.3576 9.03541 28.3576 9.56245 28.0351 9.8878L28.0351 9.88781L20.5816 17.4035C20.4203 17.5663 20.2086 17.6477 19.9971 17.6477C19.7856 17.6477 19.5739 17.5663 19.4126 17.4036L15.2718 13.2281C14.9492 12.9028 14.9492 12.3758 15.2718 12.0505M28.0352 8.71014L15.3073 12.0857M28.0352 8.71014C27.7125 8.38475 27.1889 8.38475 26.8662 8.71024M28.0352 8.71014L26.8662 8.71025M15.2718 12.0505L15.3073 12.0857M15.2718 12.0505C15.2718 12.0505 15.2718 12.0505 15.2718 12.0505L15.3073 12.0857M15.2718 12.0505C15.5945 11.725 16.118 11.7251 16.4407 12.0505L19.9971 15.6366M15.3073 12.0857C15.6104 11.78 16.102 11.78 16.4052 12.0857L19.9619 15.6721L19.9971 15.6366M19.9971 15.6366L26.8662 8.71025M19.9971 15.6366L20.0323 15.6721L26.9017 8.74545L26.8662 8.71024M26.8662 8.71025C26.8662 8.71025 26.8662 8.71024 26.8662 8.71024M26.8662 8.71025L26.8662 8.71024"
          fill="#03A9F4"
          stroke="#03A9F4"
          strokeWidth="0.1"
        />
      </>
    ),
  },
  shield: {
    svgProps: {
      id: "",
      version: "1.1",
      viewBox: "0 0 29 33",
    },
    inSide: (
      <>
        <path
          d="M9.01721 16.8532C8.84534 16.683 8.56809 16.6842 8.39771 16.8559C8.22716 17.0277 8.22828 17.3053 8.40021 17.4758L11.9118 20.9579C12.3008 21.3437 12.9277 21.3446 13.3179 20.9601L23.1214 11.2985C23.2946 11.1279 23.2972 10.8493 23.1272 10.6754C22.9563 10.5006 22.6757 10.4979 22.5015 10.6696L13.3174 19.7213C12.9274 20.1056 12.3008 20.1049 11.9118 19.7196L9.01721 16.8532Z"
          fill="#03A9F4"
          stroke="#03A9F4"
        />
        <path
          d="M14.9783 1.19942L14.7124 1L14.4465 1.19942C8.5399 5.65309 1.41783 7.27217 1.34661 7.28641L1 7.36238V7.71849C1 15.0685 0.999999 30.3714 14.6601 32H14.7646C28.4247 30.3714 28.4247 15.078 28.4247 7.71849V7.36238L28.0781 7.28641C28.0069 7.27217 20.8848 5.65309 14.9783 1.19942ZM14.7124 31.1121C2.07306 29.569 1.89263 15.7712 1.89263 8.06509C3.38827 7.6805 9.48951 5.96646 14.7124 2.10155C19.9684 5.96646 26.0459 7.6805 27.5321 8.06509C27.5321 15.7712 27.3517 29.569 14.7124 31.1169V31.1121Z"
          fill="#03A9F4"
          stroke="#03A9F4"
        />
      </>
    ),
  },
  edit: {
    svgProps: {
      id: "",
      version: "1.1",
      viewBox: "0 0 386.615 386.615",
    },
    inSide: (
      <>
        <path
          d="M36.573,309.292h2.09l100.833-21.943c1.964-0.327,3.784-1.237,5.224-2.612L315.56,113.896
				c12.48-12.453,19.443-29.391,19.331-47.02c0.023-17.766-6.917-34.833-19.331-47.543C303.108,6.853,286.17-0.11,268.54,0.003
				c-17.742-0.157-34.76,7.028-47.02,19.853L51.201,190.696c-1.502,1.209-2.597,2.85-3.135,4.702L26.124,296.231
				c-0.599,3.62,0.565,7.308,3.135,9.927C31.188,308.126,33.817,309.253,36.573,309.292z M268.54,20.901
				c25.103-0.002,45.454,20.347,45.456,45.45c0,0.175-0.001,0.35-0.003,0.525c0.171,11.959-4.547,23.47-13.061,31.869
				l-64.261-64.784C245.137,25.548,256.604,20.848,268.54,20.901z M222.042,49.113l64.261,64.261L137.405,261.749l-64.261-63.739
				L222.042,49.113z M64.785,218.909l51.722,51.722L50.156,285.26L64.785,218.909z"
        />
        <path
          d="M368.328,365.717H18.287c-5.771,0-10.449,4.678-10.449,10.449s4.678,10.449,10.449,10.449h350.041
				c5.771,0,10.449-4.678,10.449-10.449S374.099,365.717,368.328,365.717z"
        />
      </>
    ),
  },
};

export default SvgTypes;
