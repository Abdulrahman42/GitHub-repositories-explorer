import { useState } from 'react'

import './App.css'
import ListUser from './components/ListUser';
import { useGitHub } from './context/GithubContext';

function App() {
  const [query, setQuery] = useState<string>('')
  const [value, setValue] = useState<string>('')
  const { users, listRepoByUser, searchUsers } = useGitHub();

  return (
    <>
     <div className='grid grid-cols-12 gap-4'>
      <div className='col-span-12 bg-white h-screen p-4 flex flex-col overflow-y-auto'>
        <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" placeholder='Enter username' className='bg-gray-200 p-2 w-full focus:outline-0 text-gray-600 placeholder-gray-400 rounded border-gray-300 border-2' />
        <button onClick={() => (searchUsers(query), setValue(query))} className='bg-blue-400 rounded py-2 mt-4 h-12 cursor-pointer'>Search</button>
        {(users.length > 0 && listRepoByUser.length == 0) && <p className='text-gray-500 mt-4 text-left font-semibold'>Showing users for "{value}"</p>}
        <ListUser/>
      </div>
     </div>
    </>
  )
}

export default App
