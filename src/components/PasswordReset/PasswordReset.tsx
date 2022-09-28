import React from "react";
import Header from "../Header/Header";
import styles from "./PasswordReset.module.scss";

const PasswordReset = () => {
  const svgs = {
    gazprom: (
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
    aLogo: (
      <svg width="40" height="42" viewBox="0 0 40 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M24.4606 24.0397V22.5132C24.4606 21.9171 24.4534 21.2045 24.439 20.3756C23.467 20.4297 22.4985 20.5359 21.5378 20.6938C20.4426 20.8504 19.3675 21.1245 18.3311 21.5116C17.7042 21.767 17.1282 22.1325 16.6303 22.5911C16.3573 22.8227 16.1392 23.1122 15.992 23.4386C15.8448 23.765 15.772 24.1201 15.7791 24.4781C15.7435 25.2011 15.9767 25.9118 16.4338 26.4732C16.9098 27.001 17.5207 27.3894 18.2007 27.5965C18.8865 27.8268 19.5907 27.9983 20.3056 28.1096C21.0238 28.2181 21.7494 28.2713 22.4758 28.2687C22.7372 28.2687 23.0861 28.2652 23.5226 28.2583C23.9594 28.2512 24.264 28.24 24.439 28.2257C24.439 27.9934 24.4428 27.51 24.4502 26.7755C24.4576 26.041 24.4611 25.1291 24.4606 24.0397ZM27.3499 30.2598C26.0846 30.5268 24.7943 30.6572 23.5012 30.6489C22.1293 30.6395 20.7594 30.5412 19.4002 30.3545C18.2084 30.2371 17.0401 29.9468 15.9318 29.493C14.9912 29.0572 14.1602 28.4163 13.4999 27.6172C12.8287 26.7158 12.48 25.6149 12.5097 24.4915C12.5394 23.368 12.9459 22.2871 13.6638 21.4224C14.5123 20.5256 15.5471 19.8259 16.6955 19.3725C17.9402 18.8632 19.2453 18.5156 20.5785 18.3383C22.0327 18.1261 23.3195 17.9771 24.439 17.8912C24.4057 17.093 24.1527 16.3195 23.708 15.6558C23.2587 15.0542 22.6507 14.5895 21.9523 14.3138C21.3879 14.0747 20.7934 13.9142 20.1855 13.8365C19.404 13.741 18.6171 13.6973 17.8299 13.706C17.3208 13.706 16.8435 13.7203 16.398 13.7489C15.9541 13.7783 15.8093 13.7895 15.1251 13.8181C15.1251 13.8181 13.8674 14.0242 13.8189 12.5015C13.7783 11.2033 15.1713 11.0951 15.1713 11.0951C15.3305 11.0808 15.5531 11.0704 16.1561 11.0331C16.7591 10.9957 17.5411 10.979 18.5013 10.979C19.8318 10.9571 21.1593 11.1111 22.4495 11.4371C23.5098 11.7109 24.4894 12.2344 25.3062 12.9638C26.0729 13.6632 26.6442 14.5501 26.9641 15.5373C27.3514 16.8462 27.528 18.2084 27.4875 19.5729C27.4923 21.0947 27.3499 30.2598 27.3499 30.2598Z"
          fill="#0079BE"
        />
        <path
          d="M39.888 20.7924C39.888 21.1827 39.7329 21.5571 39.4569 21.8331C39.1809 22.1091 38.8066 22.2641 38.4163 22.2641C38.026 22.2641 37.6516 22.1091 37.3756 21.8331C37.0996 21.5571 36.9446 21.1827 36.9446 20.7924C36.9341 16.3032 35.145 12.0011 31.969 8.82834C28.7931 5.65556 24.4893 3.8707 20.0001 3.86461H19.9205C19.5302 3.86461 19.1558 3.70954 18.8798 3.43355C18.6038 3.15755 18.4489 2.78325 18.4489 2.39293C18.4489 2.00261 18.6038 1.62821 18.8798 1.35221C19.1558 1.07621 19.5302 0.921143 19.9205 0.921143H20.0001C25.2689 0.928283 30.3202 3.02312 34.0478 6.74681C37.7753 10.4705 39.8754 15.5196 39.888 20.7884V20.7924Z"
          fill="#009145"
        />
        <path
          d="M21.4901 39.2286C21.4923 39.4208 21.4564 39.6115 21.3844 39.7898C21.3125 39.968 21.2059 40.1302 21.071 40.2671C20.936 40.4039 20.7752 40.5127 20.5979 40.587C20.4207 40.6614 20.2304 40.6999 20.0382 40.7003H20.0247C14.7596 40.6963 9.71007 38.6089 5.97906 34.894C2.24805 31.1791 0.138815 26.1386 0.112123 20.8736V20.8689C0.111595 20.4785 0.266108 20.1039 0.541733 19.8276C0.817358 19.5512 1.19155 19.3957 1.58187 19.3951C1.97219 19.3946 2.3467 19.5492 2.62307 19.8249C2.89944 20.1005 3.05497 20.4746 3.0555 20.8649C3.07713 25.3474 4.87093 29.6394 8.04544 32.8042C11.2199 35.9691 15.5175 37.7497 20 37.7577C20.3921 37.757 20.7686 37.9112 21.0476 38.1866C21.3267 38.462 21.4857 38.8365 21.4901 39.2286Z"
          fill="#F59E2A"
        />
        <path
          d="M24.4803 41.413C24.4803 41.296 24.509 41.242 24.6395 41.0996L26.6211 39.0225C27.4787 38.1195 27.7038 37.7552 27.7038 37.2246C27.7023 37.0615 27.6678 36.9004 27.6023 36.7511C27.5368 36.6017 27.4417 36.4672 27.3227 36.3557C27.2037 36.2441 27.0634 36.1578 26.9101 36.1021C26.7568 36.0464 26.5938 36.0223 26.431 36.0313C26.0979 36.0184 25.7715 36.1264 25.5118 36.3354C25.2522 36.5443 25.0768 36.8401 25.0181 37.1682C25.0049 37.2318 24.9686 37.2884 24.9163 37.3269C24.8639 37.3655 24.7991 37.3834 24.7344 37.3772C24.6696 37.371 24.6095 37.3412 24.5654 37.2933C24.5213 37.2455 24.4964 37.1831 24.4955 37.1181C24.4958 37.0677 24.5 37.0173 24.5082 36.9676C24.5986 36.5366 24.8427 36.1532 25.1948 35.8888C25.5469 35.6243 25.9831 35.4968 26.4222 35.5301C26.6549 35.5108 26.8891 35.5395 27.1103 35.6143C27.3314 35.6891 27.5349 35.8085 27.7082 35.9651C27.8814 36.1217 28.0206 36.3121 28.1173 36.5246C28.2139 36.7372 28.266 36.9673 28.2702 37.2008C28.2702 37.8491 27.9647 38.3463 26.9489 39.3995L25.2855 41.1346V41.1513H28.1986C28.2333 41.1493 28.268 41.1545 28.3006 41.1664C28.3332 41.1784 28.3631 41.1968 28.3883 41.2207C28.4135 41.2446 28.4337 41.2733 28.4474 41.3052C28.4612 41.3371 28.4682 41.3716 28.4682 41.4063C28.4682 41.441 28.4612 41.4754 28.4474 41.5073C28.4337 41.5392 28.4135 41.5679 28.3883 41.5918C28.3631 41.6156 28.3332 41.6341 28.3006 41.646C28.268 41.658 28.2333 41.6631 28.1986 41.6612H24.7589C24.5926 41.6556 24.4803 41.5633 24.4803 41.413Z"
          fill="#868686"
        />
        <path
          d="M28.7905 41.3048C28.7905 41.2011 28.8316 41.1016 28.905 41.0283C28.9783 40.955 29.0777 40.9138 29.1814 40.9138C29.2851 40.9138 29.3846 40.955 29.4579 41.0283C29.5312 41.1016 29.5724 41.2011 29.5724 41.3048C29.5724 41.4085 29.5312 41.5079 29.4579 41.5812C29.3846 41.6546 29.2851 41.6957 29.1814 41.6957C29.0777 41.6957 28.9783 41.6546 28.905 41.5812C28.8316 41.5079 28.7905 41.4085 28.7905 41.3048Z"
          fill="#868686"
        />
        <path
          d="M29.4921 38.6375C29.4921 36.7441 30.3155 35.5278 31.6782 35.5278C33.041 35.5278 33.8603 36.7394 33.8603 38.6304C33.8603 40.5396 33.0489 41.7487 31.6782 41.7487C30.3076 41.7487 29.4921 40.5435 29.4921 38.6375ZM33.2875 38.6375C33.2875 37.0536 32.6893 36.033 31.6782 36.033C30.6671 36.033 30.0689 37.0615 30.0689 38.6335C30.0689 40.2348 30.6584 41.25 31.6782 41.25C32.6981 41.25 33.2851 40.2349 33.2851 38.6375H33.2875Z"
          fill="#868686"
        />
      </svg>
    ),
  };

  return (
    <div className={styles.PasswordReset}>
      <Header></Header>
      <div className={styles.content}>
        <div className={styles.resetBlock}>
          <div className={styles.resetHead}>
            {svgs.gazprom}
            {svgs.aLogo}
          </div>
          <div className={styles.resetInputs}>
            <input className={styles.resetInput} type="text" placeholder="Почта"/>
            <input className={styles.resetInput} type="password" placeholder="Пароль"/>
          </div>
          <div className={styles.resetButtons}>
            <button className={[styles.resetButton, styles.resetButton__reset].join(" ")}>Сменить пароль</button>
            <button className={[styles.resetButton, styles.resetButton__cancel].join(" ")}>Отмена</button>
          </div>
        </div>
      </div>
      <div className={styles.emptyFooter}></div>
    </div>
  );
};

export default PasswordReset;