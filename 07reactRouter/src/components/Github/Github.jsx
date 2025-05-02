import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
  const data = useLoaderData()
  //const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/hiteshchoudhary')
  //     .then(res => res.json())
  //     .then(data => {
  //       // console.log(data)
  //       setData(data)
  //     })
  // }, [])
  return (
    <div
      className='text-3xl text-amber-300 p-4 bg-amber-900 text-center'
    >Github Followers: {data?.followers ?? 'Loading...'}
      {data?.avatar_url ? (
        <img src={data.avatar_url} alt="image" width={300} />
      ) : (
        <p>Loading avatar...</p>
      )}

    </div>
  )
}

export default Github

//use seperate file is better

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/hiteshchoudhary');
  const data = await response.json();
  console.log(data); // Check if followers exist
  return data;
};