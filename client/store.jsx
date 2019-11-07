import React, { useState, createContext } from 'react';

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
  const [Store, setStore] = useState({
    user: '',
    verified: true,
    userFavs: [],
    linkedInRes: [],
    indeedRes: [ {
      jobTitle: 'Full Stack Engineer',
      company: 'Tradelogic Corporation',
      location: 'Austin, TX',
      snippet: 'a <b>Java</b> Developer to join our team. This position will be responsible for design and development of <b>Java</b>... <b>Java</b> or C# Frameworks/Skills: <b>Java</b> EE, <b>Java</b> Swing or... ',
      postDate: '1 Day ago',
      jobID: '83400e947276d20b',
      url: 'http://www.indeed.com/viewjob?jk=83400e947276d20b&qd=VurSLpjL_C5x-OsC8F-9NGcYiUmqnprrq2MtIyXogmRpzcw_E7jGkHBk-CGbv6Dm_Xi5BXyNYBQGtr4UYaav2xGUWcVBinyLZAVK0SVVur0&indpubnum=1757981803167718&atk=1806r4s2v0mph2o9'
    },
    {
      jobTitle: 'Full Stack Engineer',
      company: 'Google Corp.',
      location: 'Los Angeles, CA',
      snippet: `a <b>Java</b> Developer to join our team. This position will be responsible for design and development of <b>Java</b>... <b>Java</b> or C# Frameworks/Skills: <b>Java</b> EE, <b>Java</b> Swing or... `,
      postDate: '1 Day ago',
      jobID: '83400e947276d20c',
      url: 'http://www.indeed.com/viewjob?jk=83400e947276d20b&qd=VurSLpjL_C5x-OsC8F-9NGcYiUmqnprrq2MtIyXogmRpzcw_E7jGkHBk-CGbv6Dm_Xi5BXyNYBQGtr4UYaav2xGUWcVBinyLZAVK0SVVur0&indpubnum=1757981803167718&atk=1806r4s2v0mph2o9'
    },
    {
      jobTitle: 'Front-End Engineer',
      company: 'Netflix',
      location: 'Los Angeles, CA',
      snippet: `a <b>Java</b> Developer to join our team. This position will be responsible for design and development of <b>Java</b>... <b>Java</b> or C# Frameworks/Skills: <b>Java</b> EE, <b>Java</b> Swing or... `,
      postDate: '1 Day ago',
      jobID: '83400e947276d20d',
      url:'http://www.indeed.com/viewjob?jk=83400e947276d20b&qd=VurSLpjL_C5x-OsC8F-9NGcYiUmqnprrq2MtIyXogmRpzcw_E7jGkHBk-CGbv6Dm_Xi5BXyNYBQGtr4UYaav2xGUWcVBinyLZAVK0SVVur0&indpubnum=1757981803167718&atk=1806r4s2v0mph2o9'
    }
  ],
    glassDoorRes: [],
    linkUpRes: [],
    keywordSearch: '',
    locationSearch: '',
    radius: '',
    job_ID: null,
    fetched: true
  })

  return (
    <StoreContext.Provider value={[Store, setStore]}>
      {props.children}
    </StoreContext.Provider>
  )
}