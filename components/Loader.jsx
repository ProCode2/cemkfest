const Loader = ({ classProps }) => (
  <span className={classProps}>
    <span
      className={`animate-ping absolute inline-flex rounded-full bg-[#2952e3] opacity-75 ${classProps}`}
    ></span>
    <span
      className={`relative inline-flex rounded-full bg-[#2546bd] ${classProps}`}
    ></span>
  </span>
);

export default Loader;
