export const ChildArea = (props) => {
  const style = {
    width: "100%",
    height: "200px",
    backgroundColor: "khaki"
  };
  const { open } = props;
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
};
