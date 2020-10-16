import React, { useState, useEffect } from 'react'
import axios  from 'axios'
import CardsStructure from './components/CardsStructure';


const JobsApi = () => {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios ('https://vuejobs.com/api/jobs')
      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    }
    fetchItems();
  }, [])

  return (
    <div>
      <CardsStructure isLoading={isLoading} items={items} />
    </div>
  )
}

export default JobsApi
