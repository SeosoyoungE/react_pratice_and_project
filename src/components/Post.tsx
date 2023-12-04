const names = ["soyoung", "nayoung"];
// 함수의 첫글자는 대문자로 작성
function Post() {
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];
  return (
    <div>
      <p>{chosenName}</p>
      <p>React.js is awesome!</p>
    </div>
  );
}

export default Post;
