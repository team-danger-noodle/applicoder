import React, { useState, createContext } from 'react';

export const StoreContext = createContext(null);

export const StoreContextProvider = props => {
  const [Store, setStore] = useState({
    user: '',
    verified: true, //will need to set to false when launching
    userFavs: [],
    codesmithRes: [
      {
        jobTitle: "Schno's Squire",
        company: 'Codesmith',
        location: 'Venice, CA',
        snippet: `
          <ul>
            <li>Carrying Schno's armour, shield and sword</li>
            <li>Guarding prisoners</li>
            <li>Ensuring an honourable burial for Schno</li>
            <li>Replacing an injured or killed horse</li>
            <li>Dressing Schno in armour</li>
            <li>Carrying Schno's flag</li>
            <li>Protecting Schno</li>
            <li>Taking care of the horses</li>
            <li>Accompanying Schno to tournaments and the battlefield</li>
            <li>Maintaining Schno's equipment</li>
            <li>Scrubbing armour</li>
          </ul>
          `,
        postDate: '1 Day ago',
        jobID: '1',
        url: 'https://www.codesmith.io/'
      },
      {
        jobTitle: 'Dry Erase Marker Checker - QA',
        company: 'Codesmith',
        location: 'Venice, CA',
        snippet: `
          <ul>
            <li>Lead a team of QA engineers.</li>
            <li>Work with software developers and design team to understand product design and interfaces.</li>
            <li>Work with product teams to understand release requirements and priorities</li>
            <li>Ensure application reliability</li>
            <li>Define testing strategies and standards</li>
            <li>Create manual and automated testing scripts</li>
            <li>Write test cases, plans, and scenarios to validate user story acceptance criteria</li>
            <li>Continuous improvement of processes</li>
            <li>Mentor QA colleagues (both stateside and overseas)</li>
            <li>Integrate QA to deployment processes</li>
            <li>Document QA processes</li>
            <li>Report progress, plans, and problems to the leadership team on a scheduled basis</li>
          </ul>
        `,
        postDate: '1 Day ago',
        jobID: '2',
        url: 'https://www.codesmith.io/'
      },
      {
        jobTitle: 'Ping Pong Coordinator',
        company: 'Codesmith',
        location: 'Venice, CA',
        snippet: `The ping pong coordinator is the person who plans and executes ping pong events, taking responsibility for the creative, technical, and logistical elements. This includes overall event ranking, design, brand building, marketing and communication strategy, audio-visual production, script writing, logistics, budgeting, negotiation, and client service.`,
        postDate: '1 Day ago',
        jobID: '3',
        url: 'https://www.codesmith.io/'
      }
    ],
    keywordSearch: '',
    locationSearch: '',
    radius: '',
    job_ID: null,
    pageLike: null,
    fetched: true //will need to set to false upon launching to fetch upon initial load
  });

  return (
    <StoreContext.Provider value={[Store, setStore]}>
      {props.children}
    </StoreContext.Provider>
  );
};
