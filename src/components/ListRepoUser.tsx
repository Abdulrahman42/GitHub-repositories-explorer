import type { RepoType } from "../types";

const ListRepoUser = ({data}: {data: RepoType}) => {
  return (
    <div className="p-5 border border-b-0 border-gray-200 bg-gray-300 w-auto mb-2 ml-4 flex justify-between">
      <div className='text-left text-gray-700'>
        <h1 className='font-bold'>{data.name}</h1>
        <h3 className='font-semibold'>{data.description}</h3>
      </div>
      <div className='flex'>
        <p className='text-gray-700 font-bold'>{data.stargazers_count}</p> 
        <span className="material-symbols-rounded material-symbols-rounded-filled text-gray-700">star</span>
      </div>
    </div>
  )
}

export default ListRepoUser;