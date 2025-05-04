const ProjectPage = async ({ params }: { params: Promise<{ id: number }> }) => {
  const {id} = await params
  return (
    <section className="text-sm h-screen mt-24">{id} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias placeat dicta obcaecati aperiam saepe accusantium, asperiores unde culpa laboriosam corrupti tempore repellat provident praesentium maxime. Pariatur explicabo laborum dignissimos quam tenetur, quis quod rem sed nulla alias est eos voluptatum! Adipisci deleniti nisi eligendi commodi, delectus totam nihil nobis quis?</section>
  )
}

export default ProjectPage
