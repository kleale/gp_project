import React from "react";
import styles from "./Home.module.scss";
import { useAppSelector } from "../../hooks/redux";
import { Themes } from "../../store/reducers/themeSlice";

const Home = () => {
  const theme = useAppSelector((state) => state.themeReducer);
  const primaryColor = theme.currentTheme === Themes.Light ? "#1E467E" : "#FFFFFF";

  const svgs = {
    doubleCheckmark: (
      <svg width="61" height="37" viewBox="0 0 61 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.6376 13.7129L14.6018 16.7487L32.3274 37L60.6883 6.11334L57.1431 2.56823L32.3274 29.8805L17.6376 13.7129Z" fill={primaryColor} />
        <path d="M3.79483 13.3752L0.421387 16.7487L18.1469 37L21.7228 33.1279L3.79483 13.3752Z" fill={primaryColor} />
        <path d="M31.9718 22.0299L48.6349 3.98627L45.0898 0.441162L27.9381 17.5928L31.9718 22.0299Z" fill={primaryColor} />
      </svg>
    ),
    burgerMenu: (
      <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 12.5H18V10.5H0V12.5ZM0 7.5H18V5.5H0V7.5ZM0 0.5V2.5H18V0.5H0Z" fill="#00395C" fillOpacity="0.8" />
      </svg>
    ),
    magnifyingGlass: (
      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M12.0491 13.9633C10.7873 14.9274 9.21054 15.5 7.5 15.5C3.35786 15.5 0 12.1421 0 8C0 3.85786 3.35786 0.5 7.5 0.5C11.6421 0.5 15 3.85786 15 8C15 9.71053 14.4274 11.2873 13.4633 12.5491L20.0055 19.0913L18.5913 20.5055L12.0491 13.9633ZM13 8C13 11.0376 10.5376 13.5 7.5 13.5C4.46243 13.5 2 11.0376 2 8C2 4.96243 4.46243 2.5 7.5 2.5C10.5376 2.5 13 4.96243 13 8Z"
          fill="#00395C"
          fillOpacity="0.8"
        />
      </svg>
    ),
    logo: (
      <svg width="171" height="97" viewBox="0 0 171 97" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="171" height="97" fill="white" />
        <path d="M58.0383 56.4663H66.9909V59.4015H62.7321V80.025H58.0383V56.4663Z" fill="#0079C1" />
        <path
          d="M72.2986 71.1808L73.103 59.4015H73.3724L74.1768 71.1808H72.2986ZM67.1006 80.025H71.6962L72.1311 73.7684H74.3443L74.7811 80.025H79.3748L76.9269 56.4663H69.5485L67.1006 80.025Z"
          fill="#0079C1"
        />
        <path
          d="M86.097 71.7795V76.2208C86.097 76.8195 86.5588 76.9933 86.8282 76.9933C87.2709 76.9933 87.5788 76.6264 87.5788 76.2208V70.7367C87.5788 70.0029 87.4441 69.1919 85.6928 69.1919H83.7876V66.6043H85.7698C87.0977 66.6043 87.5788 66.2953 87.5788 64.847V60.1739C87.5788 59.7684 87.2709 59.4015 86.8282 59.4015C86.5588 59.4015 86.097 59.556 86.097 60.1739V64.0167H81.4013V60.676C81.4013 59.0346 81.5937 56.4663 84.8845 56.4663H88.772C92.0628 56.4663 92.2745 59.0346 92.2745 60.676V64.4415C92.2745 67.0098 90.4847 67.705 89.0799 67.647V67.8788C92.236 67.8015 92.2745 70.2346 92.2745 71.065V75.8153C92.2745 77.476 92.0628 80.025 88.772 80.025H84.8845C81.5937 80.025 81.4013 77.476 81.4013 75.8153V71.7795H86.097Z"
          fill="#0079C1"
        />
        <path d="M95.3536 56.4663H106.227V80.025H101.531V59.4015H100.049V80.025H95.3536V56.4663Z" fill="#0079C1" />
        <path
          d="M114.002 69.4236V59.4015H114.617C115.118 59.4015 115.483 59.8263 115.483 60.5794V68.2457C115.483 68.9988 115.118 69.4236 114.617 69.4236H114.002ZM109.306 80.025H114.002V72.0112H116.696C119.967 72.0112 120.179 69.4622 120.179 67.8015V60.676C120.179 59.0346 119.967 56.4663 116.696 56.4663H109.306V80.025Z"
          fill="#0079C1"
        />
        <path
          d="M129.436 76.2208C129.436 76.6264 129.128 76.9933 128.685 76.9933C128.416 76.9933 127.954 76.8195 127.954 76.2208V60.1739C127.954 59.556 128.416 59.4015 128.685 59.4015C129.128 59.4015 129.436 59.7684 129.436 60.1739V76.2208ZM123.258 75.8153C123.258 77.476 123.47 80.025 126.742 80.025H130.648C133.92 80.025 134.131 77.476 134.131 75.8153V60.676C134.131 59.0346 133.92 56.4663 130.648 56.4663H126.742C123.47 56.4663 123.258 59.0346 123.258 60.676V75.8153Z"
          fill="#0079C1"
        />
        <path
          d="M149.412 56.4663H155.531V80.025H150.836V65.2525H150.663L148.238 80.025H144.485L142.079 65.2525H141.906V80.025H137.211V56.4663H143.311L146.371 73.0346L149.412 56.4663Z"
          fill="#0079C1"
        />
        <path
          d="M51.9532 24.2565C50.5156 17.942 46.913 12.8054 46.4165 11.9751C45.6313 13.153 42.7581 17.691 41.2974 22.7117C39.7021 28.331 39.4673 33.3131 40.0177 38.1986C40.5642 43.1034 42.6292 48.1435 42.6292 48.1435C43.7261 50.7697 45.3696 53.6083 46.4396 54.9986C48.008 52.9518 51.6125 46.8497 52.7364 38.8938C53.3619 34.4524 53.3888 30.571 51.9532 24.2565ZM46.4165 53.4152C45.7102 52.0828 44.6133 49.5531 44.5094 45.6138C44.4824 41.829 45.997 38.5655 46.4396 37.8896C46.8341 38.5655 48.1389 41.4041 48.2948 45.2855C48.4006 49.0704 47.1459 52.0635 46.4165 53.4152ZM51.5356 34.9738C51.4817 37.3876 51.1949 39.9365 50.8293 41.4621C50.9601 38.8359 50.6465 35.1476 50.046 32.251C49.4456 29.3738 47.7463 24.5462 46.3896 22.3255C45.1367 24.4496 43.5933 28.6206 42.785 32.2317C41.9729 35.8427 41.9498 40.2262 41.9498 41.5393C41.7343 40.4386 41.1954 36.48 41.3475 32.5213C41.4745 29.2579 42.2366 25.8786 42.6542 24.3337C44.2476 19.1779 46.0508 15.8758 46.3896 15.3544C46.7283 15.8758 48.9991 19.9503 50.1769 24.2179C51.3489 28.4855 51.5856 32.5793 51.5356 34.9738Z"
          fill="#0079C1"
        />
        <path
          d="M48.8548 56.4663H37.9258V63.8236C37.9354 63.8236 37.9431 63.8043 37.9527 63.8043C40.5276 61.2167 44.7037 61.2167 47.2806 63.8043C49.8555 66.3726 49.8555 70.5629 47.2806 73.1505C47.269 73.1698 47.2575 73.1698 47.2459 73.1891C47.2325 73.1891 47.219 73.2085 47.2074 73.2278C44.6383 75.7767 41.282 77.0512 37.9258 77.0512C34.5541 77.0512 31.1825 75.7767 28.6114 73.1891C24.0774 68.6512 23.5404 61.6029 26.9968 56.4663C27.4625 55.7712 27.9994 55.1146 28.6114 54.4967C31.1825 51.9091 34.5541 50.6346 37.9258 50.6346V32.9463C24.9703 32.9463 14.4685 43.4704 14.4685 56.4663C14.4685 69.4622 24.9703 80.0057 37.9258 80.0057C44.6806 80.0057 50.7658 77.1285 55.0458 72.5519V56.4663H48.8548Z"
          fill="#0079C1"
        />
      </svg>
    ),
  };

  return (
    <div className={styles.Home} style={{ color: primaryColor }}>
      <header className={styles.Home__header}>
        <div className={styles.header__buttons}>
          <button className={[styles.menuButton, styles.header__button].join(" ")}>
            {/* <img className={[styles.headerButtonIcon, styles.headerButtonIcon__burger].join(" ")} src={burgerMenu} alt="Меню" /> */}
            {svgs.burgerMenu}
          </button>
          <button className={[styles.findButton, styles.header__button].join(" ")}>
            {/* <img className={[styles.headerButtonIcon, styles.headerButtonIcon__magnifying].join(" ")} src={magnifyingGlass} alt="Поиск" /> */}
            {svgs.magnifyingGlass}
          </button>
        </div>
        <div className={styles.logoContainer}>
          {/* <img className={styles.logo} src={logo} alt="Газпром" /> */}
          {svgs.logo}
        </div>
      </header>
      <div className={styles.content}>
        <div className={styles.platformDescription}>
          <h1 className={styles.platformDescription__title}>Платформа для регистрации контрагентов</h1>
          <p className={styles.platformDescription__text}>
            О платформе. Зачем. Что дает. Какой функционал.
            <br />
            В настоящее время магистральный газопровод «Сила
            <br />
            Сибири» («восточный» маршрут) транспортирует
            <br />
            газ с Чаяндинского месторождения — базового для
            <br />
            Якутского центра газодобычи — российским
            <br />
            потребителям на Дальнем Востоке и в Китай.
          </p>
        </div>
        <div className={styles.platformEnter}>
          <button className={styles.platformEnter__button}>Вход на платформу</button>
          <div className={styles.beforeRegistion}>
            <div className={styles.beforeRegistration__head}>
              <div className={styles.iconContainer}>{svgs.doubleCheckmark}</div>
              <h2 className={styles.beforeRegistration__title}>
                Перед
                <br />
                регистрацией
              </h2>
            </div>
            <ul className={styles.beforeRegistration__infoLinks}>
              <li>
                <a className={styles.infoLink} href="./" style={{ color: primaryColor }}>
                  Необходимые документы
                </a>
              </li>
              <li>
                <a className={styles.infoLink} href="./" style={{ color: primaryColor }}>
                  Использование ЭЦП
                </a>
              </li>
              <li>
                <a className={styles.infoLink} href="./" style={{ color: primaryColor }}>
                  Данные компании и реквизиты
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.emptyFooter}></div>
    </div>
  );
};

export default Home;
