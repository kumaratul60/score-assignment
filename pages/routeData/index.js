import Navbar from "../../components/Navbar";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://386gi5nn8f.execute-api.ap-south-1.amazonaws.com/default/youtube?class=10th&subject=Maths"
  );
  const data = await res.json();
  console.log(data);

  return {
    props: {
      data,
    },
  };
};

const video = ({ data }) => {
  return (
    <>
      <Navbar />
      {data.map((curElem) => {
        return (
          <div key={curElem.id} className="ssr-styles">
            <h3>{curElem.ID}</h3>
            <Link href={`/default/youtube/${curElem.ID}`}>
              <h2>{curElem.title}</h2>
            </Link>
            <hr></hr>
            <h4>{curElem.subject}</h4>
          </div>
        );
      })}
    </>
  );
};

export default video;
