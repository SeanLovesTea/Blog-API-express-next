import EditPostForm from "@/app/components/EditPost";

const getPostById = async (id) => {
  try {
    const res = await fetch(`http://localhost:5000/post/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch post");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function Editpost({ params }) {
  const { id } = params;
  const post = await getPostById(id)
  console.log(post)
  const { title, body, published} = post;

  return <EditPostForm id={id} title={title} body={body} published={published} />;
}