"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({ id, title, body }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newBody, setNewBody] = useState(body);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newBody }),
      });

      if (res.ok) {
        router.refresh();
        router.push("/");
      } else {
        throw new Error ('Failed to update Post')
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={e => setNewTitle(e.target.value)}
        value={newTitle}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Posts Title"
      />

      <input
        onChange={e => setNewBody(e.target.value)}
        value={newBody}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Posts Body"
      />

      <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update Posts
      </button>
    </form>
  );
}