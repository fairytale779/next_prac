export default function List() {
  let grocery = ["Tomato", "Potato", "Orange"];
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {grocery.map((a, i) => {
        return (
          <div className="food" key={i}>
            <img src={"food" + i + ".png"} className="food-img" width={50} />
            {a} $40
          </div>
        );
      })}
    </div>
  );
}
