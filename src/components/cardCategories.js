import React from "react";

export default function CardComponent() {
    const posts = [
        {
            title: "Accompagnement",
            img: "Accompagnement.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "Repas",
            img: "Repas.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "Taches menageres",
            img: "Menage.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "Repas",
            img: "Repas.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "Taches menageres",
            img: "Menage.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },


    ];
    return (
        <>
            <div className="grid gap-2 lg:grid-cols-4">
                {posts.map((items, key) => (
                    <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={key}>
                        <img
                            className="object-cover  h-48"
                            src={items.img}
                            alt="image"
                        />
                        <div className="p-4">
                            <h4 className="text-xl font-semibold text-blue-600">
                                
                                {items.title}
                            </h4>
                            <p className="mb-2 leading-normal">
                            {items.content}
                            </p>
                            <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                                Read more
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}