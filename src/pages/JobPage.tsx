import { useParams } from 'react-router-dom';

const JobPage = () => {
  const { id } = useParams();

  return <div>{id}</div>;
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`http://localhost:8000/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

export { JobPage as default, jobLoader };
