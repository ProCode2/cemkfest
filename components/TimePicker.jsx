import React from "react";

const TimePicker = () => {
  return (
    <div className="flex justify-center">
      <div
        className="timepicker relative form-floating mb-3 xl:w-96"
        data-mdb-with-icon="false"
        id="input-toggle-timepicker"
      >
        <input
          type="text"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Select a date"
          data-mdb-toggle="input-toggle-timepicker"
        />
        <label for="floatingInput" className="text-gray-700">
          Select a time
        </label>
      </div>
    </div>
  );
};

export default TimePicker;
