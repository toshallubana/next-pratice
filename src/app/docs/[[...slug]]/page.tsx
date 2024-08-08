// catch all segment scenario


const Docs = ({ params }: { params: { slug: string[] } }) => {
  if (params.slug?.length === 2) {
    return (
      <h1>
        viewing docs feature {params.slug[0]} and also viewing docs concept{" "}
        {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1>viewing docs feature {params.slug[0]}</h1>;
  }

  return <h1>Docs</h1>;
};
export default Docs;
