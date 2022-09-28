import React from "react";
import styles from "./AuthentificatedHeader.module.scss";

interface AuthetificatedHeaderPros {
  toggleModalCallback?: { (): void };
}

export const AuthentificatedHeader = ({ toggleModalCallback }: AuthetificatedHeaderPros) => {
  const firstName = "Константин";
  const lastName = "Константинопольский";
  const contractorName = "ООО СтройМонтажЯмалПроект";

  const svgs = {
    gpLogo: (
      <svg width="90" height="45" viewBox="0 0 90 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M90.0001 28.8361V44H87.0591V34.49H86.9651L85.4471 44H83.1L81.5931 34.49H81.488V44H78.5601V28.8361H82.371L84.2711 39.486L86.1871 28.8361H90.0001Z"
          fill="#0079BE"
        />
        <path
          d="M76.634 31.543V41.283C76.634 42.349 76.508 44 74.457 44H72.04C69.977 44 69.8621 42.349 69.8621 41.283V31.543C69.8621 30.477 69.977 28.8361 72.04 28.8361H74.457C76.508 28.8361 76.634 30.477 76.634 31.543ZM73.7141 41.543V31.207C73.7167 31.1443 73.7068 31.0818 73.685 31.0229C73.6632 30.9641 73.6298 30.9102 73.5869 30.8645C73.5439 30.8188 73.4923 30.7821 73.4349 30.7566C73.3776 30.7311 73.3158 30.7172 73.2531 30.7159C73.1897 30.7149 73.1268 30.7272 73.0685 30.752C73.0101 30.7767 72.9576 30.8132 72.9142 30.8595C72.8709 30.9057 72.8378 30.9605 72.8169 31.0204C72.796 31.0802 72.7879 31.1439 72.7931 31.207V41.543C72.7879 41.6061 72.796 41.6698 72.8169 41.7296C72.8378 41.7895 72.8709 41.8443 72.9142 41.8905C72.9576 41.9368 73.0101 41.9733 73.0685 41.998C73.1268 42.0228 73.1897 42.0351 73.2531 42.0341C73.3157 42.0328 73.3774 42.019 73.4347 41.9935C73.4919 41.9681 73.5436 41.9315 73.5865 41.8859C73.6294 41.8402 73.6628 41.7865 73.6847 41.7278C73.7066 41.6691 73.7166 41.6065 73.7141 41.5439V41.543Z"
          fill="#0079BE"
        />
        <path
          d="M67.9371 31.543V36.131C67.9371 37.197 67.811 38.837 65.759 38.837H64.084V44H61.1541V28.8361H65.7541C67.8111 28.8361 67.9371 30.477 67.9371 31.543ZM64.9951 36.413V31.47C64.9951 30.999 64.775 30.717 64.451 30.717H64.084V37.165H64.451C64.775 37.165 64.9951 36.894 64.9951 36.413Z"
          fill="#0079BE"
        />
        <path d="M59.2281 28.8361V44H56.3V30.717H55.3791V44H52.4371V28.8361H59.2281Z" fill="#0079BE" />
        <path
          d="M50.519 38.231V41.283C50.519 42.349 50.3831 44 48.3311 44H45.9001C43.8481 44 43.7231 42.349 43.7231 41.283V38.691H46.6641V41.5439C46.6579 41.6073 46.6653 41.6713 46.6859 41.7316C46.7064 41.7918 46.7395 41.8471 46.783 41.8936C46.8265 41.94 46.8795 41.9766 46.9383 42.001C46.9971 42.0254 47.0605 42.037 47.1241 42.035C47.186 42.0326 47.2468 42.0179 47.303 41.9918C47.3593 41.9658 47.4097 41.9289 47.4517 41.8833C47.4936 41.8377 47.5261 41.7842 47.5472 41.726C47.5684 41.6677 47.5779 41.6058 47.5751 41.5439V38.012C47.5751 37.542 47.4911 37.019 46.4031 37.019H45.2101V35.3571H46.4451C47.2821 35.3571 47.5751 35.157 47.5751 34.228V31.208C47.5779 31.1461 47.5684 31.0842 47.5472 31.026C47.5261 30.9678 47.4936 30.9143 47.4517 30.8687C47.4097 30.823 47.3593 30.7862 47.303 30.7601C47.2468 30.7341 47.186 30.7195 47.1241 30.717C47.0605 30.715 46.9971 30.7266 46.9383 30.751C46.8795 30.7754 46.8265 30.8121 46.783 30.8585C46.7395 30.905 46.7064 30.9601 46.6859 31.0204C46.6653 31.0807 46.6579 31.1446 46.6641 31.208V33.6851H43.7231V31.543C43.7231 30.477 43.8481 28.8361 45.9001 28.8361H48.3281C50.3801 28.8361 50.5161 30.477 50.5161 31.543V33.967C50.5514 34.2407 50.5246 34.5188 50.4375 34.7806C50.3504 35.0425 50.2053 35.2813 50.013 35.4792C49.8207 35.6772 49.5863 35.8292 49.3271 35.9238C49.0679 36.0185 48.7906 36.0534 48.5161 36.026V36.173C48.7925 36.1369 49.0735 36.1658 49.3369 36.2573C49.6002 36.3489 49.8385 36.5005 50.033 36.7003C50.2274 36.9001 50.3726 37.1425 50.457 37.4082C50.5414 37.6739 50.5626 37.9556 50.519 38.231Z"
          fill="#0079BE"
        />
        <path
          d="M40.9421 28.8361L42.47 44H39.6L39.3281 39.9659H37.946L37.6741 44H34.8061L36.334 28.8361H40.9421ZM39.225 38.2939L38.725 30.717H38.5571L38.0571 38.2939H39.225Z"
          fill="#0079BE"
        />
        <path d="M34.735 28.8361V30.717H32.076V44H29.1451V28.8361H34.735Z" fill="#0079BE" />
        <path
          d="M27.2621 28.8311V39.2C25.5447 41.0405 23.3962 42.4248 21.0104 43.228C18.6246 44.0312 16.0763 44.2282 13.5955 43.801C11.1146 43.3738 8.77897 42.3359 6.79919 40.781C4.81942 39.2261 3.25767 37.203 2.25476 34.894C1.25185 32.585 0.839292 30.0628 1.05426 27.5546C1.26922 25.0464 2.10496 22.631 3.48614 20.5264C4.86732 18.4217 6.75057 16.6938 8.96606 15.4984C11.1816 14.303 13.6597 13.6778 16.1771 13.679V25.079C13.9172 25.0763 11.7488 25.9709 10.1481 27.566C9.76106 27.9545 9.41087 28.378 9.10205 28.8311C7.92251 30.587 7.43819 32.7187 7.74322 34.8119C8.04825 36.9051 9.12085 38.81 10.7524 40.1563C12.384 41.5025 14.458 42.194 16.571 42.0959C18.684 41.9979 20.6851 41.1175 22.1851 39.626C22.1961 39.616 22.2061 39.616 22.2061 39.606C22.2061 39.596 22.226 39.595 22.238 39.585C23.0377 38.784 23.4864 37.6982 23.4855 36.5664C23.4845 35.4346 23.034 34.3497 22.233 33.5501C21.4321 32.7504 20.3463 32.3017 19.2145 32.3026C18.0828 32.3036 16.9977 32.7541 16.1981 33.5551L16.1771 33.5761V28.8311H27.2621Z"
          fill="#0079BE"
        />
        <path
          d="M25.2621 8.09998C26.0639 11.1725 26.234 14.3758 25.7621 17.516C25.2373 21.2468 23.8424 24.8019 21.6901 27.894C20.7004 26.5197 19.8716 25.0363 19.22 23.473C18.3996 21.4163 17.8338 19.267 17.535 17.073C17.417 16.0706 17.3576 15.0623 17.3571 14.053C17.3596 11.7003 17.6981 9.36007 18.3621 7.10303C19.1353 4.65367 20.2485 2.32499 21.6691 0.185059C23.3118 2.59781 24.5272 5.27511 25.2621 8.09998ZM24.9901 15C25.0169 12.6576 24.7212 10.3227 24.1111 8.06104C23.5249 6.06797 22.7027 4.15203 21.662 2.354C20.6409 4.18694 19.8298 6.12926 19.2441 8.14404C18.7787 9.86571 18.4945 11.6312 18.3961 13.412C18.3328 15.3534 18.4628 17.2963 18.7841 19.212C18.7651 17.2026 18.9471 15.1963 19.3271 13.223C19.8154 10.9996 20.6008 8.85195 21.662 6.83801C23.7145 10.6105 24.7053 14.869 24.5291 19.16C24.8139 17.7911 24.9683 16.3981 24.9901 15ZM21.6721 26.8719C22.5221 25.2567 22.9438 23.4506 22.897 21.626C22.8477 19.9726 22.4382 18.3498 21.6971 16.871C20.8719 18.3989 20.4402 20.1084 20.441 21.845C20.4546 23.5949 20.8761 25.3175 21.6721 26.876V26.8719Z"
          fill="#0079BE"
        />
      </svg>
    ),
    avatarDefault: (
      <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16.3923" r="16" fill="#A6C1D5" />
        <g clipPath="url(#clip0_249_34793)">
          <path
            d="M16 16.9638C19.0682 16.9638 21 13.6536 21 10.678C21 7.70247 20.6296 4.39233 16 4.39233C11.3704 4.39233 11 7.70247 11 10.678C11 13.6536 12.9318 16.9638 16 16.9638Z"
            fill="#215575"
          />
          <path d="M14.8889 19.2495C8.77778 19.2495 6 21.596 6 28.3923L26 28.3923C26 20.7733 22.1111 19.2495 17.1111 19.2495H14.8889Z" fill="#215575" />
        </g>
        <defs>
          <clipPath id="clip0_249_34793">
            <rect x="4" y="4.39233" width="24" height="24" rx="12" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    logout: (
      <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.5195 16.1111L0.519531 16.1111L0.519531 0.111084L13.5195 0.111084V5.11108L11.5195 5.11108V2.11108H2.51953V14.1111L11.5195 14.1111V11.1111H13.5195V16.1111Z"
          fill="#00395C"
          fillOpacity="0.8"
        />
        <path
          d="M15.5195 12.1111L19.5195 8.11108L15.5195 4.11108L15.5195 7.11108L6.51953 7.11108L6.51953 9.11108L15.5195 9.11108V12.1111Z"
          fill="#00395C"
          fillOpacity="0.8"
        />
      </svg>
    ),
    helpIcon: (
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.85937 0.404089C1.79531 0.570105 0.899993 1.34159 0.524993 2.40604L0.39843 2.77225L0.384368 6.55155C0.370305 10.2478 0.374993 10.3357 0.468743 10.6971C0.618743 11.2635 0.815618 11.6101 1.24218 12.0496C1.80937 12.6404 2.49374 12.948 3.24374 12.9529H3.51093L3.52499 14.1101C3.53906 15.2674 3.53906 15.2723 3.66562 15.492C3.93749 15.9705 4.32187 16.2 4.85156 16.1951C5.37656 16.1902 5.45624 16.1316 6.99843 14.5252C7.75312 13.7439 8.38593 13.0994 8.39999 13.0994C8.41874 13.0994 8.44218 14.4764 8.44687 16.1609C8.46093 19.1883 8.46562 19.2322 8.56406 19.5105C8.91093 20.4627 9.61406 21.1609 10.5469 21.4783C10.7766 21.5564 11.0437 21.5662 13.1484 21.5857L15.4922 21.6004L16.9453 23.1092C18.5672 24.7937 18.6234 24.8377 19.1719 24.8328C19.6922 24.8328 20.1187 24.5642 20.3437 24.1004C20.4562 23.8758 20.4609 23.8269 20.475 22.7332L20.4891 21.5955H20.6953C21.0844 21.5955 21.6234 21.4539 22.0312 21.2488C22.5609 20.9754 23.0578 20.4627 23.3062 19.9353C23.6297 19.2517 23.625 19.3396 23.625 15.2918C23.625 11.8103 23.6203 11.6346 23.5312 11.2683C23.2547 10.1404 22.3406 9.26639 21.2156 9.05155C21.0375 9.01737 19.9781 8.99784 18.2484 8.99784H15.5625V6.00467C15.5625 2.73807 15.5578 2.70878 15.2859 2.10331C14.9344 1.33182 14.2453 0.726355 13.425 0.472448C13.1672 0.389441 12.8016 0.384558 8.13281 0.374792C5.37656 0.369909 2.99999 0.384558 2.85937 0.404089ZM13.3125 1.65897C13.6922 1.8201 14.0719 2.19608 14.2594 2.59159L14.4141 2.91874V6.65409V10.3894L14.2687 10.7068C14.0859 11.1072 13.7953 11.4099 13.4062 11.6053L13.1016 11.7566L10.6172 11.781C9.08437 11.7957 8.10468 11.825 8.05781 11.8543C8.01562 11.8787 7.28906 12.6062 6.44999 13.4656C5.60624 14.325 4.87968 15.033 4.82812 15.0428C4.78124 15.0525 4.71093 15.0086 4.66874 14.9451C4.60312 14.8523 4.59374 14.6473 4.59374 13.5242C4.59374 11.7517 4.63593 11.825 3.53906 11.781C2.87812 11.7566 2.81718 11.7469 2.53124 11.6053C2.16093 11.4246 1.82812 11.0828 1.64999 10.7117L1.52343 10.4383V6.6785V2.91874L1.64999 2.64042C1.88906 2.10819 2.38593 1.68827 2.90624 1.58085C3.02343 1.55643 5.35312 1.54178 8.08593 1.54178L13.0547 1.55155L13.3125 1.65897ZM21.1641 10.2381C21.2953 10.2723 21.4687 10.3406 21.5578 10.3894C21.825 10.531 22.1719 10.907 22.3312 11.2195L22.4766 11.5125V15.2723V19.032L22.35 19.3103C22.2047 19.6375 21.9 19.9939 21.6234 20.1648C21.3094 20.3553 20.9859 20.4236 20.3766 20.4236C19.7859 20.4236 19.6172 20.4725 19.4812 20.6775C19.4156 20.7703 19.4062 20.99 19.4062 22.0935C19.4062 22.8064 19.3875 23.451 19.3641 23.5144C19.3125 23.6512 19.1953 23.7146 19.0969 23.656C19.0594 23.6365 18.3937 22.9578 17.6156 22.157C16.8328 21.3514 16.1344 20.6385 16.0641 20.5701L15.9281 20.448L13.4391 20.4236C10.9641 20.3992 10.9453 20.3992 10.6781 20.2869C10.3219 20.1355 9.92343 19.7547 9.73593 19.3787L9.58593 19.0808L9.57187 16.0193L9.55781 12.9578L11.4 12.9432C13.1859 12.9285 13.2516 12.9236 13.5469 12.8113C14.0297 12.6355 14.3391 12.4256 14.7234 12.0301C15.1359 11.5955 15.3797 11.1316 15.5016 10.5408L15.5812 10.1697H18.2531C20.3344 10.1697 20.9812 10.1844 21.1641 10.2381Z"
          fill="#215575"
          fillOpacity="0.8"
        />
        <path
          d="M7.49999 3.48517C6.73124 3.58771 6.05156 4.25665 6.16406 4.79864C6.20624 5.00372 6.43593 5.18927 6.65156 5.18927C6.84843 5.18927 6.91406 5.14532 7.10624 4.87677C7.27499 4.63263 7.54218 4.50568 7.87499 4.50568C8.74218 4.50568 8.94374 5.27716 8.23593 5.87775C7.79531 6.25372 7.58906 6.47833 7.47187 6.71759C7.26093 7.14239 7.24218 7.94318 7.43437 8.09454C7.48593 8.13849 7.63124 8.1629 7.79531 8.16779C8.02031 8.16779 8.08593 8.14825 8.17968 8.04572C8.27812 7.94806 8.29687 7.8797 8.29687 7.65509C8.29687 7.23517 8.39062 7.07404 8.95312 6.50763C9.37499 6.08771 9.49218 5.93634 9.61406 5.6629C10.0828 4.61798 9.49218 3.66583 8.25937 3.48029C7.90781 3.42657 7.92187 3.42657 7.49999 3.48517Z"
          fill="#215575"
          fillOpacity="0.8"
        />
        <path
          d="M7.49531 8.72927C7.3125 8.83181 7.21875 9.01736 7.21875 9.26638C7.21875 9.44705 7.24687 9.52029 7.37344 9.65701C7.66875 9.99392 8.12812 9.9158 8.30625 9.50076C8.38594 9.30544 8.39062 9.2615 8.33437 9.08083C8.22656 8.71951 7.81406 8.54861 7.49531 8.72927Z"
          fill="#215575"
          fillOpacity="0.8"
        />
        <path
          d="M12.3469 14.4666C12.0094 14.5496 11.7188 14.9305 11.7188 15.2967C11.7188 15.3895 11.7609 15.5555 11.8172 15.6727C12.1922 16.4832 13.3594 16.2 13.3594 15.3016C13.3594 14.7303 12.8766 14.3348 12.3469 14.4666Z"
          fill="#215575"
          fillOpacity="0.8"
        />
        <path
          d="M15.8672 14.4617C15.6609 14.5154 15.539 14.5935 15.4031 14.7595C15 15.2625 15.2625 15.99 15.9047 16.1463C16.2515 16.2293 16.7203 15.9021 16.8234 15.5017C16.9781 14.9158 16.425 14.3201 15.8672 14.4617Z"
          fill="#215575"
          fillOpacity="0.8"
        />
        <path
          d="M19.2516 14.4861C18.6516 14.7156 18.5016 15.5262 18.9797 15.9461C19.7109 16.5857 20.7141 15.6433 20.1891 14.8133C19.9922 14.5056 19.5797 14.364 19.2516 14.4861Z"
          fill="#215575"
          fillOpacity="0.8"
        />
      </svg>
    ),
  };

  return (
    <div className={styles.AuthentificatedHeader}>
      <div className={styles.left}>
        <div className={styles.logo}>{svgs.gpLogo}</div>
        <h2 className={styles.contractorName}>{contractorName}</h2>
      </div>
      <div className={styles.right}>
        <button
          className={styles.helpButton}
          onClick={(e) => {
            if (toggleModalCallback) toggleModalCallback();
          }}
        >
          {svgs.helpIcon}
          <span className={styles.helpButton__text}>Помощь</span>
        </button>
        <div className={styles.user}>
          <div className={styles.avatarContainer}>{svgs.avatarDefault}</div>
          <p className={styles.fio}>
            {lastName}
            <br />
            {firstName}
          </p>
        </div>
        <button className={styles.logout}>{svgs.logout}</button>
      </div>
    </div>
  );
};

export default AuthentificatedHeader;
