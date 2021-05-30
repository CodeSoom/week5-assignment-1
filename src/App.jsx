export default function App() {
  const categories = ['한식', '중식', '일식', '양식', '분식'];
  const regions = ['서울', '대전', '대구', '부산', '광주', '강원도', '인천'];
  return (
    <>
      <ul>
        {categories.map((category, i) => (
          <li key={i}>
            {category}
          </li>
        ))}
      </ul>
      ,

      <ul>
        {regions.map((region, i) => (
          <li key={i}>
            {region}
          </li>
        ))}
      </ul>
    </>
  );
}
