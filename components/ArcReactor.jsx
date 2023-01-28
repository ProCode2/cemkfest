import React from "react";

const ArcReactor = ({ classNames }) => {
  return (
    <div className={`reactor-container ${classNames}`}>
      <div class="reactor-container-inner circle abs-center"></div>
      <div class="tunnel circle abs-center"></div>
      <div class="core-wrapper circle abs-center"></div>
      <div class="core-outer circle abs-center"></div>
      <div class="core-inner circle abs-center"></div>
      <div class="coil-container">
        <div class="coil coil-1"></div>
        <div class="coil coil-2"></div>
        <div class="coil coil-3"></div>
        <div class="coil coil-4"></div>
        <div class="coil coil-5"></div>
        <div class="coil coil-6"></div>
        <div class="coil coil-7"></div>
        <div class="coil coil-8"></div>
      </div>
    </div>
  );
};

export default ArcReactor;
