import "./index04.css";
const CompletedPage = () => {
  return (
    <div className="container">
      <div className="action">
        <div className="trophy">
          <svg fill="#FFD600" width="100%" height="100%" viewBox="0 0 24 24">
            <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z" />
          </svg>
        </div>
        <div className="confetti" />
        <div className="confetti two" />
        <div className="confetti three" />
        <div className="confetti four" />
        <div className="confetti--purple" />
        <div className="confetti--purple two" />
        <div className="confetti--purple three" />
        <div className="confetti--purple four" />
      </div>
    </div>
  );
};

export default CompletedPage;
