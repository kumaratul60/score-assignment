import Navbar from "../../components/Navbar";
import ReactPlayer from "react-player";

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://386gi5nn8f.execute-api.ap-south-1.amazonaws.com/default/youtube?class=10th&subject=Maths"
  );
  const data_loop = await res.json();

  const paths = data_loop.map((curElem) => {
    return {
      params: {
        dynamicData: curElem?.ID?.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.dynamicData;
  const res = await fetch(
    `https://386gi5nn8f.execute-api.ap-south-1.amazonaws.com/default/youtube?class=10th&subject=Maths/${id}`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const myData = ({ data }) => {
  const { ID, link, title, subject, description, tags } = data;
  return (
    <>
      <Navbar />
      <div className="ssr-styles ssr-styles-inside">
        <h3>{ID}</h3>
        <ReactPlayer controls url={link} width={"640px"} height={"360px"} />
        <h4>
          {title} | {subject}
        </h4>
        <p>{description}</p>
        <p>{tags}</p>
      </div>
    </>
  );
};

export default myData;
