import React, { useState, useEffect } from 'react'
import { useStateContext } from '../context';
import { DisplayCampaigns } from '../components';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [campaigns, setCampaigns] = useState([])
  const { address, getCampaigns, contract } = useStateContext()

  const fetchCampaigns = async () => {
    setIsLoading(true)
    const data = await getCampaigns()
    console.log(data);
    const filteredData = data.filter(campaign => campaign.description != "Kushal Noobda hai")
    console.log(filteredData);
    setCampaigns(filteredData)
    setIsLoading(false)
  }

  useEffect(() => {
    if (contract) {
      fetchCampaigns()
    }
  }, [address, contract])

  return (
    <div>
      <DisplayCampaigns
        title="All Campaigns"
        isLoading={isLoading}
        campaigns={campaigns}

      />
    </div>
  )
}

export default Home;