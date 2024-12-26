import Image from "next/image"

export function DocumentGrid() {
  const documents = [
    {
      id: 1,
      title: "Medical Physiol...F Room",
      thumbnail: "/placeholder.svg?height=400&width=300",
      type: "book"
    },
    {
      id: 2,
      title: "Notes on 29/11/24",
      thumbnail: "/placeholder.svg?height=400&width=300",
      type: "sketch"
    },
    {
      id: 3,
      title: "Untitled",
      thumbnail: "/placeholder.svg?height=400&width=300",
      type: "notebook"
    },
    {
      id: 4,
      title: "Karthikeya_resume",
      thumbnail: "/placeholder.svg?height=400&width=300",
      type: "document"
    }
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {documents.map((doc) => (
        <div key={doc.id} className="group cursor-pointer">
          <div className="relative aspect-[3/4] mb-2">
            <Image
              src={doc.thumbnail}
              alt={doc.title}
              fill
              className="rounded-lg object-cover"
            />
            <button className="absolute top-2 right-2 w-8 h-8 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="block w-2 h-2 bg-white rounded-full mx-auto" />
            </button>
          </div>
          <h3 className="text-sm text-center text-gray-300">{doc.title}</h3>
        </div>
      ))}
    </div>
  )
}

