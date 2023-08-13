const News = () => {
  const embedCode = `
  <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7092203254154981376" height="795" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
  `;

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      <div className="aspect-w-16 aspect-h-9">
        <div dangerouslySetInnerHTML={{ __html: embedCode }} />
      </div>
    </div>
  );
};

export default News;
