const ModalHelp = ({ content }) => {
  return (
    <>
      <p style={{ color: "#519872", textDecorationLine: "underline" }}>
        {content}
      </p>
      <p>도움 요청이 완료되었습니다.</p>
    </>
  );
};
export default ModalHelp;
