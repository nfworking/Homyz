

export default function Downloads() {
  const downloads = [
    { name: "Windows", reason: "Check out the project on GitHub", url: "https://github.com/nfworking/realestate-v3" },
    { name: "Mac", reason: "Check out the project on GitHub", url: "https://github.com/nfworking/realestate-v3" },
  ]

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8  ">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {downloads.map((download) => (
          <div key={download.name} className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-100 group-hover:opacity-100 animate-tilt transition duration-1000 group-hover:duration-200"></div>
            <a
              href={download.url} download
              className="relative block bg-black rounded-lg p-6 hover:bg-gray-900 transition duration-200"
            >
              <div className="flex flex-col items-center text-white">
               
                <h2 className="text-2xl font-bold mb-2">{download.name}</h2>
                <p className="text-gray-400">In development</p>
                <p href={download.url} className="text-gray-400"> {download.reason}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}