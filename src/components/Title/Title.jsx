import TitleContainer from "./TitleStyled";

function Title(props) {
  return (
    <TitleContainer>
      <div className="title">
        <h3>
          {props.msg}
          <strong>{props.bold}</strong>
        </h3>
        <p>
          View All
          <i className="bi bi-chevron-right"></i>
        </p>
      </div>
    </TitleContainer>
  );
}

export default Title;
