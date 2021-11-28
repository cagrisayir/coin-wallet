import React, { FunctionComponent } from "react";

interface Props {
  coinName: string;
  coinPrice: number;
}

const FameCoin: FunctionComponent<Props> = ({
  coinName = "Bitcoin",
  coinPrice = 57790,
}) => {
  return (
    <div className="flex border-b border-gray-200 w-full py-4 justify-between items-center">
      <div className="flex gap-4 items-center">
        <div className="rounded-2xl p-2 bg-gray-200">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="btc"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className="w-8 h-8"
          >
            <path
              fill="currentColor"
              d="M310.204 242.638c27.73-14.18 45.377-39.39 41.28-81.3-5.358-57.351-52.458-76.573-114.85-81.929V0h-48.528v77.203c-12.605 0-25.525.315-38.444.63V0h-48.528v79.409c-17.842.539-38.622.276-97.37 0v51.678c38.314-.678 58.417-3.14 63.023 21.427v217.429c-2.925 19.492-18.524 16.685-53.255 16.071L3.765 443.68c88.481 0 97.37.315 97.37.315V512h48.528v-67.06c13.234.315 26.154.315 38.444.315V512h48.528v-68.005c81.299-4.412 135.647-24.894 142.895-101.467 5.671-61.446-23.32-88.862-69.326-99.89zM150.608 134.553c27.415 0 113.126-8.507 113.126 48.528 0 54.515-85.71 48.212-113.126 48.212v-96.74zm0 251.776V279.821c32.772 0 133.127-9.138 133.127 53.255-.001 60.186-100.355 53.253-133.127 53.253z"
            ></path>
          </svg>
        </div>
        <p className="text-astronaut-900 font-semibold font-display">
          {coinName}
        </p>
      </div>

      <div>
        <p className="text-astronaut-900 font-semibold whitespace-nowrap font-display">
          $ {coinPrice}
        </p>
      </div>
    </div>
  );
};

export default FameCoin;
