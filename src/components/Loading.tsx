const Loading = () => {
  return (
    <div className="p-5 bg-white w-auto mb-2 ml-4 flex justify-center">
      <p className="text-gray-700 font-bold flex items-center">
        <span className="material-symbols-outlined animate-spin mr-2">
          progress_activity
        </span>
        Loading...
      </p>
    </div>
  )
}

export default Loading;