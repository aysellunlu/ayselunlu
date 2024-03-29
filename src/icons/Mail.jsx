const Mail = ({ width = "40", height = "40" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M48 64C21.5 64 0 85.5 0 112C0 127.1 7.1 141.3 19.2 150.4L236.8 313.6C248.2 322.1 263.8 322.1 275.2 313.6L492.8 150.4C504.9 141.3 512 127.1 512 112C512 85.5 490.5 64 464 64H48ZM0 176V384C0 419.3 28.7 448 64 448H448C483.3 448 512 419.3 512 384V176L294.4 339.2C271.6 356.3 240.4 356.3 217.6 339.2L0 176Z"
        fill="#EF246D"
      />
    </svg>
  );
};

export default Mail;
