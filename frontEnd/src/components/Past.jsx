import "../Styles/Home.css";

const Past = ({ url }) => {
  return (
    <>
      <div className="pastContainer">
        <div className="longUrlContainer">
          <span className="boginooLabel">Өгөгдсөн холбоос:</span>
          <span className="labelP">{url.url}</span>
        </div>
        <div className="shortUrlContainer">
          <span className="boginooLabel">Богино холбоос:</span>
          <div className="shortShort">
            <span className="labelP pos1">localhost:1000/{url.shortId}</span>
            <span className="copyThat pos2">Copy</span>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Past;
